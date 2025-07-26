import React, { useState } from 'react';
import axios from 'axios';
import { apiClient } from '../api/client';
import { UserPlus, Edit, Trash2 } from 'lucide-react'
import { toast } from 'react-toastify';


export default function StaffManagement() {
    const [staffList, setStaffList] = useState([]);
    const [editId, setEditId] = useState(null);
    const [newStaff, setNewStaff] = useState({ fullName: '', email: '', specialties: '' });
    const [activeTab, setActiveTab] = useState('list');

    // Hardcoded specialties
    const specialtyOptions = [
        'Full Blood Count', 'Blood Sugar,Blood Film for Malaria Parasites', 'Sickle Cell, HB Electrophoresis (Genotype)', 'Erythrocyte Sedimentation Rate (ESR)', 'Blood Grouping', 'Typhidot', 'H. Pylori', 'VDRL for Syphillis', 'Hepatitis B', 'Hepatitis C', 'Retro Screenfor HIV', 'Urine R/E', 'Stool R/E', 'Covid 19', 'Liver Function Test (LFT)', 'Kidney Function Test (KFT)', 'BUE & Cr(Gene Xpert)', 'Hormonal/Fertility Tests'
    ];

    const handleAddStaff = () => {
        setNewStaff({ fullName: '', email: '', specialties: '' });
        setEditId(null);
        setActiveTab('add');
    };

    const handleEditStaff = (id) => {
        const staff = staffList.find((s) => s.id === id);
        if (staff) {
            setNewStaff({
                fullName: staff.name,
                email: staff.email,
                specialties: staff.specialties,
            });
            setEditId(id);
            setActiveTab('add');
        }
    };

    const inviteTechnician = async () => {
        if (newStaff.fullName && newStaff.email && newStaff.specialties) {
            try {
                const response = await apiClient.post('/api/technician/invite', newStaff);
                setStaffList([...staffList, response.data]);

                toast.success('Technician invited successfully!');
                setNewStaff({ name: '', email: '', specialties: '' });
                setEditId(null);
                setActiveTab('list');
            } catch (error) {
                toast.error(error?.response?.data?.message || 'Failed to invite technician');
                console.error('Error saving staff:', error);
            }
        } else {
            toast.warning('Please fill in all fields');
        }
    };


    const handleDeleteStaff = async (id) => {
        if (confirm('Are you sure you want to delete this staff member?')) {
            try {
                // await axios.delete(`https://your-api.com/api/staff/${id}`); // uncomment for real delete
                setStaffList(staffList.filter((s) => s.id !== id));
            } catch (error) {
                console.error('Error deleting staff:', error);
            }
        }
    };

    return (
        <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl text-gray-500"> Technician Management</h2>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setActiveTab('list')}
                        className={`px-4 py-2 rounded-lg ${activeTab === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-100'}`}
                    >
                        Technicians List
                    </button>
                    <button
                        onClick={handleAddStaff}
                        className={`px-4 py-2 rounded-lg ${activeTab === 'add' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-100'}`}
                    >
                        <UserPlus className="inline-block w-4 h-4 mr-2" />
                        Add Technician
                    </button>
                </div>
            </div>

            {activeTab === 'add' && (
                <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg mx-auto animate-fade-in-up">
                    <h3 className="text-xl font-bold mb-6 text-blue-500 text-center">
                        {editId !== null ? 'Edit Staff Member' : 'Add Technician'}
                    </h3>
                    <form className="space-y-6">
                        <div>
                            <label className="text-sm text-gray-600">Full Name</label>
                            <input
                                type="text"
                                value={newStaff.fullName}
                                onChange={(e) => setNewStaff({ ...newStaff, fullName: e.target.value })}
                                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm bg-blue-50 placeholder-gray-400"
                                placeholder="Enter full name"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 ">Email</label>
                            <input
                                type="email"
                                value={newStaff.email}
                                onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                                className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition shadow-sm bg-blue-50 placeholder-gray-400"
                                placeholder="Enter email address"
                            />
                        </div>
                        <div>
                            <label  className="text-sm text-gray-500 ">Specialties</label>
                            <select
                                value={newStaff.specialties}
                                onChange={(e) => setNewStaff({ ...newStaff, specialties: e.target.value })}
                                className="w-full px-4 py-3 border border-blue-200 rounded-md  focus:border-blue-400 transition shadow-sm"
                            >
                                <option className="text-gray-500"disabled value="">Select a specialty</option>
                                {specialtyOptions.map((specialty, idx) => (
                                    <option className='text-gray-500' key={idx} value={specialty}>
                                        {specialty}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-4 justify-end pt-2">
                            <button
                                type="button"
                                onClick={inviteTechnician}
                                className="px-4 bg-blue-500 text-white rounded-md shadow hover:bg-gray-300 transition-all duration-200"
                            >
                                {editId !== null ? 'Update Staff' : 'Add Staff'}
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setActiveTab('list');
                                    setEditId(null);
                                    setNewStaff({ fullName: '', email: '', specialties: '' });
                                }}
                                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-all duration-200"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
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
            )}

            {activeTab === 'list' && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">Staff Directory</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialties</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {staffList.map(({ id, name, specialties, email }) => (
                                    <tr key={id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">{name}</td>
                                        <td className="px-6 py-4">{specialties}</td>
                                        <td className="px-6 py-4">{email}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end space-x-2">
                                                <button onClick={() => handleEditStaff(id)} className="text-blue-600 hover:text-blue-900">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => handleDeleteStaff(id)} className="text-red-600 hover:text-red-900">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {staffList.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="text-center text-gray-400 py-6">
                                            No staff found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
