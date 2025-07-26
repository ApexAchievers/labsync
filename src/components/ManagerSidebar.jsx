import React from 'react';
import {Users, Package, CalendarDays, TestTube, ChartBar, LogOutIcon, Settings, FlaskConical, User, LayoutDashboard, UserPen, Bell } from 'lucide-react';
import { useState } from 'react'; // ← Add useState here


const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'staff', label: 'Technicians', icon: Users },
  { id: 'tests', label: 'Appointments', icon: CalendarDays },
  { id: 'user', label: 'Patients', icon: User },
];

export default function Sidebar({ activeMenu, setActiveMenu }) {

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  return (
    <div className="w-64 bg-white shadow-sm">
      <div className="p-4">
        <div className="flex items-center space-x-1 mb-8">
          <div className="w-8 h-8 bg-[#4caf50] rounded-lg flex items-center justify-center">
            <FlaskConical className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-800">LabSync</span>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${activeMenu === item.id
                ? 'text-white bg-[#3b82f6]'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
          {menuItems.map(({ id }) => (
            id === 'user' && activeMenu === 'Patients' && (
              <PatientList />
            )
          ))}

          {/* Settings Menu */}
          <div>
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 ${activeMenu === 'settings'
                ? 'text-white bg-[#3b82f6]'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5" />
                <span className="font-medium">Settings</span>
              </div>
            </button>

            {/* Submenu */}
            {isSettingsOpen && (
              <div className="ml-8 mt-2 space-y-1">
                <button
                  onClick={() => setActiveMenu('profile')}
                  className={`w-full flex items-center space-x-2 px-2 py-2 rounded-md text-sm ${activeMenu === 'profile'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                >
                  <UserPen className="w-4 h-4" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setActiveMenu('notifications')}
                  className={`w-full flex items-center space-x-2 px-2 py-2 rounded-md text-sm ${activeMenu === 'notifications'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                >
                  <Bell className="w-4 h-4" />
                  <span>Notifications</span>
                </button>
              </div>
            )}

          </div>

          {/* Logout Menu */}
          <button
            key={'Logout'}
            onClick={() => setActiveMenu('Logout')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${activeMenu === 'Logout'
              ? 'text-white bg-[#3b82f6] shadow-sm'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
              }`}
          >
            <LogOutIcon className="w-5 h-5" />
            <span className="font-medium">logout</span>
          </button>
        </nav>

      </div>
    </div>
  );
}
