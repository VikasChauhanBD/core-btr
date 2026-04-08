import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import PlanPricesPage from "./pages/PlanPricesPage";
import Face404 from "./components/face404/Face404";
import AuthPage from "./components/authPage/AuthPage";
import FairUsagePolicyPage from "./pages/FairUsagePolicyPage";
import AppDownloadPage from "./pages/AppDownloadPage";
import SchedulePage from "./pages/SchedulePage";
import LeadFormPage from "./pages/LeadFormPage";
import NeetPgSchedulePage from "./pages/NeetPgSchedulePage";
import InterestCapsule from "./components/interestCapsule/InterestCapsule";
import NewsletterFormPage from "./pages/NewsletterFormPage";
import HelpCenterPage from "./pages/HelpCenterPage";

function ConditionalInterestCapsule() {
  const location = useLocation();
  return location.pathname !== "/interested" ? <InterestCapsule /> : null;
}

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
            setIntroComplete(true);
          }
        } else {
          setIntroComplete(true);
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
        <ConditionalInterestCapsule />
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
          <Route path="/plan-prices" element={<PlanPricesPage />} />
          <Route path="/online-classes-schedule" element={<SchedulePage />} />
          <Route path="/bootcamp-schedule" element={<NeetPgSchedulePage />} />
          <Route path="/fair-usage-policy" element={<FairUsagePolicyPage />} />
          <Route path="/reviews" element={<StudentReviewsPage />} />
          <Route path="/faq" element={<FaqsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/delete-account" element={<DeleteAccountPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/cancellation-refund" element={<CancellationPolicy />} />
          <Route path="/device-policy" element={<DevicePolicyPage />} />
          <Route path="/download-app" element={<AppDownloadPage />} />
          <Route
            path="/shipping-delivery"
            element={<ShippingAndDeliveryPolicyPage />}
          />
          <Route path="/interested" element={<LeadFormPage />} />
          <Route path="/newsletter-form" element={<NewsletterFormPage />} />
          <Route path="*" element={<Face404 />} />
          <Route path="/testingpage" element={<AuthPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
