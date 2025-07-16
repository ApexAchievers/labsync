import React from 'react';
import Google from "../assets/images/google icon removed.png";
import { FlaskConical } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-6">
                {/* Logo */}
                <div className="flex justify-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg"><FlaskConical /></span>
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center space-y-1">
                    <h2 className="text-xl font-semibold text-gray-900">Welcome Back</h2>
                    <p className="text-sm text-gray-500">Sign in to your LabSync account</p>
                </div>

                {/* Login Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
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
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200 text-sm font-medium"
                    >
                        Log In
                    </button>
                </form>

                {/* Sign up link */}
                <p className="text-center text-sm text-gray-500">
                    Don’t have an account?{' '}
                    <a href="#" className="text-green-500 hover:underline font-medium">
                        Sign up
                    </a>
                </p>

                {/* Or continue with */}
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span>Or continue with</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Google Sign In */}
                <button type="button" className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm font-medium text-white hover:bg-green-600 transition duration-150 bg-green-500 "
                    onClick={() => console.log('Sign up with Google')}  >
                    <img src={Google} alt="Google" className="w-5 h-5" />
                    Sign In with Google
                </button>
            </div>
        </div>
    );
}
