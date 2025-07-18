import React from 'react';
import { Settings } from 'lucide-react';

export default function SettingsModule() {
  return (
    <div className="space-y-6 max-w-xl">
      <div className="flex items-center gap-2">
        <Settings className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
      </div>
      <form className="space-y-4 bg-white p-6 rounded-xl shadow">
        <div>
          <label className="block text-sm font-medium text-gray-700">Lab Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter lab name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Email</label>
          <input
            type="email"
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter contact email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Notification Preferences</label>
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
          Save Settings
        </button>
      </form>
    </div>
  );
}
