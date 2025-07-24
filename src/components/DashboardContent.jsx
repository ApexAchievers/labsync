import React from 'react';
import { TrendingUp, Clock, Percent, AlertTriangle } from 'lucide-react';
import StaffManagement from './StaffManagement';



export default function DashboardContent() {
  return (
    <>
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1>
      <p className="text-gray-600 mb-4">
        Welcome to your dashboard! Here you can find a quick overview of your lab's performance and key metrics.
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
    </div>
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Staff Management</h2>
      <p className="text-gray-600 mb-4">
        Manage your lab staff efficiently. Add, edit, or remove staff members as needed.
      </p>

    </div>
    </>
  );
}
