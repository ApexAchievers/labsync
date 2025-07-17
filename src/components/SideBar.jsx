// components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="bg-[#1AA6E5] text-white w-full md:w-60 h-full p-6">
      <h2 className="text-xl font-bold mb-6">LabSync</h2>
      <ul className="space-y-4">
        {/* <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li> */}
        <li><Link to="/appointment-page" className="hover:underline">Book Appointment</Link></li>
        <li><Link to="/results" className="hover:underline">Test Results</Link></li>
      </ul>
    </aside>
  );
};

export default SideBar;
