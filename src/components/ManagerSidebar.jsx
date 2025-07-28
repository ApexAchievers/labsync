import React, { useState } from 'react';
import { Users, CalendarDays, LogOutIcon, Settings, FlaskConical, User, LayoutDashboard, UserPen, Bell } from 'lucide-react';


const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'staff', label: 'Technicians', icon: Users },
  { id: 'tests', label: 'Appointments', icon: CalendarDays },
  { id: 'user', label: 'Patients', icon: User },
];


export default function Sidebar({ activeMenu, setActiveMenu }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Responsive sidebar: show overlay and slide-in on mobile
  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 bg-blue-500 text-white p-2 rounded-lg shadow-lg focus:outline-none"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-sm transform transition-transform duration-300 md:static md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:block`}
        style={{ minHeight: '100vh' }}
      >
        <div className="p-4">
          <div className="flex items-center space-x-1 mb-8">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-800">LabSync</span>
          </div>
          {/* Close button for mobile */}
          <button
            className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="space-y-2 mt-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveMenu(item.id);
                  setSidebarOpen(false); // close on mobile
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${activeMenu === item.id
                  ? 'text-white bg-[#3b82f6]'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
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
                    onClick={() => {
                      setActiveMenu('profile');
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center space-x-2 px-2 py-2 rounded-md text-sm ${activeMenu === 'profile'
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                      }`}
                  >
                    <UserPen className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveMenu('notifications');
                      setSidebarOpen(false);
                    }}
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
              onClick={() => {
                localStorage.removeItem('token');
                setActiveMenu('Logout');
                setSidebarOpen(false);
                // Optionally, redirect to login or home page
                window.location.href = '/';
              }}
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
    </>
  );
}
