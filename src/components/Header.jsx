import React, { useState, useEffect } from 'react';
import { Bell, UserCircle2, X } from 'lucide-react';

// Mock fetch function
const fetchUserProfile = async () => {
  return {
    name: 'Prince Darfour',
    email: 'prince@example.com',
    role: 'Lab Supervisor',
  };
};

// Mock save function
const saveUserProfile = async (data) => {
  console.log('Saving user profile:', data);
  return { success: true };
};

export default function Header({ activeMenu }) {
  const titleMap = {
    dashboard: 'Dashboard Overview',
    staff: 'Staff Management',
    tests: 'Test Management',
    inventory: 'Inventory Tracking',
    // analytics: 'Analytics & Reports',
    settings: 'Settings & Preferences',
  };

  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', role: '' });
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    if (showProfile) {
      fetchUserProfile().then(data => {
        setUser(data);
        setFormData(data);
      });
    }
  }, [showProfile]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    const res = await saveUserProfile(formData);
    if (res.success) {
      setUser(formData);
      setShowProfile(false);
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white relative">
      <h1 className="text-xl font-semibold text-gray-800">{titleMap[activeMenu]}</h1>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button onClick={() => setShowProfile(true)}>
          <UserCircle2 className="w-8 h-8 text-gray-700" />
        </button>
      </div>

      {/* Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative">
            <button
              onClick={() => setShowProfile(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>
            <h2 className="text-lg font-semibold mb-4">User Profile</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="flex justify-end pt-4">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
