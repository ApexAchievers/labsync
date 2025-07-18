import React from 'react';
import { TrendingUp, Clock, Percent, AlertTriangle } from 'lucide-react';

const stats = [
  { label: 'Completed Tests', value: 1240, icon: TrendingUp },
  { label: 'Pending Samples', value: 87, icon: Clock },
  { label: 'Success Rate', value: '97%', icon: Percent },
  { label: 'Issues Reported', value: 5, icon: AlertTriangle },
];

export default function DashboardContent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="bg-white rounded-xl shadow p-4 flex items-center space-x-4"
        >
          <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{label}</p>
            <h4 className="text-lg font-semibold text-gray-800">{value}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
