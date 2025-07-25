import React, { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Correct package
import { apiClient } from "../api/client";
import { toast } from "react-toastify";

export default function Profile() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await apiClient.get("/api/technician/profile/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const { fullName, email, phone } = response.data;
        setFullName(fullName);
        setEmail(email);
        setPhone(phone);

        console.log("Profile data:", response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        toast.error("Failed to load profile data.");
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Your Profile
        </h1>

        <form className="space-y-6 max-w-md mx-auto">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              value={fullName}
              type="text"
              name="name"
              readOnly
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              value={email}
              type="email"
              name="email"
              readOnly
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              value={phone}
              type="tel"
              name="phone"
              readOnly
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Button */}
          <Link to="/edit-profile-tech" className="pt-4 text-center block">
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              <Pencil className="w-4 h-4" />
              Edit Profile
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
