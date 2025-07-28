import { Pencil, Trash } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { apiClient } from "../api/client";
import { toast } from "react-toastify";
import Select from "react-select";

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
  { value: "Urine R/E", label: "Urine R/E" },
  { value: "Stool R/E", label: "Stool R/E" },
];

export default function EditAppointment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    testType: [],
    scheduledDate: "",
    scheduledTime: "",
    priority: "low",
  });

  useEffect(() => {
    if (id) {
      apiClient
        .get(`/api/labtest/appointment/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          const appt = response.data;
          const scheduledDateTime = DateTime.fromISO(appt.scheduledDate);

          setFormData({
            fullName: appt.patientDetails.fullName,
            age: appt.patientDetails.age,
            gender: appt.patientDetails.gender,
            contact: appt.patientDetails.contact,
            email: appt.patientDetails.email,
            testType: appt.testType.map((t) => ({ value: t, label: t })),
            scheduledDate: scheduledDateTime.toISODate(), // Format: YYYY-MM-DD
            scheduledTime: scheduledDateTime.toFormat("HH:mm"), // Format: HH:mm
            priority: appt.priority,
          });
        })
        .catch((error) => {
          console.error("Failed to fetch appointment details:", error);
          toast.error("Failed to load appointment details.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTestTypeChange = (selectedOptions) => {
    setFormData((prev) => ({ ...prev, testType: selectedOptions || [] }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const scheduledDate = DateTime.fromISO(
      `${formData.scheduledDate}T${formData.scheduledTime}`
    ).toISO();

    const payload = {
      patientDetails: {
        fullName: formData.fullName,
        age: formData.age,
        gender: formData.gender,
        contact: formData.contact,
        email: formData.email,
      },
      testType: formData.testType.map((option) => option.value),
      scheduledDate: scheduledDate,
      priority: formData.priority,
    };

    try {
      await apiClient.put(`/api/labtest/update-appointments/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Appointment updated successfully!");
      navigate("/patient-dashboard/appointments"); // Go back to the appointments list
    } catch (error) {
      toast.error("Failed to update appointment.");
      console.error("Update error:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      try {
        await apiClient.delete(`/api/labtest/appointment/${id}/cancel`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        toast.success("Appointment deleted successfully.");
        navigate("/patient-dashboard/appointments");
      } catch (error) {
        toast.error("Failed to delete appointment.");
        console.error("Delete error:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-5xl mx-auto py-6 text-center">
        Loading appointment details...
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Edit Appointment
      </h1>

      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
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
              value={formData.gender}
              onChange={handleChange}
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
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Test Type(s)
            </label>
            <Select
              isMulti
              name="testType"
              options={testTypeOptions}
              value={formData.testType}
              onChange={handleTestTypeChange}
              className="w-full"
              classNamePrefix="select"
              placeholder="Select test types"
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
              name="scheduledDate"
              value={formData.scheduledDate}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Appointment Time
            </label>
            <input
              type="time"
              name="scheduledTime"
              value={formData.scheduledTime}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
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
            <span>Save Changes</span>
            <Pencil className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleDelete}
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
