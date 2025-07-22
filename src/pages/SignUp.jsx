import React, { useState } from 'react';
import { FlaskConical } from 'lucide-react';
import Google from "../assets/images/google icon removed.png";

export default function SignUp() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (!formData.agreeTerms) {
            alert('You must agree to the terms!');
            return;
        }


        console.log('Form submitted:', formData);
    };

    const isFormValid = formData.fullName && formData.email && formData.password && formData.confirmPassword && formData.password === formData.confirmPassword && formData.agreeTerms;


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
                {/* Logo & Title */}
                <div className="flex flex-col items-center mb-6">
                    <div className="bg-green-500 w-10 h-10 flex items-center justify-center rounded-full mb-2">
                        <span className="text-white text-xl font-bold"> <FlaskConical /> </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Create Your LabSync Account</h2>
                    <p className="text-sm text-gray-500 text-center">Join our platform to manage your lab operations</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="fullName" className="text-sm text-gray-700 block mb-1">Full Name</label>
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
                        <label htmlFor="email" className="text-sm text-gray-700 block mb-1">Email Address</label>
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
                        <label htmlFor="password" className="text-sm text-gray-700 block mb-1">Password</label>
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
                        <label htmlFor="confirmPassword" className="text-sm text-gray-700 block mb-1">Confirm Password</label>
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
                            name="agreeTerms"
                            id="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            className="mr-2"
                            required
                        />
                        <label htmlFor="agreeTerms">
                            I agree to the <span className="text-green-600">Terms of Service</span> and <span className="text-green-600">Privacy Policy</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full py-2 rounded text-sm font-medium transition 
        ${isFormValid ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}>
                        Sign Up
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        Already have an account? <span className="text-green-600 font-medium cursor-pointer">Log in</span>
                    </p>
                    <button type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm font-medium text-white hover:bg-green-600 transition duration-150 bg-green-500 "
                        onClick={() => console.log('Sign up with Google')}  >
                        <img src={Google} alt="Google" className="w-5 h-5" />
                        Sign up with Google
                    </button>
                </form>
            </div>
        </div>
    );
}
