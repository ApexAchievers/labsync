import React from "react";

const AppointmentForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">Fill Out This Form To Book an Appointment</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="border px-4 py-2 rounded-md"
          />

          <label className="font-medium">Gender</label>
          <select name="gender" className="border px-4 py-2 rounded-md">
            <option value="Your Gender" disabled>Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label className="font-medium">Age</label>
          <input
            type="number"
            name="age"
            className="border px-4 py-2 rounded-md"
          />

          <label className="font-medium">Test Type</label>
          <select name="testType" className="border px-4 py-2 rounded-md">
            <option value="" disabled>Select Test Type</option>
            <option value="Blood Test">Blood Test</option>
            <option value="Urine Test">Urine Test</option>
            <option value="COVID-19 PCR">COVID-19 PCR</option>
          </select>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Appointment Date</label>
          <input
            type="date"
            name="date"
            className="border px-4 py-2 rounded-md"
          />

          <label className="font-medium">Appointment Time</label>
          <input
            type="time"
            name="time"
            className="border px-4 py-2 rounded-md"
          />

          <label className="font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="border px-4 py-2 rounded-md"
          />

          <label className="font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+1234567890"
            className="border px-4 py-2 rounded-md"
          />
        </div>

        {/* Submit Button: Full width on both columns */}
        <div className="md:col-span-2 flex items center justify-center">
          <button
            type="submit"
            className="w-[50%] bg-[#2f4fdb] text-white py-3 rounded-md hover:bg-[#1d1ae5] transition duration-300 "
          >
            Submit Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
