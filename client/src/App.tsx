import React from "react";
import "./App.css";

import { useCookies } from "react-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Navbar from "./components/navbar/Navbar";
import CreateRecipes from "./pages/create-recipe/Create-recipes";
import SavedRecipes from "./pages/savedRecipes/SavedRecipes";
import Houses from "./pages/houses/Houses";
import HouseDetails from "./pages/house-details";
import ProfilePage from "./pages/profilePage/ProfilePage";
import EditProfile from "./pages/profilePage/EditProfile";
import Contact from "./pages/contactus/contact";

function App() {
	const [cookies] = useCookies(["access_token"]);
	return (
		<div className="App">
			<Router>
				{cookies.access_token ? <Navbar /> : <></>}

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/houses" element={<Houses />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/create-recipes" element={<CreateRecipes />} />
					<Route path="/saved-recipes" element={<SavedRecipes />} />
					<Route path="/house-details" element={<HouseDetails />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/edit-profile" element={<EditProfile />} />
					<Route path="/contact-us" element={<Contact />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
