import React from "react";
import { useNavigate } from "react-router-dom";

const AppointmentForm = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        Fill Out This Form To Book an Appointment
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Full Name</label>
          <input type="text" name="name" className="border px-4 py-2 rounded-md" />

          <label className="font-medium">Gender</label>
          <select name="gender" className="border px-4 py-2 rounded-md">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <label className="font-medium">Age</label>
          <input type="number" name="age" className="border px-4 py-2 rounded-md" />

          <label className="font-medium">Test Type</label>
          <select name="testType" className="border px-4 py-2 rounded-md">
            <option value="">Select Test Type</option>
            <option>Blood Test</option>
            <option>Urine Test</option>
            <option>COVID-19 PCR</option>
          </select>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Email</label>
          <input type="email" name="email" className="border px-4 py-2 rounded-md" />

          <label className="font-medium">Phone Number</label>
          <input type="tel" name="phone" className="border px-4 py-2 rounded-md" />
        </div>

        {/* Navigate Button */}
        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="button"
            className="w-[50%] bg-[#2f4fdb] text-white py-3 rounded-md hover:bg-[#1d1ae5] transition duration-300"
            onClick={() => navigate("/select-date")}
          >
            Select Appointment Date & Time
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
