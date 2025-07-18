import React from 'react';
import { ChartLine, Users, Package, TestTube, ChartBar, Settings, FlaskConical } from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: ChartLine },
  { id: 'staff', label: 'Staff Management', icon: Users },
  { id: 'tests', label: 'Tests', icon: TestTube },
  { id: 'inventory', label: 'Inventory', icon: Package },
  // { id: 'analytics', label: 'Analytics', icon: ChartBar },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ activeMenu, setActiveMenu }) {
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
          {menuItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveMenu(id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${activeMenu === id
                  ? 'text-white bg-[#3b82f6] shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
