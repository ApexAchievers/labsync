import React from "react";

const PatientDashboard = () => {
  // Sample dummy data – Replace with real data from backend
  const userName = "Comfort";
  const upcomingAppointment = {
    date: "July 17, 2025",
    time: "10:00 AM",
    type: "Blood Test",
  };

  const queue = {
    position: 3,
    estimatedWait: "15 minutes",
  };

  const results = [
    { name: "Blood Test", status: "Ready", file: "/results/blood.pdf" },
    { name: "Urine Test", status: "Pending", file: null },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Hi, {userName} 👋</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Logout</button>
      </div>

      {/* Appointment Card */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Your Next Appointment</h2>
        <p>{upcomingAppointment.date} at {upcomingAppointment.time}</p>
        <p className="text-sm text-gray-500">{upcomingAppointment.type}</p>
      </div>

      {/* Queue Status */}
      <div className="bg-green-100 p-4 rounded-lg shadow mb-4">
        <h2 className="text-lg font-semibold text-green-800 mb-1">Queue Status</h2>
        <p>You are <span className="font-bold">#{queue.position}</span> in line.</p>
        <p>Estimated wait: {queue.estimatedWait}</p>
      </div>

      {/* Test Results */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Test Results</h2>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>{result.name}</span>
              {result.status === "Ready" ? (
                <a
                  href={result.file}
                  className="text-blue-500 underline"
                  download
                >
                  Download
                </a>
              ) : (
                <span className="text-yellow-500">Pending</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Book New Appointment */}
      <div className="flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Book New Appointment
        </button>
      </div>
    </div>
  );
};

export default PatientDashboard;
