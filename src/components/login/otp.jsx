import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const OtpVerification = () => {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [firstCode, setFirstCode] = useState("");
  const [secondCodeVisible, setSecondCodeVisible] = useState(false);
  const [secondCode, setSecondCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    try {
      setLoading(true);
      await api.post("/users/signup/send-otp/", { email: email.trim() });
      setEmailSubmitted(true);
      setSubmittedEmail(email.trim());
    } catch (error) {
      alert("Failed to send OTP. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (firstCode.length !== 4 || secondCode.length !== 4) {
      alert("Please enter the 4-digit code in both fields.");
      return;
    }

    if (firstCode !== secondCode) {
      alert("Codes do not match. Please try again.");
      return;
    }

    try {
      setLoading(true);
      await api.post("/users/signup/verify-otp/", {
        email: submittedEmail,
        otp: firstCode,
      });

      // Navigate to signup with verified email
      navigate("/signup", { state: { email: submittedEmail } });
    } catch (error) {
      alert("Invalid OTP. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-sm p-6">
        {!emailSubmitted ? (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Email Verification
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Please enter your email address to receive a 4-digit verification code.
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Check your email
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Enter the 4-digit code sent to{" "}
              <span className="font-medium text-gray-900">{submittedEmail}</span>. <br />
              It’s valid for 10 minutes.
            </p>

            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Verification code *
                </label>
                <input
                  type="text"
                  maxLength={4}
                  value={firstCode}
                  onChange={(e) => {
                    setFirstCode(e.target.value);
                    if (e.target.value.length === 4) {
                      setSecondCodeVisible(true);
                    } else {
                      setSecondCodeVisible(false);
                    }
                  }}
                  placeholder="Enter code"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {secondCodeVisible && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Re-enter verification code *
                  </label>
                  <input
                    type="text"
                    maxLength={4}
                    value={secondCode}
                    onChange={(e) => setSecondCode(e.target.value)}
                    placeholder="Re-enter code"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                {loading ? "Verifying..." : "Continue"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default OtpVerification;
