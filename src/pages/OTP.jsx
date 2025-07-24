import { apiClient } from "../api/client";
import { useNavigate } from "react-router";

export default function OTP() {
  const navigate = useNavigate();
  const verifyOTP = async (data) => {
    try {
      const response = await apiClient.post("/api/auth/verify-otp", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Verify OTP
        </h2>

        <form action={verifyOTP} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter Email
            </label>
            <input
              type="text"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              OTP:
            </label>
            <input
              type="text"
              name="otp"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors"
          >
            Verify
          </button>
          <h1 className="text-2xl font-semibold text-center text-gray-800 flex flex-col sm:flex-row items-center justify-center gap-1">
            <span>Resend</span>
            <span className="text-blue-600">OTP</span>
          </h1>
        </form>
      </div>
    </div>
  );
}
