import React, { useState } from "react";
import { FlaskConical } from "lucide-react";
import Google from "../assets/images/google icon removed.png";
import axios from "axios";
import { toast } from "react-toastify";
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";

export default function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    });

  const handleChange = (e) => {
    const { fullName, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [fullName]: type === "checkbox" ? checked : value,
    });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        if (!formData.acceptTerms) {
            toast.error("You must agree to the terms!");
            return;
        }

    try {
      const response = await apiClient.post("/api/auth/register", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        acceptedTerms: formData.acceptTerms,
      });
      localStorage.setItem("email", response.data.email);
      const result = await response.json();

      if (response.ok) {
        toast.success("Signup successful!");
        console.log(result);
        // Optionally reset the form
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          acceptTerms: false,
        });
      } else {
        toast.error(result.message || "Signup failed!");
      }

      navigate("/otp");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

    const isFormValid =
        formData.fullName &&
        formData.email &&
        formData.password &&
        formData.confirmPassword &&
        formData.password === formData.confirmPassword &&
        formData.acceptTerms;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
                {/* Logo & Title */}
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full mb-2">
                        <span className="text-white text-xl font-bold">
                            {" "}
                            <FlaskConical />{" "}
                        </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                        Create Your LabSync Account
                    </h2>
                    <p className="text-sm text-gray-500 text-center">
                        Join our platform to manage your lab operations
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="fullName"
                            className="text-sm text-gray-700 block mb-1"
                        >
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm text-gray-700 block mb-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="text-sm text-gray-700 block mb-1"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="text-sm text-gray-700 block mb-1"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <div className="flex items-center text-sm">
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            id="acceptTerms"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            className="mr-2"
                            required
                        />
                        <label htmlFor="acceptTerms">
                            I agree to the{" "}
                            <span className="text-green-600">Terms of Service</span> and{" "}
                            <span className="text-green-600">Privacy Policy</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full py-2 rounded text-sm font-medium transition 
        ${isFormValid
                                ? "bg-green-500 hover:bg-green-600 text-white"
                                : "bg-gray-300 text-gray-600 cursor-not-allowed"
                            }`}
                    >
                        Sign Up
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <span className="text-green-600 font-medium cursor-pointer">
                            Log in
                        </span>
                    </p>
                    <div
                        className="flex items-center justify-center gap-2 text-green-600 cursor-pointer"
                        onClick={() => console.log('Sign in with Google')}
                    >
                        <img src={Google} alt="Google" className="w-5 h-5" />
                        <span className="text-sm font-medium">Sign in with Google</span>
                    </div>

                </form>
                {/* Toast
                <ToastContainer position='top-right' autoClose={5000} hideProgressBar={false}/> */}
            </div>
        </div>
    );
}
