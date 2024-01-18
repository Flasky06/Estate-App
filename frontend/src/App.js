import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.tsx";
import Login from "./pages/auth/Login.tsx";
import Signup from "./pages/auth/Signup.tsx";
import PropertyDetails from "./pages/PropertyDetails/index.tsx";
import ForRent from "./pages/rental-properties/index.tsx";
import SearchResults from "./pages/results/index.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/for-rent" element={<ForRent />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}
