import { Pencil } from "lucide-react";
import { Link, useSearchParams  } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiClient } from "../api/client";  
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function ViewAppointment() {

const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const [appointments, setAppointments] = useState({});

  const getAppointments = () => {
    apiClient.get(`/api/labtest/appointments/${id}`)
      .then((response) => {
        console.log(response.data);
        setAppointments((response.data));
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
      getAppointments();
    }, []);

  // const deleteAppointment = () => {
  //   apiClient.delete(`/api/labtest/appointment${id}`)
  //   .then((response) => {
  //     console.log(response);
  //     navigate(-1);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }
  // onClick = {deleteAppointment}

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
              type=""
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
              type=""
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

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <Link
          to={"/patient-dashboard/edit-appointment"}
            type="submit"
            className="w-full md:w-1/3 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            <span>Edit Appointment</span>
            <Pencil className="w-4 h-4" />
          </Link>
        </div>
      </form>
    </div>
  );
}
