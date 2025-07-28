import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function BookedTests() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAppointments = async () => {
            setLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('https://laboratory-sync-api.onrender.com/api/Labtask/appointments-tasks', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // Ensure appointments is always an array
                let data = res.data;
                let appts = [];
                if (Array.isArray(data)) {
                    appts = data;
                } else if (Array.isArray(data.appointments)) {
                    appts = data.appointments;
                } else if (data.results && Array.isArray(data.results)) {
                    appts = data.results;
                }
                setAppointments(appts);
            } catch (err) {
                setError('Failed to fetch appointments');
            } finally {
                setLoading(false);
            }
        };
        fetchAppointments();
    }, []);

    // Defensive: always use an array for pagination logic
    const safeAppointments = Array.isArray(appointments) ? appointments : (appointments ? [appointments] : []);
    const totalPages = safeAppointments.length > 0 ? Math.ceil(safeAppointments.length / itemsPerPage) : 1;
    const paginatedAppointments = safeAppointments.length > 0 ? safeAppointments.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

    return (
        <div className="w-full max-w-7xl mx-auto bg-white p-4 sm:p-8 rounded-2xl shadow-2xl animate-fade-in-up mt-6 font-poppins">
            <h1 className="text-xl sm:text-3xl mb-6 text-center text-gray-400 tracking-wide animate-fade-in">Booked Appointments</h1>
            <div className="overflow-x-auto">
                {loading ? (
                    <div className="text-center text-gray-500 py-8">Loading...</div>
                ) : error ? (
                    <div className="text-center text-red-500 py-8">{error}</div>
                ) : (
                    <>
                        <table className="min-w-full shadow-md rounded-md text-xs sm:text-sm md:text-base">
                            <thead className="bg-blue-500">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs text-white uppercase font-l">Fullname</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Email</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Gender</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Phone Number</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Age</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Date</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Time</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Test Type</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Priority</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-purple-100">
                                {Array.isArray(paginatedAppointments) && paginatedAppointments.length > 0 ? paginatedAppointments.map((appt) => {
                                    // Support both flat and nested patientDetails/testType
                                    const patient = appt.patientDetails || appt.patient || appt;
                                    const tests = appt.testType || appt.testTypes || appt.tests || [];
                                    return (
                                        <tr
                                            key={appt.id}
                                            className="hover:bg-purple-100 cursor-pointer transition-all duration-300 ease-in-out animate-fade-in-up"
                                            onClick={() => navigate(`/appointments/${appt.id}`)}
                                            tabIndex={0}
                                            aria-label={`View details for ${patient.fullName || patient.name}`}
                                        >
                                            <td className="px-4 py-3 whitespace-nowrap text-gray-500 text-xs font-medium">{patient.fullName || patient.name}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-blue-500 text-xs font-medium">{patient.email}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-gray-500 text-xs font-medium">{patient.gender}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-gray-500 text-xs font-medium">{patient.contact || patient.phone || patient.phoneNumber}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-gray-500 text-xs font-medium">{patient.age}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-gray-500 text-xs font-medium">{
                                                (() => {
                                                    const rawDate = appt.scheduledDate || appt.date;
                                                    if (!rawDate) return '';
                                                    // If ISO or date+time, split at 'T' or space
                                                    return rawDate.split('T')[0].split(' ')[0];
                                                })()
                                            }</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-gray-500 text-xs font-medium">{appt.scheduledTime || appt.time}</td>
                                            <td className="px-4 py-3 whitespace-nowrap">
                                                <div className="flex flex-wrap gap-1 text-xs font-medium">
                                                    {Array.isArray(tests)
                                                        ? tests.map((type, i) => (
                                                            <span key={i} className="inline-block px-2 py-1 rounded text-gray-600 text-xs font-semibold shadow-sm">{type.label || type}</span>
                                                        ))
                                                        : <span className="inline-block px-2 py-1 rounded text-gray-600 text-xs font-semibold shadow-sm">{tests.label || tests}</span>
                                                    }
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 whitespace-nowrap text-xs font-medium">
                                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow ${appt.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{appt.priority}</span>
                                            </td>
                                        </tr>
                                    );
                                }) : (
                                    <tr>
                                        <td colSpan={5} className="text-center text-gray-400">No appointments found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 mt-4">
                                <button
                                    className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                >
                                    Prev
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i + 1}
                                        className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                        onClick={() => setCurrentPage(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button
                                    className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .animate-fade-in-up {
                    animation: fadeIn 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
