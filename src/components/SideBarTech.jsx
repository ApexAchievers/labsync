
import { LayoutDashboard, Clock, Loader, CheckCircle, LogOut, FlaskConical } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-white shadow-lg p-4 flex flex-col">
           <div className="flex flex-row space-x-4 mb-6">
            <FlaskConical className="h-6 w-6 text-[#4CAF50]" />
            <div className="text-2xl font-bold">LabSync</div>
            </div> 
            <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                    <Clock className="w-5 h-5" />
                    <span>My Tasks</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                    <Loader className="w-5 h-5" />
                    <span>Samples</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
                    <CheckCircle className="w-5 h-5" />
                    <span>History</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700 hover:text-red-500 cursor-pointer mt-auto">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
}
