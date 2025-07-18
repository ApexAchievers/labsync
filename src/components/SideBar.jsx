// components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  House,
  CalendarDays,
  FileUser,
  Clock,
  UserPen,
  FlaskConical,
} from "lucide-react";

const SideBar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-4 flex flex-col">
      <div className="flex flex-row space-x-4 mb-6">
        <FlaskConical className="h-10 w-6 text-[#2f4fdb]" />
        <h2 >
          <span className="text-2xl font-bold">LabSync</span> <br />
          <span className=" ">Patient Dashboard</span>
        </h2>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
          <House className="w-5 h-5" />
          <span>Dashboard</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
          <CalendarDays className="w-5 h-5" />
          <span>Appointment</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
          <FileUser className="w-5 h-5" />
          <span>Test Result</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
          <Clock className="w-5 h-5" />
          <span>Queue Status</span>
        </div>
        <Link  to={'/profile'} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer mt-auto">
          <UserPen className="w-5 h-5" />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
