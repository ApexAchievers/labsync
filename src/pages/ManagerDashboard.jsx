// Main Dashboard Page with Component Imports
import React, { useState } from 'react';
import Sidebar from '../components/ManagerSidebar';
import Header from '../components/Header';
import DashboardContent from '../components/DashboardContent';
import StaffManagement from '../components/StaffManagement';
import TestManagement from '../components/TestManagement';
import SettingsPanel from '../components/SettingsPanel';

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1">
        <Header activeMenu={activeMenu} />
        <div className="p-6">
          {activeMenu === 'dashboard' && <DashboardContent />}
          {activeMenu === 'staff' && <StaffManagement />}
          {activeMenu === 'tests' && <TestManagement />}
          {activeMenu === 'profile' && <SettingsPanel section="profile" />}
          {activeMenu === 'notifications' && <SettingsPanel section="notifications" />}
        </div>
      </div>
    </div>
  );
}
