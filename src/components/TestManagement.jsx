import React, { useEffect, useState } from 'react';
import { Pencil, Trash2, Loader2, X } from 'lucide-react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function TestManagement() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAppointments([
                {
                    id: 1,
                    name: 'John Doe',
                    age: 32,
                    testType: 'Malaria Antigen',
                    contact: '0241234567',
                    email: 'john.doe@example.com',
                    schedule: 'July 20, 2025 - 09:30 AM',
                    technician: 'Emmanuel Asare',
                    status: 'Confirmed',
                    bookedAt: 'July 18, 2025 - 02:15 PM',
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    age: 28,
                    testType: 'Hepatitis B',
                    contact: '0559876543',
                    email: 'jane.smith@example.com',
                    schedule: 'July 21, 2025 - 11:00 AM',
                    technician: 'Dr. Comfort Owusu',
                    status: 'Pending',
                    bookedAt: 'July 18, 2025 - 03:40 PM',
                },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const handleDelete = (id) => {
        setAppointments((prev) => prev.filter((appt) => appt.id !== id));
        toast.error('Appointment deleted');
    };

    const handleStatusChange = (id, newStatus) => {
        setAppointments((prev) =>
            prev.map((appt) =>
                appt.id === id ? { ...appt, status: newStatus } : appt
            )
        );
        toast.info(`Status changed to ${newStatus}`);
    };

    const openEditModal = (id) => {
        const target = appointments.find((appt) => appt.id === id);
        setEditingId(id);
        setEditForm({ ...target });
        setIsModalOpen(true);
    };

    const handleSave = () => {
        setAppointments((prev) =>
            prev.map((appt) =>
                appt.id === editingId ? { ...editForm } : appt
            )
        );
        setIsModalOpen(false);
        toast.success('Appointment updated');
    };

    return (
        <div className="space-y-6 relative">
            {/* <ToastContainer position="top-right" autoClose={3000} /> */}

            <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-gray-800">Booked Tests</h2>
            </div>

            <div className="bg-white rounded-xl shadow overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="px-2 text-left">Patient</th>
                            <th>Age</th>
                            <th>Test</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Appointment Date</th>
                            <th>Technician</th>
                            <th>Status</th>
                            <th>Booked At</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {loading ? (
                            <tr>
                                <td colSpan="10" className="text-center py-6">
                                    <Loader2 className="w-25 h-10 animate-spin inline-block text-gray-500" />
                                </td>
                            </tr>
                        ) : (
                            appointments.map((appt) => (
                                <tr key={appt.id} className="border-t">
                                    <td className="px-4 py-3">{appt.name}</td>
                                    <td className="px-4 py-3">{appt.age}</td>
                                    <td className="px-3">{appt.testType}</td>
                                    <td className="px-4 py-3">{appt.contact}</td>
                                    <td className="px-4 py-3">{appt.email}</td>
                                    <td className="px-4 py-3">{appt.schedule}</td>
                                    <td className="px-4 py-3">{appt.technician}</td>
                                    <td>
                                        <select
                                            className="text-xs border px-2 py-1 rounded"
                                            value={appt.status}
                                            onChange={(e) => handleStatusChange(appt.id, e.target.value)}
                                        >
                                            <option>Pending</option>
                                            <option>Confirmed</option>
                                            <option>Completed</option>
                                        </select>
                                    </td>
                                    <td className="px-2">{appt.bookedAt}</td>
                                    <td className="text-right space-x-2 px-4">
                                        <button
                                            className="text-blue-600 hover:underline "
                                            onClick={() => openEditModal(appt.id)}
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </button>
                                        <button
                                            className="text-red-600 hover:underline"
                                            onClick={() => handleDelete(appt.id)}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-2xl shadow-lg relative">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Edit Appointment</h3>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Patient Name</label>
                                <input
                                    className="border px-3 py-2 rounded w-full"
                                    value={editForm.name}
                                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Age</label>
                                <input
                                    type="number"
                                    className="border px-3 py-2 rounded w-full"
                                    value={editForm.age}
                                    onChange={(e) => setEditForm({ ...editForm, age: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Test Type</label>
                                <input
                                    className="border px-3 py-2 rounded w-full"
                                    value={editForm.testType}
                                    onChange={(e) => setEditForm({ ...editForm, testType: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Contact</label>
                                <input
                                    className="border px-3 py-2 rounded w-full"
                                    value={editForm.contact}
                                    onChange={(e) => setEditForm({ ...editForm, contact: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Email</label>
                                <input
                                    className="border px-3 py-2 rounded w-full"
                                    value={editForm.email}
                                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-medium text-gray-700">Schedule Date</label>
                                <input
                                    className="border px-3 py-2 rounded w-full"
                                    value={editForm.schedule}
                                    onChange={(e) => setEditForm({ ...editForm, schedule: e.target.value })}
                                />
                            </div>

                            <div className="col-span-2">
                                <label className="block mb-1 font-medium text-gray-700">Technician</label>
                                <input
                                    className="border px-3 py-2 rounded w-full"
                                    value={editForm.technician}
                                    onChange={(e) => setEditForm({ ...editForm, technician: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="mt-6 text-right space-x-2">
                            <button
                                className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
