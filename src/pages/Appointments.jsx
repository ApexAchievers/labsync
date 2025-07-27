import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiClient } from "../api/client";
import { Eye, Pencil, Trash2 } from "lucide-react";

const Appointment = () => {
  
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const response = await apiClient.get("api/labtest/appointments", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Full Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Gender
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Phone Number
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Age
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Time
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Test Type
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-600">
            {appointments.map((appt) => (
              <tr key={appt.id}>
                <td className="px-6 py-4">{appt.fullName}</td>
                <td className="px-6 py-4">{appt.email}</td>
                <td className="px-6 py-4">{appt.gender}</td>
                <td className="px-6 py-4">{appt.phoneNumber}</td>
                <td className="px-6 py-4">{appt.age}</td>
                <td className="px-6 py-4">{appt.date}</td>
                <td className="px-6 py-4">{appt.time}</td>
                <td className="px-6 py-4">{appt.tests?.join(", ")}</td>
                <td className="px-6 py-4 flex space-x-3">
                  <Link to={"/patient-dashboard/view-appointment"}>
                    <Eye className="w-5 h-5 text-blue-500 hover:text-blue-700" />
                  </Link>
                  <Link to={"/patient-dashboard/edit-appointment"}>
                    <Pencil className="w-5 h-5 text-green-500 hover:text-green-700" />
                  </Link>
                  <Link to={`/appointment/delete/${appt.id}`}>
                    <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
                  </Link>
                </td>
              </tr>
            ))}
            {appointments.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointment;
