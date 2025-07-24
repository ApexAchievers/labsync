import { Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";

export default function EditAppointment() {
  return (
    <div className="w-full max-w-5xl mx-auto py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Appointment Details
      </h1>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <input
              type="text"
              name="gender"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <input
              type="number"
              name="age"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Test Type
            </label>
            <input
              type="text"
              name="test"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Appointment Date
            </label>
            <input
              type="date"
              name="date"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Appointment Time
            </label>
            <input
              type=""
              name="time"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="md:col-span-2 flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <button
            type="submit"
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
          >
            <span>Edit Appointment</span>
            <Pencil className="w-4 h-4" />
          </button>

          <button
            type="button"
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-red-100 text-red-600 py-2 px-6 rounded-md hover:bg-red-200 transition"
          >
            <span>Delete Appointment</span>
            <Trash className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
