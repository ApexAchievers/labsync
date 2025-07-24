import React, { useState } from "react";
import Google from "../assets/images/google icon removed.png";
import { FlaskConical } from 'lucide-react';
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { apiClient } from "../api/client";
import { toast } from "react-toastify";



export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (data) => {
        const loginPromise = apiClient.post("/api/auth/login", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        toast.promise(
            loginPromise,
            {
                pending: "Logging in...",
                success: {
                    render({ data }) {
                        return data?.data?.message || "Login successful";
                    },
                },
                error: {
                    render({ data }) {
                        const msg =
                            data?.response?.data?.message ||
                            "Login failed. Please try again.";
                        return msg;
                    },
                },
            },
            {
                position: "top-right",
                autoClose: 3000,
            }
        );

        try {
            const response = await loginPromise;

            const { token, user } = response.data;
            const { role } = user;

            localStorage.setItem("token", token);

            if (role === "user") {
                navigate("/patient-dashboard");
            } else if (role === "admin") {
                navigate("/manager-dashboard");
            } else if (role === "lab") {
                navigate("/technician-dashboard");
            } else {
                toast.error("Unknown role. Access denied.");
                navigate("/not-authorized");
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-6">
                {/* Logo */}
                <div className="flex justify-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                            <FlaskConical />
                        </span>
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center space-y-1">
                    <h2 className="text-xl font-semibold text-gray-900">Welcome Back</h2>
                    <p className="text-sm text-gray-500">
                        Sign in to your LabSync account
                    </p>
                </div>

                {/* Login Form */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (email && password) login({ email, password });
                    }}
                    className="space-y-4"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                        />
                        <div className="text-right mt-1">
                            <a href="#" className="text-sm text-green-500 hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!email || !password}
                        className={`w-full py-2 px-4 rounded-md text-sm font-medium transition duration-200 ${email && password
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        Log In
                    </button>
                </form>

                {/* Sign up link */}
                <p className="text-center text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <Link to="/sign-up">
                        <div className="text-green-500 hover:underline font-medium">
                            Sign up
                        </div>
                    </Link>
                </p>

                {/* Or continue with */}
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span>Or continue with</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Google Sign In */}
                <div
                    className="flex items-center justify-center gap-2 text-green-600 cursor-pointer"
                    onClick={() => console.log('Sign up with Google')}
                >
                    <img src={Google} alt="Google" className="w-5 h-5" />
                    <span className="text-sm font-semibold">Sign up with Google</span>
                </div>
            </div>
        </div>
    );
}
