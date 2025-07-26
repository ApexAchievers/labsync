import React from "react";


const Appointment = () => {

  // Placeholder for appointment data

  
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Patient Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Age</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Gender</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Appointment Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Appointment Time</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Selected Tests</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-600">
            {/* Placeholder for fetched data */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointment;
