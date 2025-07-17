import React, { useState } from 'react';
import { BarChart3, Users, Package, FlaskConical, TestTube, TestTube2, Settings, Edit3, UserCheck, Clock, AlertTriangle, TrendingUp, Percent, Calendar, LogOut, Clock4, ChartLine, ChartBar, SquarePen, Trash2, UserPlus } from 'lucide-react';
import TrackingWidget from '../components/QueueTrackerWidget';

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ChartLine },
    { id: 'staff', label: 'Staff Management', icon: Users },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'tests', label: 'Tests', icon: TestTube },
    { id: 'analytics', label: 'Analytics', icon: ChartBar },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-4">
          <div className="flex items-center space-x-1 mb-8">
            <div className="w-8 h-8 bg-[#4caf50] rounded-lg flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-800">LabSync</span>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${isActive
                    ? 'text-white bg-[#3b82f6] shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">
              {menuItems.find(item => item.id === activeMenu)?.label || 'Dashboard'}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">DJ</span>
                </div>
                <span className="text-gray-700">Dr. Sarah Johnson</span>
              </div >
              <LogOut className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 mr-1" />
              <span className="text-gray-500 cursor-pointer hover:text-gray-700">Logout</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {activeMenu === 'dashboard' && (
            <>
              {/* Top Stats */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Total Tests Today</p>
                      <p className="text-3xl font-bold text-gray-800">127</p>
                    </div>
                    <TestTube2 className="w-8 h-8 text-blue-500" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Active Staff</p>
                      <p className="text-3xl font-bold text-gray-800">12</p>
                    </div>
                    <Users className="w-9 rounded-md h-8 text-[#10b981]" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Avg Turnaround</p>
                      <p className="text-3xl font-bold text-gray-800">2.4h</p>
                    </div>
                    <Clock4 className="w-8 h-8 text-[#6366f1]" />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">Low Stock Items</p>
                      <p className="text-3xl font-bold text-gray-800">3</p>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-[#ef4444]" />
                  </div>
                </div>
              </div>

              {/* Staff Workload and Inventory Status */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Staff Workload */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Staff Workload</h3>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Today</span>
                    </div>
                  </div>
                  <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Staff workload chart would be displayed here</p>
                  </div>
                </div>
                <div>
                  <TrackingWidget />
                </div>
                {/* Inventory Status */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Inventory Status</h3>
                    <button className="text-blue-500 text-sm hover:text-blue-600">View All</button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-800">Blood Collection Tubes</p>
                          <p className="text-sm text-gray-500">5 units remaining</p>
                        </div>
                      </div>
                      <span className="text-red-500 text-sm font-medium">Low</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-800">Reagent Kit A</p>
                          <p className="text-sm text-gray-500">15 units remaining</p>
                        </div>
                      </div>
                      <span className="text-yellow-500 text-sm font-medium">Medium</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-800">Pipette Tips</p>
                          <p className="text-sm text-gray-500">150 units remaining</p>
                        </div>
                      </div>
                      <span className="text-green-500 text-sm font-medium">Good</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-800">Test Strips</p>
                          <p className="text-sm text-gray-500">89 units remaining</p>
                        </div>
                      </div>
                      <span className="text-green-500 text-sm font-medium">Good</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Overview */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Analytics Overview</h3>
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                    <h4 className="text-gray-600 font-medium mb-2">Average Turnaround Time</h4>
                    <p className="text-3xl font-bold text-blue-500 mb-1">2.4 hours</p>
                    <p className="text-sm text-gray-500">↓ 15% from last week</p>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-green-500" />
                      </div>
                    </div>
                    <h4 className="text-gray-600 font-medium mb-2">Daily Test Volume</h4>
                    <p className="text-3xl font-bold text-green-500 mb-1">127</p>
                    <p className="text-sm text-gray-500">↑ 8% from yesterday</p>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Percent className="w-6 h-6 text-purple-500" />
                      </div>
                    </div>
                    <h4 className="text-gray-600 font-medium mb-2">Success Rate</h4>
                    <p className="text-3xl font-bold text-purple-500 mb-1">98.5%</p>
                    <p className="text-sm text-gray-500">↑ 2% from last month</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Staff Management */}
          {activeMenu === 'staff' && (
            <>
              {/* Staff Management  content*/}
              {activeMenu === 'staff' && (
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="space-y-6">

                    {/* Create User Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-md font-semibold text-gray-700 mb-4">Create New User</h4>
                      <div className="flex space-x-4">
                        <input
                          name="text"
                          placeholder="Full Name"
                          className="w-1/4 px-1 mb-6 border rounded-sm"
                        />
                        <input
                          name="email"
                          placeholder="Email"
                          className="w-1/4 px-1 mb-6 border rounded-sm"
                        />
                        <input
                          type="Password"
                          placeholder="create password"
                          className="w-1/4 px-1 mb-6 border rounded-sm"
                        />
                        <select className="w-1/4 px-1 mb-6 border rounded-sm">
                          <option value="staff">Technician/Staff</option>
                          <option value="admin">User</option>
                        </select>
                        <button className="bg-blue-500 flex text-white cursor-pointer hover:bg-blue-600 w-[100px] px-0.5 mb-6 border rounded-sm">
                          Add User <span className=''><UserPlus className='w-3 h-7 justify-center'/></span>
                        </button>
                      </div>
                    </div>

                    {/* List of Users Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Users</h4>
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className="p-2">Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Role</th>
                            <th className="p-2">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Dr. Sarah Johnson</td>
                            <td className="p-2">sarah.johnson@example.com</td>
                            <td className="p-2">Admin</td>
                            <td className="p-2 mt-1 flex">
                             <SquarePen className="w-4 h-4 mr-4 text-green-300" />
                              <Trash2 className='w-4 h-4 mr-4 text-red-500' />
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">John Doe</td>
                            <td className="p-2">john.doe@example.com</td>
                            <td className="p-2">Staff</td>
                            <td className="p-2 mt-1 flex">
                             <SquarePen className="w-4 h-4 mr-4 text-green-300" />
                              <Trash2 className="w-4 h-4 mr-4 text-red-500" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Assign Task Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Assign Task</h4>
                      <div className="flex space-x-4">
                        <select className="w-1/3 px-1 mb-6 border rounded-sm">
                          <option className='text-gray-400' disabled value="">Select Technician</option>
                          <option value="sarah.johnson">Dr. Sarah Johnson</option>
                          <option value="john.doe">John Doe</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Task Description"
                          className="w-1/3 px-1 mb-6 border rounded-sm"
                        />
                        <input
                          type="date"
                          className="w-1/3 px-1 mb-6 border rounded-sm"
                        />
                        <button className="bg-green-500 text-white hover:bg-green-600  w-[150px] px-0.5 mb-6 border rounded-sm">
                          Assign Task
                        </button>
                      </div>
                    </div>

                    {/* Staff Schedules Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Staff Schedules</h4>
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className="p-2">Name</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Shift</th>
                            <th className="p-2">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Dr. Sarah Johnson</td>
                            <td className="p-2">2025-07-17</td>
                            <td className="p-2">9:00 AM - 5:00 PM</td>
                            <td className="p-2 mt-1 flex">
                              <SquarePen className="w-4 h-4 mr-4 text-green-300" />
                              <Trash2 className='w-4 h-4 mr-4 text-red-500' />
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">John Doe</td>
                            <td className="p-2">2025-07-17</td>
                            <td className="p-2">1:00 PM - 9:00 PM</td>
                            <td className="p-2 mt-1 flex">
                              <SquarePen className="w-4 h-4 mr-4 text-green-300" />
                              <Trash2 className='w-4 h-4 mr-4 text-red-500' />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Assignments Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Assignments</h4>
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className="p-2">User</th>
                            <th className="p-2">Task</th>
                            <th className="p-2">Due Date</th>
                            <th className="p-2">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">Dr. Sarah Johnson</td>
                            <td className="p-2">Review Test Results</td>
                            <td className="p-2">2025-07-18</td>
                            <td className="p-2 text-yellow-500">In Progress</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">John Doe</td>
                            <td className="p-2">Inventory Check</td>
                            <td className="p-2">2025-07-19</td>
                            <td className="p-2 text-green-500">Completed</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Team Management Tools Section */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-md font-semibold text-gray-700 mb-2">Team Management Tools</h4>
                      <div className="space-y-2">
                        <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 w-full">Generate Team Report</button>
                        <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 w-full">Schedule Team Meeting</button>
                        <button className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 w-full">Assign Team Project</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Inventory */}
          {activeMenu === 'inventory' && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Inventory Management</h3>
              <p className="text-gray-600">Inventory management content would be displayed here. This could include stock levels, reorder points, supplier information, and inventory tracking.</p>
            </div>
          )}

          {/* Tests */}
          {activeMenu === 'tests' && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Test Management</h3>
              <p className="text-gray-600">Test management content would be displayed here. This could include test scheduling, results tracking, quality control, and test protocol management.</p>
            </div>
          )}

          {/* Analytics */}
          {activeMenu === 'analytics' && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Analytics & Reports</h3>
              <p className="text-gray-600">Analytics content would be displayed here. This could include detailed reports, performance metrics, trends analysis, and data visualization.</p>
            </div>
          )}

          {/* Settings */}
          {activeMenu === 'settings' && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Settings</h3>
              <p className="text-gray-600">Settings content would be displayed here. This could include user preferences, system configuration, security settings, and notification preferences.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

