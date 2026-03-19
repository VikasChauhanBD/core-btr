import { useState, useEffect } from "react";
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
import PlansPage from "./pages/PlansPage";
import BTRonline from "./components/btr-online/BTRonline";
import BTRoffline from "./components/btr-offline/BTRoffline";
import Bootcamp from "./components/bootcamp/Bootcamp";
import ScrollToTop from "./pages/ScrollToTop";
import StudentReviewsPage from "./pages/StudentReviewsPage";

const TAB_COUNT_KEY = "corebtr_tab_count";

function App() {
  const hasSeen = sessionStorage.getItem("hasSeenLoading");
  const currentCount = parseInt(localStorage.getItem(TAB_COUNT_KEY) || "0");
  const shouldShowLoading = currentCount === 0 && !hasSeen;

  const [showLoading, setShowLoading] = useState(shouldShowLoading);
  const [loadingDone, setLoadingDone] = useState(!shouldShowLoading);

  useEffect(() => {
    const newCount = currentCount + 1;
    localStorage.setItem(TAB_COUNT_KEY, newCount.toString());

    const handleUnload = () => {
      const count = parseInt(localStorage.getItem(TAB_COUNT_KEY) || "1");
      const updated = Math.max(count - 1, 0);
      localStorage.setItem(TAB_COUNT_KEY, updated.toString());
    };
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("hasSeenLoading", "true");
    setShowLoading(false);
    setLoadingDone(true);
  };

  return (
    <>
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage animationReady={loadingDone} />} />
          <Route path="/about-books" element={<AboutBooks />} />
          <Route path="/annotated" element={<Annotated />} />
          <Route path="/unannotated" element={<Unannotated />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/btr-online" element={<BTRonline />} />
          <Route path="/btr-offline" element={<BTRoffline />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/reviews" element={<StudentReviewsPage />} />
          {/* <Route path="/gallery" element={<StudentsPage />} /> */}
          <Route path="/faqs" element={<FaqsPage />} />

          {/* ------------------------ privacy Routes --------------------------- */}
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
