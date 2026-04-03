import React from "react";
import NewsletterForm from "../components/newsletterForm/NewsletterForm";
import { Helmet } from "react-helmet";

function NewsletterFormPage() {
  return (
    <div>
      <Helmet>
        <title>Newsletter Form - CoreBTR</title>

        <meta
          name="description"
          content="Subscribe to the CoreBTR newsletter for exam updates, high yield concepts, study tips, and important alerts designed to support your smart NEET PG preparation."
        />
      </Helmet>

      <NewsletterForm />
    </div>
  );
}

export default NewsletterFormPage;
