import { apiClient } from "../api/client";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function OTP() {
  const navigate = useNavigate();

  const verifyOTP = async (data) => {
    try {
      const response = await apiClient.post("/api/auth/verify-otp", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("token", response.data.token);
      toast.success(response.data?.message || "OTP verified successfully!");
      navigate("/login");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "OTP verification failed. Please try again.";
      toast.error(errorMessage);
      console.log(error);
    }
  };

  // Render the ResndOTP verification
  const resendOTP = async () => {
    const email = localStorage.getItem("userEmail"); // 🔑 Get from storage

    if (!email) {
      toast.error("Email not found. Please register again.");
      return;
    }

    try {
      const response = await apiClient.post(
        "/api/auth/resend-otp",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data?.message || "OTP resent successfully!");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to resend OTP.";
      toast.error(errorMessage);
      console.error(error);
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
              OTP:
            </label>
            <input
              type="text"
              name="otp"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors"
            >
              Verify
            </button>

            <div className="flex items-center text-sm text-gray-800">
              <span>Didn't receive the OTP?</span>
              <button
                onClick={resendOTP}
                type="button"
                className="text-blue-600 font-medium hover:underline"
              >
                Resend OTP
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
