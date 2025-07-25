import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../api/client";
import Select from "react-select"; // <-- Add this import

const testTypeOptions = [
  { value: "Blood Test", label: "Blood Test" },
  { value: "Urine Test", label: "Urine Test" },
  { value: "COVID-19 PCR", label: "COVID-19 PCR" },
];

const AppointmentForm = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [testType, setTestType] = useState([]); // Will store array of selected options
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduleTime, setScheduledTime] = useState("");
  const [priority, setPriority] = useState("");

  const postAppointment = async (e) => {
    e.preventDefault();
    const patientDetails = { fullName, age, gender, contact, email };
    const data = {
      patientDetails,
      testType: testType.map((option) => option.value), // send array of values
      scheduledDate,
      scheduleTime,
      priority,
    };
    try {
      const response = await apiClient.post("/api/labtest/book", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      // handle error
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">
        Fill Out This Form To Book an Appointment
      </h2>

      <form
        onSubmit={postAppointment}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm md:text-base"
      >
        {/* Full Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
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
          <label className="block mb-1 font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
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
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="scheduledDate"
            value={scheduledDate}
            onChange={(e) => setScheduledDate(e.target.value)}
            placeholder="Enter your age"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Time</label>
          <input
            type="time"
            name="scheduledTime"
            value={scheduleTime}
            onChange={(e) => setScheduledTime(e.target.value)}
            placeholder="Enter your age"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Test Type */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Test Type</label>
          <Select
            isMulti
            name="testType"
            options={testTypeOptions}
            value={testType}
            onChange={setTestType}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select test types"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Priority</label>
          <select
            placeholder="select priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">priority</option>
            <option>low</option>
            <option>normal</option>
            <option>high</option>
          </select>
        </div>

        {/* Button - full width across both columns */}
        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="w-full md:w-1/2 bg-[#2f4fdb] text-white py-3 rounded-md hover:bg-[#1d1ae5] transition duration-300 font-semibold"
          >
            Select Appointment Date & Time
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
