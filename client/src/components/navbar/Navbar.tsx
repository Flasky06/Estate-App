import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import "./navbar.css";

function Navbar() {
	const [cookies, setCookies] = useCookies(["access_token"]);
	const [showNavbar, setShowNavbar] = useState(false);

	const navigate = useNavigate();

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	const logout = () => {
		setCookies("access_token", "");
		window.localStorage.removeItem("userID");
		navigate("/login");
	};

	return (
		<div className={`navbar ${showNavbar ? "show" : ""}`}>
			<Link to="/">logo</Link>

			<div className={`nav-links ${showNavbar ? "show" : ""}`}>
				<Link to="/houses">Home</Link>
				<Link to="/contact">Contact Us</Link>
				<Link to="/profile">Profile</Link>
				{!cookies.access_token ? (
					<Link to="/login">login</Link>
				) : (
					<button onClick={logout}>Logout</button>
				)}
			</div>

			<div className="mobile-menu" onClick={handleShowNavbar}>
				<div className={`bar ${showNavbar ? "open" : ""}`}></div>
				<div className={`bar ${showNavbar ? "open" : ""}`}></div>
				<div className={`bar ${showNavbar ? "open" : ""}`}></div>
			</div>
		</div>
	);
}

export default Navbar;
