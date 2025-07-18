// Main Dashboard Page with Component Imports
import React, { useState } from 'react';
import Sidebar from '../components/ManagerSidebar';
import Header from '../components/Header';
import DashboardContent from '../components/DashboardContent';
import StaffManagement from '../components/StaffManagement';
import InventoryManagement from '../components/InventoryManagement';
import TestManagement from '../components/TestManagement';
// import AnalyticsReports from '../components/AnalyticsReports';
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
          {activeMenu === 'inventory' && <InventoryManagement />}
          {/* {activeMenu === 'analytics' && <AnalyticsReports />} */}
          {activeMenu === 'settings' && <SettingsPanel />}
        </div>
      </div>
    </div>
  );
}
