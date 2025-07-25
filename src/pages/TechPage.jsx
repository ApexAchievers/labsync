import React, { useState } from "react";
import { Link } from "react-router";
import { useParams } from 'react-router-dom';
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";





export default function TechPage() {
    const { id } = useParams();
    console.log("Tech ID:", id);

    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    


    const acceptInvite = async (data) => {
        console.log("Accepting invite with data:", data);
        try {
            const response = await apiClient.post(`/api/technician/accept-invitation/${id}`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Response from server:", response.data);
            localStorage.setItem("token", response.data.token);
            toast.success(response.data?.message || "Password Set successfully! Please Login");
            navigate("/technician-login");
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
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (password && confirmPassword) acceptInvite({ password, confirmPassword });
                }} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">New Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            type="password"
                            className="w-full border rounded px-3 py-2 mt-1 text-sm"
                            placeholder="********"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
                        <input
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            name="confirmPassword"
                            type="password"
                            className="w-full border rounded px-3 py-2 mt-1 text-sm"
                            placeholder="********"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition" >
                            Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
