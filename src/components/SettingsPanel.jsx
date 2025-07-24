import React from 'react';
import { Settings, FileUser, Bell,Pencil } from 'lucide-react';
import { Link } from 'react-router';

export default function SettingsPanel({ section }) {
  return (
    <div className="space-y-6 max-w-xl">
      <div className="flex items-center gap-2">
        <Settings className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
      </div>

      {/* Render based on section */}
      {section === 'profile' && (
       <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Your Profile
        </h1>

        <form className="space-y-6 max-w-md mx-auto">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Button */}
          <Link to={'/admin-profile'} className="pt-4 text-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              <Pencil className="w-4 h-4" />
              Edit Profile
            </button>
          </Link>
        </form>
      </div>
    </div>
      )}

      {section === 'notifications' && (
        <form className="space-y-4 bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-gray-700" />
            <h3 className="text-lg font-medium text-gray-700">Notification Preferences</h3>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Method</label>
            <select className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Email Alerts</option>
              <option>SMS Alerts</option>
              <option>Push Notifications</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Save Preferences
          </button>
        </form>
      )}
    </div>
  );
}
