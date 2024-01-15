import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.tsx";
import Login from "./pages/auth/Login.tsx";
import Signup from "./pages/auth/Signup.tsx";
import PropertyDetails from "./pages/PropertyDetails/index.tsx";
import ForSale from "./pages/properties-forsale/index.tsx";
import ForRent from "./pages/rental-properties/index.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/for-rent" element={<ForRent />} />
        <Route path="/for-sale" element={<ForSale />} />
      </Routes>
    </BrowserRouter>
  );
}
