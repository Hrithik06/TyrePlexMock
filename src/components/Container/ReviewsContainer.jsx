import React, { useEffect, useState } from "react";
import reviewData from "../../utils/reviewData.json";
import { ReviewCard } from "../index";

const ReviewsContainer = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setReviews(reviewData);
  }, []);

  return (
    <div className="hideHorizontalScrollBar flex gap-4 pb-2">
      {reviews.map((item) => (
        <div key={item?.review}>
          <ReviewCard review={item} />
        </div>
      ))}
    </div>
  );
};

export default ReviewsContainer;
