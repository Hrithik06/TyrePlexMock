import React from "react";
import { Tooltip } from "../index";
import reviewIcon from "../../assets/review.svg";
const ReviewCard = ({ review }) => {
  return (
    <div className="xl:w-96 xl:h-36 w-60 border border-gray-300 shadow-md rounded-lg p-3 space-y-3 text-sm">
      <div className="flex gap-2 items-center">
        <img
          src={review.avatarUrl ? review.avatarUrl : reviewIcon}
          className="w-9 rounded-full"
        />
        <p>{review?.userName}</p>
      </div>

      {/* <Tooltip message={review?.review}> */}
      <p className="line-clamp-3 text-gray-700 text-wrap">{review?.review}</p>
      {/* </Tooltip> */}
    </div>
  );
};

export default ReviewCard;
