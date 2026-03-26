import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroVideo from "./components/introVideo/IntroVideo";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import FaqsPage from "./pages/FaqsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Footer from "./components/footer/Footer";
import TermsAndConditions from "./components/Policies/TermsAndConditions";
import CancellationPolicy from "./components/Policies/CancellationPolicy";
import BootcampPage from "./pages/BootcampPage";
import BTROfflinePage from "./pages/BTROfflinePage";
// import BTROnlinePage from "./pages/BTROnlinePage";
import ScrollToTop from "./pages/ScrollToTop";
import StudentReviewsPage from "./pages/StudentReviewsPage";
import DevicePolicyPage from "./pages/DevicePolicyPage";
import DeleteAccountPage from "./pages/DeleteAccountPage";
import ContactUsPage from "./pages/ContactUsPage";
import ShippingAndDeliveryPolicyPage from "./pages/ShippingAndDeliveryPolicyPage";
import WorkbookPage from "./pages/WorkbookPage";
import GalleryPage from "./pages/GalleryPage";
import Face404 from "./components/face404/Face404";

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const CHANNEL_NAME = "coreBTR";
    let channel;

    try {
      channel = new BroadcastChannel(CHANNEL_NAME);
      let otherTabExists = false;

      const handleMessage = (event) => {
        if (event.data.type === "tab_exists") {
          otherTabExists = true;
        } else if (event.data.type === "checking") {
          channel.postMessage({ type: "tab_exists" });
        }
      };

      channel.addEventListener("message", handleMessage);
      channel.postMessage({ type: "checking" });

      const timeoutId = setTimeout(() => {
        if (!otherTabExists) {
          const hasSeenVideo = sessionStorage.getItem("hasSeenIntro");
          if (!hasSeenVideo) {
            setShowIntro(true);
          } else {
            setIntroComplete(true); // ADD THIS — skip intro case
          }
        } else {
          setIntroComplete(true); // ADD THIS — other tab case
        }
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        if (channel) {
          channel.removeEventListener("message", handleMessage);
          channel.close();
        }
      };
    } catch (error) {
      const hasSeenVideo = sessionStorage.getItem("hasSeenIntro");
      if (!hasSeenVideo) {
        setShowIntro(true);
      }
    }
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
    setTimeout(() => setIntroComplete(true), 1000);
  };

  return (
    <>
      {showIntro && <IntroVideo onEnd={handleVideoEnd} />}
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<HomePage introComplete={introComplete} />}
          />
          {/* <Route path="/btr-online" element={<BTROnlinePage />} /> */}
          <Route path="/corebtr-offline" element={<BTROfflinePage />} />
          <Route path="/corebtr-bootcamp" element={<BootcampPage />} />
          <Route path="/workbooks" element={<WorkbookPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<StudentReviewsPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/delete-account" element={<DeleteAccountPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/cancellation-and-refund-policy"
            element={<CancellationPolicy />}
          />
          <Route path="/device-policy" element={<DevicePolicyPage />} />
          <Route
            path="/shipping-and-delivery-policy"
            element={<ShippingAndDeliveryPolicyPage />}
          />
          <Route path="*" element={<Face404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
