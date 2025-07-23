
import React, { useState } from "react";
import { LayoutDashboard, Clock, Loader, CheckCircle, LogOut, FlaskConical, Settings, Bell, UserPen } from "lucide-react";
import { Link } from "react-router";







export default function Sidebar() {

    const [settingsOpen, setSettingsOpen] = useState(false);
    const toggleSettings = () => {
        setSettingsOpen((prev) => !prev);
    };



    return (
        <div className="w-64 h-screen bg-white shadow-lg p-4 flex flex-col">
            <div className="flex flex-row space-x-4 mb-6">
                <FlaskConical className="h-6 w-6 text-[#4CAF50]" />
                <div className="text-2xl font-bold">LabSync</div>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                        <LayoutDashboard className="w-5 h-5" />
                        <span>Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                        <Clock className="w-5 h-5" />
                        <span>My Tasks</span>
                    </div>
    
                    <div className="space-y-2">
                        <div
                            onClick={toggleSettings}
                            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer"
                        >
                            <Settings className="w-5 h-5" />
                            <span>Settings</span>
                        </div>
    
                        {/* Dropdown items */}
                        {settingsOpen && (
                            <div className="ml-6 space-y-2 mt-1">
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <Bell className="w-5 h-5" />
                                    <span className="text-sm">Notifications</span>
                                </div>
                                <Link
                                    to="/profile-tech"
                                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
                                >
                                    <UserPen className="w-5 h-5" />
                                    <span className="text-sm">Profile</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
    
                <div className="mt-auto flex items-center space-x-2 text-gray-700 hover:text-red-500 cursor-pointer">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
}
