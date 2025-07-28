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
        <div className="min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 py-10 px-2 sm:px-4 font-poppins">
          <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl animate-fade-in-up">
            <h1 className="text-3xl font-bold mb-8 text-center text-blue-700 tracking-wide animate-fade-in">Your Profile</h1>
            <form className="space-y-6 max-w-lg mx-auto">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm bg-blue-50 placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>
              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm bg-blue-50 placeholder-gray-400"
                  placeholder="Enter new password"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm bg-blue-50 placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>
              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm bg-blue-50 placeholder-gray-400"
                  placeholder="Enter your phone number"
                />
              </div>
              {/* Button */}
              <div className="pt-4 text-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-green-600 transition-all duration-300"
                >
                  {/* <Pencil className="w-4 h-4" /> */}
                  Edit Profile
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
              .animate-fade-in {
                animation: fade-in 1s ease-in both;
              }
              @keyframes fade-in {
                0% { opacity: 0; }
                100% { opacity: 1; }
              }
            `}</style>
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
