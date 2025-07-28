// Main Dashboard Page with Component Imports
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/ManagerSidebar';
import Header from '../components/Header';
import DashboardContent from '../components/DashboardContent';
import StaffManagement from '../components/StaffManagement';
import TestManagement from '../components/TestManagement';
import SettingsPanel from '../components/SettingsPanel';
import PatientList from '../components/PatientList';
import BookedTests from '../components/BookedTests';


export default function ManagerDashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsAuthorized(false);
      return;
    }
    fetch('https://laboratory-sync-api.onrender.com/api/auth/profile', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        if (data && (data.role === 'admin' || data.role === 'admin')) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      })
      .catch(() => setIsAuthorized(false));
  }, []);

  if (isAuthorized === null) {
    return <div className="flex items-center justify-center min-h-screen text-lg text-gray-500">Checking authorization...</div>;
  }
  if (!isAuthorized) {
    window.location.href = '/login';
    return<div className="flex items-center justify-center min-h-screen text-lg text-gray-500">Unauthorized Access, Log in asan Admin!...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1 w-full">
        <Header activeMenu={activeMenu} />
        <div className="p-2 sm:p-4 md:p-6 w-full max-w-full">
          {activeMenu === 'dashboard' && <DashboardContent />}
          {activeMenu === 'staff' && <StaffManagement />}
          {activeMenu === 'tests' && <BookedTests />}
          {activeMenu === 'user' && <PatientList />}
          {activeMenu === 'profile' && <SettingsPanel section="profile" />}
          {activeMenu === 'notifications' && <SettingsPanel section="notifications" />}
        </div>
      </div>
    </div>
  );
}

