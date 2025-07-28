
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function DashboardContent() {
  const [technicians, setTechnicians] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        const [techRes, apptRes] = await Promise.all([
          axios.get('https://laboratory-sync-api.onrender.com/api/technician', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get('https://laboratory-sync-api.onrender.com/api/Labtask/appointments-tasks', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setTechnicians(Array.isArray(techRes.data) ? techRes.data : []);
        // Appointments may be array or object
        let apptArr = [];
        if (Array.isArray(apptRes.data)) apptArr = apptRes.data;
        else if (Array.isArray(apptRes.data.appointments)) apptArr = apptRes.data.appointments;
        else if (Array.isArray(apptRes.data.results)) apptArr = apptRes.data.results;
        setAppointments(apptArr);
      } catch (err) {
        setError('Failed to fetch dashboard data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Patients endpoint is not available, so count unique patients from appointments
  useEffect(() => {
    if (appointments.length > 0) {
      const uniquePatients = new Set();
      appointments.forEach(appt => {
        const patient = appt.patientDetails || appt.patient || appt;
        if (patient && (patient.fullName || patient.name || patient.email)) {
          uniquePatients.add(patient.fullName || patient.name || patient.email);
        }
      });
      setPatients(Array.from(uniquePatients));
    }
  }, [appointments]);


  return (
    <div className="w-full min-h-screen max-w-full px-2 sm:px-4 md:px-8 mx-auto overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 py-4 md:py-6">
        {/* Analytics Overview - Separate Cards */}
        <div className="col-span-1">
          <div className="bg-blue-500 rounded-2xl shadow-md p-4 md:p-6 flex flex-col items-center justify-center animate-fade-in-up w-full">
            <span className="text-xl md:text-2xl font-extrabold text-white">{loading ? '...' : patients.length}</span>
            <span className="text-white text-xs md:text-sm mt-1">Total Patients</span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-yellow-300 rounded-2xl shadow-md p-4 md:p-6 flex flex-col items-center justify-center animate-fade-in-up w-full">
            <span className="text-xl md:text-2xl font-extrabold text-white">{loading ? '...' : technicians.length}</span>
            <span className="text-white text-xs md:text-sm mt-1">Total Technicians</span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-green-400 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center justify-center animate-fade-in-up w-full">
            <span className="text-xl md:text-2xl font-extrabold text-white">{loading ? '...' : appointments.length}</span>
            <span className="text-white text-xs md:text-sm mt-1">Booked Appointments</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pb-4 md:pb-6">
        {/* Technicians Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 animate-fade-in-up lg:col-span-2 w-full overflow-x-auto">
          <h2 className="text-lg md:text-xl font-bold text-blue-500 mb-4">Technicians</h2>
          <ul className="divide-y divide-blue-100">
            {loading ? (
              <li className="py-3 text-center text-gray-400">Loading...</li>
            ) : error ? (
              <li className="py-3 text-center text-red-400">{error}</li>
            ) : (
              technicians.map((tech, idx) => (
                <li key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-blue-50 rounded-lg px-2 transition-all duration-200">
                  <div>
                    <div className="font-semibold text-gray-800">{tech.name || tech.fullName || tech.email}</div>
                    <div className="text-sm text-blue-700">{tech.email}</div>
                  </div>
                  <span className="mt-2 sm:mt-0 inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold shadow">{tech.specialties || tech.specialty}</span>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Patients Overview */}
        <div className="bg-white rounded-md shadow-lg p-4 md:p-6 animate-fade-in-up lg:col-span-1 w-full overflow-x-auto">
          <h2 className="text-lg md:text-xl font-bold text-blue-500 mb-4">Patients</h2>
          <ul className="divide-y divide-blue-100">
            {loading ? (
              <li className="py-3 text-center text-gray-400">Loading...</li>
            ) : error ? (
              <li className="py-3 text-center text-red-400">{error}</li>
            ) : (
              patients.map((pat, idx) => (
                <li key={idx} className="py-1 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-green-50 rounded-lg px-2 transition-all duration-200">
                  <div>
                    <div className="font-semibold text-gray-800">{pat}</div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* Animations (if not present globally) */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
      `}</style>
    </div>
  );
}
// import React from 'react';
// import { TrendingUp, Clock, Percent, AlertTriangle } from 'lucide-react';
// import StaffManagement from './StaffManagement';



// export default function DashboardContent() {
//   return (
//     <>
//     <div>
//       <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1>
//       <p className="text-gray-600 mb-4">
//         Welcome to your dashboard! Here you can find a quick overview of your lab's performance and key metrics.
//       </p>
//     </div>
    
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
//     </div>
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">Staff Management</h2>
//       <p className="text-gray-600 mb-4">
//         Manage your lab staff efficiently. Add, edit, or remove staff members as needed.
//       </p>

//     </div>
//     </>
//   );
// }
