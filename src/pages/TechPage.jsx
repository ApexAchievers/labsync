import React from "react";
import { Link } from "react-router";


export default function TechPage() {
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
                            <button
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
