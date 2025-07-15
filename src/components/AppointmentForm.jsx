import React from 'react';

const SimpleAppointmentForm = () => {
  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Book Appointment</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border px-4 py-2 rounded-md"
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border px-4 py-2 rounded-md"
        />
        
        <select
          name="testType"
          className="w-full border px-4 py-2 rounded-md"
        >
          <option value="">Select Test Type</option>
          <option value="Blood Test">Blood Test</option>
          <option value="Urine Test">Urine Test</option>
          <option value="COVID-19 PCR">COVID-19 PCR</option>
        </select>

        <input
          type="date"
          name="date"
          className="w-full border px-4 py-2 rounded-md"
        />

        <input
          type="time"
          name="time"
          className="w-full border px-4 py-2 rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleAppointmentForm;
