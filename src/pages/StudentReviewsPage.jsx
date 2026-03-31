import React from "react";
import StudentReviews from "../components/studentReviews/StudentReviews";
import InterviewVideos from "../components/interviewVideos/InterviewVideos";
import { Helmet } from "react-helmet";

function StudentReviewsPage() {
  return (
    <div>
      <Helmet>
        <title>Reviews - CoreBTR</title>

        <meta
          name="description"
          content="Check out reviews of trusted student feedback, success stories, real preparation experience, reactions & highlights of the CoreBTR learning approach."
        />
      </Helmet>

      <StudentReviews />
      <InterviewVideos />
    </div>
  );
}

export default StudentReviewsPage;
