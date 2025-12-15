import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();

  // Hide Navbar & Footer only on 404 route
  const hideNavbarFooter = location.pathname === "/404";

  return (
    <>
      {!hideNavbarFooter && <Navbar />}

      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        {/* Redirect unknown routes to /404 */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
