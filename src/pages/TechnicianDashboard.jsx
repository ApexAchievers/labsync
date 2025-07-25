import React from "react";
import Sidebar from "../components/SideBarTech";  
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import { Clock, Loader, CheckCircle, CircleHelp, ListTodo, Pencil, } from "lucide-react";
import Labtech from "../assets/images/labtechnician.jpg"




export default function TechnicianDashboard() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center  px-4" style={{
               backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${Labtech})`
           }} >
    <Sidebar/> 
      <main className="flex-1 p-6  min-h-screen">
      {/* Welcome & Stats */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Technician Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, Alex</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex items-center justify-between bg-white shadow rounded-lg p-4">
          <div>
            <p className="text-sm text-gray-500">Pending Tasks</p>
            <h2 className="text-xl font-bold text-gray-800">8</h2>
          </div>
          <CircleHelp className="text-yellow-400 w-6 h-6" />
        </div>
        <div className="flex items-center justify-between bg-white shadow rounded-lg p-4">
          <div>
            <p className="text-sm text-gray-500">In Progress</p>
            <h2 className="text-xl font-bold text-gray-800">3</h2>
          </div>
          <Loader className="text-blue-500 w-6 h-6" />
        </div>
        <div className="flex items-center justify-between bg-white shadow rounded-lg p-4">
          <div>
            <p className="text-sm text-gray-500">Completed Today</p>
            <h2 className="text-xl font-bold text-gray-800">12</h2>
          </div>
          <CheckCircle className="text-green-500 w-6 h-6" />
        </div>
      </div>

      {/* Task Queue + Status Update */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Task Queue */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <ListTodo className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Test Queue</h2>
          </div>
          <ul className="space-y-4">
            <li className="p-4 rounded-md border-l-4 border-yellow-400 bg-yellow-50">
               <p className="font-semibold text-gray-700">Patient Name</p>
              <p className="font-semibold text-gray-700">Sample #LAB-2024-001</p>
              {/* <p className="text-sm text-gray-500">Blood Test - Complete Panel</p> */}
              <span className="text-xs text-yellow-600">Pending</span>
            </li>
            <li className="p-4 rounded-md border-l-4 border-blue-400 bg-blue-50">
               <p className="font-semibold text-gray-700">Patient Name</p>
              <p className="font-semibold text-gray-700">Sample #LAB-2024-002</p>
              {/* <p className="text-sm text-gray-500">Urine Analysis</p> */}
              <span className="text-xs text-blue-600">In Progress</span>
            </li>
            <Link to={'/tasks/id'}>
            <li className="p-4 rounded-md border-l-4 border-green-400 bg-green-50 pointer-cursor">
               <p className="font-semibold text-gray-700">Patient Name</p>
              <p className="font-semibold text-gray-700">Sample #LAB-2024-003</p>
              {/* <p className="text-sm text-gray-500">COVID-19 PCR Test</p> */}
              <span className="text-xs text-green-600">Done</span>
            </li>
            </Link>
            <li className="p-4 rounded-md border-l-4 border-yellow-400 bg-yellow-50 mt-4">
               <p className="font-semibold text-gray-700">Patient Name</p>
              <p className="font-semibold text-gray-700">Sample #LAB-2024-004</p>
              {/* <p className="text-sm text-gray-500">Lipid Profile</p> */}
              <span className="text-xs text-yellow-600">Pending</span>
            </li>
          </ul>
        </div>

        {/* Update Sample Status */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Pencil className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Update Sample Status</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Select Sample</label>
              <select className="w-full border rounded p-2 text-sm">
                <option>Sample #LAB-2024-001 - Blood Test</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Update Status</label>
              <select className="w-full border rounded p-2 text-sm">
                <option>Pending</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Notes (Optional)</label>
              <textarea
                className="w-full border rounded p-2 text-sm"
                rows="3"
                placeholder="Add any notes about the status update..."
              ></textarea>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm">
              Update Status
            </button>
          </div>
        </div>
      </div>

      {/* Task History */}
      {/* <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">Task History</h2>
          </div>
          <button className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded hover:bg-blue-200">
            View Full History →
          </button>
        </div>
        <p className="text-sm text-gray-500">View your complete task history and performance metrics</p>
      </div> */}
    </main>
    </div>
    </>
  
  );
}




