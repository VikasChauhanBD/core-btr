import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about-books" element={<AboutUsPage />} /> */}
          {/* <Route path="/plans" element={<CRBooksPage />} /> */}
          {/* <Route path="/reviews" element={<CrispPage />} /> */}
          {/* <Route path="/gallery" element={<StudentsPage />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          {/* <Route path="/pricing-details" element={<FaqsPage />} /> */}
          {/* <Route path="/terms-and-conditions" element={<StudentsPage />} /> */}
          {/* <Route path="/cancellation-and-refund-policy" element={<GalleryPage />} /> */}
          {/* <Route path="/shipping-and-delivery-policy" element={<FaqsPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
