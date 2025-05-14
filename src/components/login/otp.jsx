import React, { useState } from "react";

const OtpVerification = () => {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [firstCode, setFirstCode] = useState("");
  const [secondCodeVisible, setSecondCodeVisible] = useState(false);
  const [secondCode, setSecondCode] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmailSubmitted(true);
      setSubmittedEmail(email.trim());
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (firstCode.length === 4) {
      setSecondCodeVisible(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-md w-full max-w-sm p-6">
        {!emailSubmitted ? (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Email Verification</h2>
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
                className="w-full py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Check your email</h2>
            <p className="text-sm text-gray-600 mb-6">
              Please enter the 4-digit verification code that was sent to{" "}
              <span className="font-medium text-gray-900">{submittedEmail}</span>. The code is valid for 10 minutes.
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
                  onChange={(e) => setFirstCode(e.target.value)}
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
<Link to="/signup">

<button
                type="submit"
                className="w-full py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Continue
              </button>
</Link>
           
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default OtpVerification;
