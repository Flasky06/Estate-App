import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, Link } from "react-router-dom";

import "./Auth.css";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [_, setCookies] = useCookies(["access_token"]);

	const navigate = useNavigate();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const response = await axios.post("http://localhost:3500/auth/login", {
				username,
				password,
			});

			setCookies("access_token", response.data.token);
			window.localStorage.setItem("userID", response.data.userID);
			navigate("/");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="auth">
			<form onSubmit={handleSubmit}>
				<h2>login</h2>
				<div className="form-group">
					<label htmlFor="username "> username :</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password "> password :</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>{" "}
				<p className="auth-link">
					Don't have an account ?<Link to="/register">Register</Link>{" "}
				</p>
			</form>
		</div>
	);
}

export default Login;
