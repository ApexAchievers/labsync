import React from "react";
import { Link } from "react-router";
import { useParams } from 'react-router-dom';
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";




export default function TechPage() {
    const { id }= useParams();
    console.log("Tech ID:", id);

    
        const acceptInvite = async (data) => {
            try {
              const response = await apiClient.post("/api/technician/accept-invitation", data, {
                headers: {
                  "Content-Type": "application/json",
                },
              });
              localStorage.setItem("token", response.data.token);
              toast.success(response.data?.message || "Password Set successfully! Please Login");
              navigate("/login");
            } catch (error) {
              const errorMessage =
                error.response?.data?.message ||
                "Fail to set password. Please try again.";
              toast.error(errorMessage);
              console.log(error);
            }
          };
    



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Set New Password</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">New Password</label>
                        <input
                            type="password"
                            className="w-full border rounded px-3 py-2 mt-1 text-sm"
                            placeholder="********"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full border rounded px-3 py-2 mt-1 text-sm"
                            placeholder="********"
                        />
                    </div>
                    <div className="text-center">
                        <Link to={'/login'}>
                            <button onClick={acceptInvite}
                                type="submit"
                                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition" >
                                Login
                            </button>
                        </Link>
                    </div>

                   

                </form>
            </div>
        </div>
    );
}
