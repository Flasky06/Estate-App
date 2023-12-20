import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your custom login logic here
    console.log("Logging in with:", { username, password });
  };

  const handleSignupWithGoogle = async () => {
    try {
      // Access user information from result.user
    } catch (error) {
      console.error("Error signing up with Google:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Log In
          </button>
          <div className="mt-4">
            <button
              type="button"
              // onClick={handleSignupWithGoogle}
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

export default Login;
