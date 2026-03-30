import React from "react";
import ContactUs from "../components/contactUs/ContactUs";
import { Helmet } from "react-helmet";

function ContactUsPage() {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Core BTR</title>

        <meta
          name="description"
          content="Connect for Core BTR course details, guidance & support. Core BTR academic team will provide you quick assistance for your queries without any delay."
        />
      </Helmet>

      <ContactUs />
    </div>
  );
}

export default ContactUsPage;
