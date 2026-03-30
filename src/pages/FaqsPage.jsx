import React from "react";
import Faqs from "../components/faqs/Faqs";
import { Helmet } from "react-helmet";

function FaqsPage() {
  return (
    <div>
      <Helmet>
        <title>FAQ's - Core BTR</title>

        <meta
          name="description"
          content="Browse category-wise Core BTR FAQ for a quick answer on common doubts about courses, schedules and preparation strategies. Connect us for any support."
        />
      </Helmet>

      <Faqs />
    </div>
  );
}

export default FaqsPage;
