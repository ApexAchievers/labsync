


import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PatientList() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatients = async () => {
            setLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('https://laboratory-sync-api.onrender.com/api/auth/get-all-users', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                // Filter only patients if needed (assuming role property)
                const allUsers = Array.isArray(res.data) ? res.data : (Array.isArray(res.data.users) ? res.data.users : []);
                const patientsOnly = allUsers.filter(user => (user.role === 'patient' || user.role === 'user'));
                setPatients(patientsOnly);
            } catch (err) {
                setError('Failed to fetch patients');
            } finally {
                setLoading(false);
            }
        };
        fetchPatients();
    }, []);

    return (
        <div className="min-h-screen px-2 sm:px-4 font-poppins">
            <div className="w-full max-w-4xl mx-auto bg-white p-4 sm:p-8 rounded-2xl shadow-2xl animate-fade-in-up">
                <h1 className="text-xl sm:text-3xl mb-6 sm:mb-8 text-center text-gray-400 animate-fade-in">Patients List</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full shadow-md rounded-xl text-xs sm:text-sm md:text-base">
                        <thead className="bg-blue-500">
                            <tr>
                                <th className="px-4 sm:px-8 py-2 sm:py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Name</th>
                                <th className="px-4 sm:px-8 py-2 sm:py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Email</th>
                                <th className="px-4 sm:px-8 py-2 sm:py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Phone</th>
                                <th className="px-4 sm:px-8 py-2 sm:py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-blue-100">
                            {loading ? (
                                <tr><td colSpan={4} className="text-center py-4 text-gray-400">Loading...</td></tr>
                            ) : error ? (
                                <tr><td colSpan={4} className="text-center py-4 text-red-400">{error}</td></tr>
                            ) : patients.length === 0 ? (
                                <tr><td colSpan={4} className="text-center py-4 text-gray-400">No patients found</td></tr>
                            ) : (
                                patients.map((pat, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50 transition-all duration-300 ease-in-out animate-fade-in-up">
                                        <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap font-light text-gray-800">{pat.fullName || pat.name || ''}</td>
                                        <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-blue-500">{pat.email || ''}</td>
                                        <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-gray-600 font-light">{pat.phone || ''}</td>
                                        <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                                            <span className={`inline-block px-3 py-1 text-xs font-semibold ${pat.status === 'Active' ? 'text-green-700' : 'text-red-700'}`}>{pat.status || 'Active'}</span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Animations (TailwindCSS custom classes, add to your CSS if not present) */}
            <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in both;
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
        </div>
    );
}