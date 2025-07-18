import { Pencil, Trash } from "lucide-react";
import { Link } from "lucide-react";

export default function EditProfile() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Edit Your Profile
        </h1>
        <form className="space-y-6 max-w-md mx-auto">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="text"
              name="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex items-center justify-center gap-4">
            {/* Save Changes Button */}
            <div>
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition duration-300">
                <Pencil className="w-4 h-4" />
                Save Changes
              </button>
            </div>

            {/* Delete Profile Button */}
            <div>
              <button className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-md hover:bg-red-700 transition duration-300">
                Delete Profile
                <Trash className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
