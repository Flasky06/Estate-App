import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        console.error("Passwords do not match");
        return;
      }

      // Your signup logic here
      console.log("Signing up with:", { email, password });
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleSignupWithGoogle = async () => {
    try {
      // Your Google signup logic here
    } catch (error) {
      console.error("Error signing up with Google:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-600">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border p-2 rounded mt-1"
              required
            />
          </div>
          <button
            type="button"
            onClick={handleSignup}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Sign Up
          </button>

          <span className="flex justify-center font-bold">or</span>
          <div className="mt-4">
            <button
              type="button"
              onClick={handleSignupWithGoogle}
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Sign Up with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
