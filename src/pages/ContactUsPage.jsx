import React from "react";
import ContactUs from "../components/contactUs/ContactUs";
import { Helmet } from "react-helmet";

function ContactUsPage() {
  return (
    <div>
      <Helmet>
        <title>Contact Us - CoreBTR</title>

        <meta
          name="description"
          content="Connect for CoreBTR course details, guidance & support. CoreBTR academic team will provide you quick assistance for your queries without any delay."
        />
      </Helmet>

      <ContactUs />
    </div>
  );
}

export default ContactUsPage;
