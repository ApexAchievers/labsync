import React from 'react';
// Example data, replace with real data as needed
const technicians = [
  { name: 'Alice Johnson', email: 'alice@lab.com', specialty: 'Blood Sugar' },
  { name: 'Bob Smith', email: 'bob@lab.com', specialty: 'Covid 19' },
];
const patients = [
  { name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
];

export default function DashboardContent() {
  // Example data, replace with real data as needed
  const technicians = [
    { name: 'Alice Johnson', email: 'alice@lab.com', specialty: 'Blood Sugar' },
    { name: 'Bob Smith', email: 'bob@lab.com', specialty: 'Covid 19' },
  ];
  const patients = [
    { name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  ];
  // Example appointments array, replace with real data or import from Appointments component
  const appointments = [
    { id: 1, patient: 'John Doe', technician: 'Alice Johnson', date: '2025-07-25' },
    { id: 2, patient: 'Jane Smith', technician: 'Bob Smith', date: '2025-07-26' },
    { id: 3, patient: 'John Doe', technician: 'Bob Smith', date: '2025-07-27' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-6">
      {/* Analytics Overview - Separate Cards */}
      <div className="col-span-1">
        <div className="bg-blue-500 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center animate-fade-in-up">
          <span className="text-xl font-extrabold text-white">{patients.length}</span>
          <span className="text-white text-sm mt-1">Total Patients</span>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-yellow-300 rounded-2xl shadow-md p-6 flex flex-col items-center justify-center animate-fade-in-up">
          <span className="text-xl font-extrabold text-white">{technicians.length}</span>
          <span className="text-white text-sm mt-1">Total Technicians</span>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-green-400 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center animate-fade-in-up">
          <span className="text-xl font-extrabold text-white">{appointments.length}</span>
          <span className="text-white text-sm mt-1">Booked Appointments</span>
        </div>
      </div>

      {/* Technicians Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up lg:col-span-2">
        <h2 className="text-xl font-bold text-blue-500 mb-4">Technicians</h2>
        <ul className="divide-y divide-blue-100">
          {technicians.map((tech, idx) => (
            <li key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-blue-50 rounded-lg px-2 transition-all duration-200">
              <div>
                <div className="font-semibold text-gray-800">{tech.name}</div>
                <div className="text-sm text-blue-700">{tech.email}</div>
              </div>
              <span className="mt-2 sm:mt-0 inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold shadow">{tech.specialty}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Patients Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up lg:col-span-1">
        <h2 className="text-xl font-bold text-blue-700 mb-4">Patients</h2>
        <ul className="divide-y divide-blue-100">
          {patients.map((pat, idx) => (
            <li key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-green-50 rounded-lg px-2 transition-all duration-200">
              <div>
                <div className="font-semibold text-gray-800">{pat.name}</div>
                <div className="text-sm text-blue-700">{pat.email}</div>
              </div>
              <span className={`mt-2 sm:mt-0 inline-block px-3 py-1 rounded-full text-xs font-semibold shadow ${pat.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{pat.status}</span>
            </li>
          ))}
        </ul>
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
