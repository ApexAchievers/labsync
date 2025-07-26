


export default function PatientList() {
  return (
    <div className="min-h-screen   py-10 px-2 sm:px-4 font-poppins">
      <div className="w-full max-w-4xl mx-auto bg-white p-4 sm:p-8 rounded-2xl shadow-2xl animate-fade-in-up">
        <h1 className="text-xl font-poppins sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-400  animate-fade-in">Patients List</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-blue-200 shadow-lg rounded-xl text-xs sm:text-sm md:text-base">
            <thead className="bg-blue-500">
              <tr>
                <th className="px-4 sm:px-8 py-2 sm:py-3 text-left text-xs sm:text-xs font-bold text-white uppercase tracking-wider">Name</th>
                <th className="px-4 sm:px-8 py-2 sm:py-3 text-left text-xs sm:text-xs font-bold text-white uppercase tracking-wider">Email</th>
                <th className="px-4 sm:px-8 py-2 sm:py-3 text-left text-xs sm:text-xs font-bold text-white uppercase tracking-wider">Phone</th>
                <th className="px-4 sm:px-8 py-2 sm:py-3 text-left text-xs sm:text-xs font-bold text-white uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-blue-100">
              {/* Example row, replace with dynamic data */}
              <tr className="hover:bg-blue-50 transition-all duration-300 ease-in-out animate-fade-in-up">
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap font-light text-gray-800">John Doe</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-blue-500">john@example.com</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-gray-600">123-456-7890</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold shadow">Active</span>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-all duration-300 ease-in-out animate-fade-in-up delay-100">
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap font-light text-gray-800">Jane Smith</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-blue-500">jane@example.com</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-gray-600">987-654-3210</td>
                <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                  <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold shadow">Inactive</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Animations (TailwindCSS custom classes, add to your CSS if not present) */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in both;
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}