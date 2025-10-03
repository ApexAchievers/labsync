import React, { useState, useEffect } from "react";
import { Pencil } from "lucide-react";

import axios from "axios";
import { toast } from "react-toastify";

export default function Profile() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);


  


  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://laboratory-sync-api.onrender.com/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { fullName, email, phone } = response.data;
        setFullName(fullName);
        setEmail(email);
        setPhone(phone);
      } catch (error) {
        toast.error("Failed to load profile data.");
      }
    };
    fetchProfileData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "https://laboratory-sync-api.onrender.com/api/auth/profile",
        { fullName, email, phone },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Profile updated successfully!");
      setEdit(false);
    } catch (error) {
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Your Profile</h1>
        <form className="space-y-6 max-w-md mx-auto" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              value={fullName}
              type="text"
              name="name"
              onChange={e => setFullName(e.target.value)}
              readOnly={!editing}
              className={`w-full border border-gray-300 rounded-md px-4 py-2 ${editing ? 'bg-white' : 'bg-gray-100'} text-gray-700`}
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              value={email}
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
              readOnly={!editing}
              className={`w-full border border-gray-300 rounded-md px-4 py-2 ${editing ? 'bg-white' : 'bg-gray-100'} text-gray-700`}
            />
          </div>
          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              value={phone}
              type="tel"
              name="phone"
              onChange={e => setPhone(e.target.value)}
              readOnly={!editing}
              className={`w-full border border-gray-300 rounded-md px-4 py-2 ${editing ? 'bg-white' : 'bg-gray-100'} text-gray-700`}
            />
          </div>
          {/* Buttons */}
          <div className="pt-4 text-center flex gap-4 justify-center">
            {!editing ? (
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                onClick={() => setEdit(true)}
              >
                <Pencil className="w-4 h-4" />
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300 disabled:opacity-60"
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 bg-gray-400 text-white px-6 py-2 rounded-md hover:bg-gray-500 transition duration-300"
                  onClick={() => setEdit(false)}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
