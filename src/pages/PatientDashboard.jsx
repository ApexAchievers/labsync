import React from 'react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Welcome to your Dashboard</h2>

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-medium mb-2">Need to book a test?</h3>
        
        <Link to="/appointment-page">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PatientDashboard;
