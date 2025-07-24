import React from "react";
import { useNavigate } from "react-router-dom";

const AppointmentForm = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">
        Fill Out This Form To Book an Appointment
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm md:text-base">
        {/* Full Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Test Type */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Test Type</label>
          <select
            name="testType"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Test Type</option>
            <option>Blood Test</option>
            <option>Urine Test</option>
            <option>COVID-19 PCR</option>
          </select>
        </div>
        {/* Button - full width across both columns */}
        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="button"
            className="w-full md:w-1/2 bg-[#2f4fdb] text-white py-3 rounded-md hover:bg-[#1d1ae5] transition duration-300 font-semibold"
            onClick={() => navigate("/select-date")}
          >
            Select Appointment Date & Time
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
