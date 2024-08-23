import React from "react";

const ReviewCard = () => {
  return (
    <div className="xl:w-[410px] w-60 border border-gray-300 shadow-md rounded-lg p-3 space-y-3 text-sm">
      <p className="flex gap-2 items-center">
        <img
          src="https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo"
          className="w-9 rounded-full"
        />
        <p>Md Nasir</p>
      </p>
      <p className="line-clamp-3 text-gray-700 text-left">
        Excellent service from start to finish. 100% satisfaction with the job,
        professionalism and overall service.We were delighted with your
        courteous , prompt and professional service. We would plan to reuse your
        services and recommend these to friends and family. You came to us as a
        recommendation and this proved accurate.
      </p>
    </div>
  );
};

export default ReviewCard;
