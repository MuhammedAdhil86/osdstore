import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [feedback, setFeedback] = useState(null);

  const apiBase = "https://osdstore-seven.vercel.app/api/users/forget-password";

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setFeedback(null);
    if (!email) {
      setFeedback({ type: "error", message: "Email is required" });
      return;
    }

    try {
      const res = await axios.post(`${apiBase}/send-otp/`, { email }, { withCredentials: true });
      setFeedback({ type: "success", message: res.data.message || "Verification code sent to your email." });
      setStep("otp");
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Failed to send OTP. Please try again.",
      });
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setFeedback(null);

    try {
      const res = await axios.post(`${apiBase}/verify-otp/`, { email, otp }, { withCredentials: true });
      setFeedback({ type: "success", message: res.data.message || "OTP verified successfully!" });
      setStep("reset");
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Invalid OTP. Please try again.",
      });
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setFeedback(null);

    if (!newPassword) {
      setFeedback({ type: "error", message: "New password is required" });
      return;
    }

    try {
      const res = await axios.patch(
        `${apiBase}/set-password/`,
        { email, otp, password: newPassword },
        { withCredentials: true }
      );
      setFeedback({ type: "success", message: res.data.message || "Password reset successful!" });

      // Reset form and go back to email step
      setStep("email");
      setEmail("");
      setOtp("");
      setNewPassword("");
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Failed to reset password. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-100 via-white to-purple-200">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Forgot Password</h2>

        {feedback && (
          <div
            className={`mb-4 px-4 py-2 rounded-md text-sm font-medium ${
              feedback.type === "success"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            {feedback.message}
          </div>
        )}

        {step === "email" && (
          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter your registered email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
            >
              Send Verification Code
            </button>
          </form>
        )}

        {step === "otp" && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter 4-digit OTP
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="\d{4}"
                maxLength={4}
                placeholder="e.g. 1234"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
            >
              Verify OTP
            </button>
          </form>
        )}

        {step === "reset" && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter new password
              </label>
              <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
            >
              Reset Password
            </button>
          </form>
        )}

        <div className="text-sm text-center mt-6 text-gray-600">
          <Link to="/loginpage" className="text-purple-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
