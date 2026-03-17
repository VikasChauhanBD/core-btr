import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import FaqsPage from "./pages/FaqsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Footer from "./components/footer/Footer";
import TermsAndConditions from "./components/Policies/TermsAndConditions";
import CancellationPolicy from "./components/Policies/CancellationPolicy";
import AboutBooks from "./pages/AboutBooks";
import Annotated from "./components/annotated/Annotated";
import Unannotated from "./components/unannotated/Unannotated";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-books" element={<AboutBooks />} />
          {/* <Route path="/plans" element={<CRBooksPage />} /> */}
          {/* <Route path="/reviews" element={<CrispPage />} /> */}
          {/* <Route path="/gallery" element={<StudentsPage />} /> */}
          <Route path="/annotated" element={<Annotated />} />
          <Route path="/unannotated" element={<Unannotated />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          {/* <Route path="/pricing-details" element={<FaqsPage />} /> */}
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/cancellation-and-refund-policy"
            element={<CancellationPolicy />}
          />
          {/* <Route path="/shipping-and-delivery-policy" element={<FaqsPage />} /> */}
          <Route path="/faqs" element={<FaqsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
