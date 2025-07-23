// components/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  House,
  CalendarDays,
  FileUser,
  Clock,
  UserPen,
  FlaskConical,
  Settings,
  Bell,
} from "lucide-react";

const SideBar = () => {
  const [settingsOpen, setSettingsOpen] = useState(false); // 🔄 Dropdown state

  const toggleSettings = () => {
    setSettingsOpen((prev) => !prev);
  };

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-4 flex flex-col">
      {/* Logo */}
      <div className="flex flex-row space-x-4 mb-6">
        <FlaskConical className="h-10 w-6 text-[#2f4fdb]" />
        <h2>
          <span className="text-2xl font-bold">LabSync</span> <br />
          <span className="">Patient Dashboard</span>
        </h2>
      </div>

      {/* Sidebar Items */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
          <House className="w-5 h-5" />
          <span>Dashboard</span>
        </div>

        <Link to={'/view-appointment'} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
          <CalendarDays className="w-5 h-5" />
          <span>Appointment</span>
        </Link>

        {/* <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
          <FileUser className="w-5 h-5" />
          <span>Test Result</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
          <Clock className="w-5 h-5" />
          <span>Queue Status</span>
        </div> */}

        {/* Settings with Dropdown */}
        <div className="space-y-2">
          <div
            onClick={toggleSettings}
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </div>

          {/* Dropdown items */}
          {settingsOpen && (
            <div className="ml-6 space-y-2 mt-1">
              <div className="flex items-center gap-2 cursor-pointer">
                <Bell className="w-5 h-5" />
                <span className="text-sm">Notifications</span>
              </div>
              <Link
                to="/profile"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <UserPen className="w-5 h-5" />
                <span className="text-sm">Profile</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
