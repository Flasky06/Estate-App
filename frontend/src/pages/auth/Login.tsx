import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login attempt", { email, password });
  };

  return (
    <div className="min-h-screen flex  items-center justify-center  max-w-md mx-auto  ">
      <form
        onSubmit={handleLogin}
        className="space-y-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full"
      >
        <h2 className="text-center text-2xl mb-6">Login</h2>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="text-blue-500 text-xs italic">Forgot password?</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          <a className="inline-block align-baseline  text-sm " href="#">
            Don't have an account ?
            <Link to="/signup " className="text-blue-600">
              Signup
            </Link>
          </a>
        </div>
        <p className="text-center text-gray-500 text-xs my-4">Or</p>

        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
