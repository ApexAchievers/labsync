import React from 'react';
import SideBar from '../components/SideBar';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { Bell, Check } from 'lucide-react';

const PatientDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />

      <main className="flex-1 p-6 bg-gray-50">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Welcome to your Dashboard</h2>
            <p className="text-gray-600">Overview of your appointments and status.</p>
          </div>

          {/* Grid Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Upcoming Appointment */}
            <div className="bg-white shadow-md rounded-lg p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-blue-700">
                  <FaCalendarAlt className="text-lg" />
                  <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  You currently have no upcoming tests scheduled.
                </p>
              </div>
              <Link to="/appointment-page">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Need a test? Book Now!
                </button>
              </Link>
            </div>

            {/* Queue Tracker
            <div className="bg-white shadow-md rounded-lg p-5">
              <QueueTrackerWidget />
            </div> */}

            {/* Notifications */}
            <div className="bg-white shadow-md rounded-lg p-5">
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <Bell className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Notifications</h3>
              </div>
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Check className="w-5 h-5" />
                <h4 className="font-medium">Results Will Be Ready Soon</h4>
              </div>
              <p className="text-sm text-gray-600">
                You will be notified once your results are ready via SMS or Email.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
