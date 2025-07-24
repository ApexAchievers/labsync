import React, { useState } from 'react';
import axios from 'axios';
import { apiClient } from '../api/client';
import { UserPlus, Edit, Trash2 } from 'lucide-react';

export default function StaffManagement() {
    const [staffList, setStaffList] = useState([]);
    const [editId, setEditId] = useState(null);
    const [newStaff, setNewStaff] = useState({ fullName: '', email: '', specialties: '' });
    const [activeTab, setActiveTab] = useState('list');

    // Hardcoded specialties
    const specialtyOptions = [
       'Full Blood Count', 'Blood Sugar,Blood Film for Malaria Parasites', 'Sickle Cell, HB Electrophoresis (Genotype)', 'Erythrocyte Sedimentation Rate (ESR)', 'Blood Grouping', 'Typhidot', 'H. Pylori', 'VDRL for Syphillis', 'Hepatitis B', 'Hepatitis C', 'Retro Screenfor HIV', 'Urine R/E', 'Stool R/E', 'Covid 19', 'Liver Function Test (LFT)','Kidney Function Test (KFT)', 'BUE & Cr(Gene Xpert)', 'Hormonal/Fertility Tests'
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
                // if (editId !== null) {
                //     // PUT request for update (optional)
                // } else {
                    console.log('Inviting new staff:', newStaff);
                    console.log
                    const response = await apiClient.post('/api/technician/invite', newStaff); // replace with real URL
                    setStaffList([...staffList, response.data]);
                // }
                setNewStaff({ name: '', email: '', specialties: '' });
                setEditId(null);
                setActiveTab('list');
            } catch (error) {
                console.error('Error saving staff:', error);
            }
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
                <h2 className="text-3xl font-bold text-gray-800">Staff Management</h2>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setActiveTab('list')}
                        className={`px-4 py-2 rounded-lg ${activeTab === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                        Staff List
                    </button>
                    <button
                        onClick={handleAddStaff}
                        className={`px-4 py-2 rounded-lg ${activeTab === 'add' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                        <UserPlus className="inline-block w-4 h-4 mr-2" />
                        Add Technician
                    </button>
                </div>
            </div>

            {activeTab === 'add' && (
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        {editId !== null ? 'Edit Staff Member' : 'Add New Staff Member'}
                    </h3>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                value={newStaff.fullName}
                                onChange={(e) => setNewStaff({ ...newStaff, fullName: e.target.value })}
                                className="w-full px-3 py-2 border rounded-md focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={newStaff.email}
                                onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                                className="w-full px-3 py-2 border rounded-md focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Specialties</label>
                            <select
                                value={newStaff.specialties}
                                onChange={(e) => setNewStaff({ ...newStaff, specialties: e.target.value })}
                                className="w-full px-3 py-2 border rounded-md focus:ring-blue-500"
                            >
                                <option value="">Select a specialty</option>
                                {specialtyOptions.map((specialty, idx) => (
                                    <option key={idx} value={specialty}>
                                        {specialty}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={inviteTechnician}
                                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                            >
                                {editId !== null ? 'Update Staff' : 'Add Staff'}
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('list');
                                    setEditId(null);
                                    setNewStaff({ fullName: '', email: '', specialties: '' });
                                }}
                                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
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
