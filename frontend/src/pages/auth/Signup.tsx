import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

interface SignupProps {
  // You can define props if needed
}

const Signup: React.FC<SignupProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would usually check if the passwords match and if so, submit the data
    if (password !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    // Proceed with signup logic...
    console.log("Signup successful", { email, password });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen flex  items-center justify-center  max-w-md mx-auto  ">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full"
      >
        <h2 className="text-center text-2xl mb-6">Signup</h2>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Create password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="confirm-password"
            type="password"
            placeholder="******************"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center flex-col">
          <button
            className="bg-blue-500  w-full hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Signup
          </button>
          <p className="inline-block align-baseline  text-sm text-blue hover:text-blue-darker">
            Already have an account?
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
        <button className="bg-green-700 hover:bg-red-dark mt-8 w-full text-white font-bold py-2 px-4 rounded">
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Signup;
