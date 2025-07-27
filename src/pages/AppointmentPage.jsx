import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../api/client";
import Select from "react-select"; // <-- Add this import

const testTypeOptions = [
  { value: "Full Blood Count", label: "Full Blood Count" },
  { value: "Blood Sugar", label: "Blood Sugar" },
  {
    value: "Blood Film for Malaria Parasites",
    label: "Blood Film for Malaria Parasites",
  },
  { value: "Sickle Cell", label: "Sickle Cell" },
  {
    value: "HB Electrophoresis (Genotype)",
    label: "HB Electrophoresis (Genotype)",
  },
  {
    value: "Erythrocyte Sedimentation Rate (ESR",
    label: "Erythrocyte Sedimentation Rate (ESR",
  },
  { value: "Blood Grouping", label: "Blood Grouping" },
  { value: "Typhidot", label: "Typhidot" },
  { value: "H. Pylori", label: "H. Pylori" },
  { value: "VDRL for Syphillis", label: "VDRL for Syphillis" },
  { value: "Hepatitis B", label: "Hepatitis B" },
  { value: "Hepatitis C", label: "Hepatitis C" },
  { value: "Urine R/E", label: "Urine R/E" },
  { value: "Stool R/E", label: "Stool R/E" },
  { value: "Covid 19", label: "Covid 19" },
  { value: "Liver Function Test (LFT)", label: "Liver Function Test (LFT)" },
  { value: "Kidney Function Test (KFT)", label: "Kidney Function Test (KFT)" },
  { value: "BUE & Cr", label: "BUE & Cr (LFT)" },
  {
    value: "PCR for Tuberculosis (Gene Xpert",
    label: "PCR for Tuberculosis (Gene Xpert",
  },
  { value: "Hormonal/Fertility Tests", label: "Hormonal/Fertility Tests" },
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
    <div className="flex justify-center items-start min-h-[80vh] bg-gray-50 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-100 my-12 p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-900">
          Book a Lab Appointment
        </h2>
        <form
          onSubmit={postAppointment}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
        >
          {/* Full Name */}
          <div className="col-span-1">
            <label className="block mb-2 font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Email */}
          <div className="col-span-1">
            <label className="block mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Gender */}
          <div className="col-span-1">
            <label className="block mb-2 font-semibold text-gray-700">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Gender</option>
              <option>male</option>
              <option>female</option>
            </select>
          </div>

          {/* Phone Number */}
          <div className="col-span-1">
            <label className="block mb-2 font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Age */}
          <div className="col-span-1">
            <label className="block mb-2 font-semibold text-gray-700">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Date */}
          <div className="col-span-1">
            <label className="block mb-2 font-semibold text-gray-700">
              Date
            </label>
            <input
              type="date"
              name="scheduledDate"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Time */}
          <div className="col-span-1">
            <label className="block mb-2 font-semibold text-gray-700">
              Time
            </label>
            <input
              type="time"
              name="scheduledTime"
              value={scheduleTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Test Type */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700">
              Test Type
            </label>
            <Select
              isMulti
              name="testType"
              options={testTypeOptions}
              value={testType}
              onChange={setTestType}
              className="w-full"
              classNamePrefix="select"
              placeholder="Select test types"
            />
          </div>
          {/* Priority */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700">
              Priority
            </label>
            <select
              placeholder="select priority"
              name="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">priority</option>
              <option>low</option>
              <option>normal</option>
              <option>high</option>
            </select>
          </div>
          {/* Button */}
          <div className="md:col-span-2 flex justify-center mt-8">
            <button
              type="submit"
              className="w-full md:w-1/2 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-900 transition duration-300 font-semibold"
            >
              Submit Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
