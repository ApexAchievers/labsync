// Main Dashboard Page with Component Imports
import React, { useState } from 'react';
import Sidebar from '../components/ManagerSidebar';
import Header from '../components/Header';
import DashboardContent from '../components/DashboardContent';
import StaffManagement from '../components/StaffManagement';
import TestManagement from '../components/TestManagement';
import SettingsPanel from '../components/SettingsPanel';
import PatientList from '../components/PatientList';

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1 w-full">
        <Header activeMenu={activeMenu} />
        <div className="p-2 sm:p-4 md:p-6 w-full max-w-full">
          {activeMenu === 'dashboard' && <DashboardContent />}
          {activeMenu === 'staff' && <StaffManagement />}
          {activeMenu === 'tests' && <TestManagement />}
          {activeMenu === 'user' && <PatientList />}
          {activeMenu === 'profile' && <SettingsPanel section="profile" />}
          {activeMenu === 'notifications' && <SettingsPanel section="notifications" />}
        </div>
      </div>
    </div>
  );
}
