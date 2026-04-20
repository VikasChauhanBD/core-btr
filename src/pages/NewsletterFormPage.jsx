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
          content="Stay ahead with CoreBTR newsletter featuring latest updates, exam insights, key announcements & high yield content to support preparation journey."
        />
      </Helmet>

      <NewsletterForm />
    </div>
  );
}

export default NewsletterFormPage;
