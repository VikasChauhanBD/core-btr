import React from "react";
import StudentReviews from "../components/studentReviews/StudentReviews";
import InterviewVideos from "../components/interviewVideos/InterviewVideos";
import Reviews from "../components/reviews/Reviews";

function StudentReviewsPage() {
  return (
    <div>
      <StudentReviews />
      <InterviewVideos />
      <Reviews />
    </div>
  );
}

export default StudentReviewsPage;
