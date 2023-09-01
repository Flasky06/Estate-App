import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Auth.css";

function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			await axios.post("http://localhost:3500/auth/register", {
				username,
				password,
			});
			alert("Registration completed successfully !");
		} catch (err) {
			console.log(err);
		}
		navigate("/login");
	};
	return (
		<div className="auth">
			<form onSubmit={handleSubmit}>
				<h2>Register</h2>
				<div className="form-group">
					<label htmlFor="username "> username :</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="password "> password :</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>

				<button type="submit">Register</button>
				<p className="auth-link">
					Already have an account ?<Link to="/login">Login</Link>{" "}
				</p>
			</form>
		</div>
	);
}

export default Register;
