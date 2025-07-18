import React from 'react';
import { LineChart, BarChart3 } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Analytics & Reports</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Monthly Test Volume</h3>
          <div className="flex justify-center items-center h-40 text-gray-400">
            <LineChart className="w-10 h-10" />
            <span className="ml-2">Line chart placeholder</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-2">Daily Revenue</h3>
          <div className="flex justify-center items-center h-40 text-gray-400">
            <BarChart3 className="w-10 h-10" />
            <span className="ml-2">Bar chart placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
}
