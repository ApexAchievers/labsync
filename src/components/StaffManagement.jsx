import React, { useState } from 'react';
import { UserPlus, Edit, Trash2, ClipboardList, Plus } from 'lucide-react';

const initialStaffList = [
    { id: 1, name: 'Dr. Comfort Owusu', email: 'cowusu@gmail.com', role: 'Lab supervisor' },
    { id: 2, name: 'Emmanuel Asare', role: 'Technician', email: 'easare@lab.com' },
    { id: 3, name: 'Linda Mensah', role: 'Lab Assistant', email: 'lmensah@lab.com' },
];

const roleOptions = [
    'Lab supervisor',
    'Technician',
    'Lab Assistant',
    'Research Assistant',
    'Quality Control Officer',
    'Safety Officer'
];

export default function StaffManagement() {
    const [staffList, setStaffList] = useState(initialStaffList);
    const [editId, setEditId] = useState(null);
    const [newStaff, setNewStaff] = useState({ name: '', email: '', role: '' });
    const [activeTab, setActiveTab] = useState('list');
    const [taskInput, setTaskInput] = useState('');
    const [assigningTaskToId, setAssigningTaskToId] = useState(null);

    const handleAddStaff = () => {
        setNewStaff({ name: '', email: '', role: '' });
        setEditId(null);
        setActiveTab('add');
    };

    const handleEditStaff = (id) => {
        const staff = staffList.find((s) => s.id === id);
        setNewStaff({ name: staff.name, email: staff.email, role: staff.role });
        setEditId(id);
        setActiveTab('add');
    };

    const handleFormSubmit = () => {
        if (newStaff.name && newStaff.email && newStaff.role) {
            if (editId !== null) {
                setStaffList(
                    staffList.map((s) =>
                        s.id === editId ? { ...s, ...newStaff } : s
                    )
                );
            } else {
                const newEntry = {
                    id: Math.max(...staffList.map(s => s.id), 0) + 1,
                    ...newStaff,

                };
                setStaffList([...staffList, newEntry]);
            }
            setNewStaff({ name: '', email: '', role: '' });
            setEditId(null);
            setActiveTab('list');
        }
    };

    const handleDeleteStaff = (id) => {
        if (confirm('Are you sure you want to delete this staff member?')) {
            setStaffList(staffList.filter((s) => s.id !== id));
        }
    };

    const handleTaskSubmit = (id) => {
        if (taskInput.trim()) {
            setStaffList(
                staffList.map((s) =>
                    s.id === id ? { ...s, tasks: [...(s.tasks || []), taskInput.trim()] } : s
                )
            );
            setTaskInput('');
            setAssigningTaskToId(null);
        }
    };

    const handleRemoveTask = (staffId, taskIndex) => {
        setStaffList(
            staffList.map((s) =>
                s.id === staffId
                    ? { ...s, tasks: s.tasks.filter((_, idx) => idx !== taskIndex) }
                    : s
            )
        );
    };

    return (
        <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-800">Staff Management</h2>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setActiveTab('list')}
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'list'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        Staff List
                    </button>
                    <button
                        onClick={handleAddStaff}
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'add'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <UserPlus className="inline-block w-4 h-4 mr-2" />
                        Add Staff
                    </button>
                    <button
                        onClick={() => setActiveTab('tasks')}
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'tasks'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <ClipboardList className="inline-block w-4 h-4 mr-2" />
                        Assignments
                    </button><button
                        onClick={() => setActiveTab('assign')}
                        className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'assign'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        <Plus className="inline-block w-4 h-4 mr-2" />
                        Assign Task
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
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={newStaff.name}
                                onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter full name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                value={newStaff.email}
                                onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter email address"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Role
                            </label>
                            <select
                                value={newStaff.role}
                                onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="">Select a role</option>
                                {roleOptions.map(role => (
                                    <option key={role} value={role}>{role}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    handleFormSubmit();
                                }}
                                className="px-6 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition-colors"
                            >
                                {editId !== null ? 'Update Staff' : 'Add Staff'}
                            </button>
                            <button
                                onClick={() => {
                                    setActiveTab('list');
                                    setEditId(null);
                                    setNewStaff({ name: '', role: '', email: '' });
                                }}
                                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
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
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">Role</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">Email</th>
                                    <th className="px-8 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {staffList.map(({ id, name, role, email }) => (
                                    <tr key={id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full  text-gray-800">
                                                {role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {/* <div className="text-sm text-gray-900">
                                                {tasks && tasks.length > 0 ? (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        {tasks.length} task{tasks.length !== 1 ? 's' : ''}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400">No tasks assigned</span>
                                                )}
                                            </div> */}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify- space-x-2">
                                                {/* <button
                                                    onClick={() => {
                                                        setAssigningTaskToId(id);
                                                        setTaskInput('');
                                                    }}
                                                    className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50"
                                                    title="Assign Task"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button> */}
                                                <button
                                                    onClick={() => handleEditStaff(id)}
                                                    className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50"
                                                    title="Edit Staff"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteStaff(id)}
                                                    className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                                                    title="Delete Staff"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'tasks' && (
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800">Task Assignments</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff Member</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Tasks</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {staffList.map(({ id, name, tasks }) => (
                                    <tr key={id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{name}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {tasks && tasks.length > 0 ? (
                                                <div className="space-y-1">
                                                    {tasks.map((task, idx) => (
                                                        <div key={idx} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md">
                                                            <span className="text-sm text-gray-900">{task}</span>
                                                            <button
                                                                onClick={() => handleRemoveTask(id, idx)}
                                                                className="text-red-500 hover:text-red-700 ml-2"
                                                                title="Remove task"
                                                            >
                                                                <Trash2 className="w-3 h-3" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <span className="text-gray-400 text-sm">No tasks assigned</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'assign' && (
                <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Assign Task to Staff</h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Select Staff Member
                            </label>
                            <select
                                onChange={(e) => setAssigningTaskToId(Number(e.target.value))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                defaultValue=""
                            >
                                <option value="" disabled>Select staff</option>
                                {staffList.map((staff) => (
                                    <option key={staff.id} value={staff.id}>
                                        {staff.name} — {staff.role}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Task Description
                            </label>
                            <textarea
                                value={taskInput}
                                onChange={(e) => setTaskInput(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="3"
                                placeholder="Describe the task..."
                            />
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => {
                                    setAssigningTaskToId(null);
                                    setTaskInput('');
                                    setActiveTab('tasks');
                                }}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleTaskSubmit(assigningTaskToId)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                disabled={!assigningTaskToId || !taskInput.trim()}
                            >
                                Assign Task
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {/* Task Assignment Modal */}
            {/* {assigningTaskToId !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                        <h3 className="text-lg font-semibold mb-4">
                            Assign Task to {staffList.find(s => s.id === assigningTaskToId)?.name}
                        </h3>
                        <div className="space-y-4">
                            <textarea
                                value={taskInput}
                                onChange={(e) => setTaskInput(e.target.value)}
                                placeholder="Enter task description..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                rows="3"
                            />
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={() => {
                                        setAssigningTaskToId(null);
                                        setTaskInput('');
                                    }}
                                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => handleTaskSubmit(assigningTaskToId)}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    disabled={!taskInput.trim()}
                                >
                                    Assign Task
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
}