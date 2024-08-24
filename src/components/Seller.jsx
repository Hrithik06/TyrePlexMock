import React from "react";
import starIcon from "../assets/star.svg";

import { ReviewsContainer, PhotosContainer } from "./index";

const Seller = () => {
  return (
    <div className="w-full border space-y-8 border-gray-300 shadow-md rounded-lg p-3 ">
      <div
        className="md:w-full flex flex-col-reverse md:flex-row gap-4 "
        id="seller"
      >
        <div id="textDetails" className=" space-y-4 md:w-2/5 relative">
          <h1
            className="font-medium text-xl flex items-center gap-1"
            id="sellerName"
          >
            SHREE HEMKUNT TYRES AND SERVICES
            <span className="md:text-green-600 md:bg-transparent px-2 text-white bg-green-600 text-sm flex items-center md:static absolute -top-12">
              <svg
                viewBox="-2.5 -2.5 30.00 30.00"
                className="w-6 h-6 md:fill-[#16a34a] fill-white"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M10.4608 1.50732C11.2607 0.539132 12.7446 0.539132 13.5445 1.50732L14.7445 2.95979C15.1677 3.472 15.8176 3.74061 16.4789 3.67664L18.3571 3.49495C19.6102 3.37372 20.6624 4.42666 20.5402 5.67974L20.3597 7.53129C20.2949 8.1958 20.566 8.84883 21.0823 9.2721L22.5232 10.4533C23.4993 11.2534 23.4993 12.7466 22.5232 13.5467L21.0823 14.7279C20.566 15.1512 20.2949 15.8042 20.3597 16.4687L20.5402 18.3203C20.6624 19.5733 19.6102 20.6263 18.3571 20.505L16.4789 20.3234C15.8176 20.2594 15.1677 20.528 14.7445 21.0402L13.5445 22.4927C12.7446 23.4609 11.2607 23.4609 10.4608 22.4927L9.26079 21.0402C8.83761 20.528 8.18769 20.2594 7.52637 20.3234L5.64824 20.505C4.39507 20.6263 3.34293 19.5733 3.4651 18.3203L3.64562 16.4687C3.71041 15.8042 3.43933 15.1512 2.92298 14.7279L1.48208 13.5467C0.505968 12.7466 0.505968 11.2534 1.48208 10.4533L2.92298 9.2721C3.43933 8.84883 3.71041 8.1958 3.64562 7.53129L3.4651 5.67974C3.34293 4.42666 4.39507 3.37372 5.64824 3.49495L7.52637 3.67664C8.18769 3.74061 8.83761 3.472 9.26079 2.95979L10.4608 1.50732Z"
                    // stroke="#fafaff"
                    className="stroke-#fafaff"
                    // stroke="black"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M8.12549 12.7725L10.4136 15.0516C10.8437 15.48 11.5531 15.4296 11.9182 14.9446L15.8801 9.68274"
                    // stroke="#fafaff"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </g>
              </svg>
              Verified
            </span>
          </h1>
          <div id="contact" className="space-y-2">
            <div className="text-sm flex items-center gap-2">
              <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs">
                4.9
              </span>
              <span className="hover:animate-pulse">
                <img src={starIcon} alt="" className="inline md:w-3 xl:w-4" />
                <img src={starIcon} alt="" className="inline md:w-3 xl:w-4" />
                <img src={starIcon} alt="" className="inline md:w-3 xl:w-4" />
                <img src={starIcon} alt="" className="inline md:w-3 xl:w-4" />
                <img src={starIcon} alt="" className="inline md:w-3 xl:w-4" />
              </span>
              <span className="underline ">
                {new Intl.NumberFormat("en-IN", {}).format(2278)} Reviews
              </span>
              <button className="px-2 border border-gray-400 text-gray-600 rounded hover:bg-gray-300 hover:text-black m-0">
                Rate
              </button>
            </div>
            <div id="address" className="flex items-start gap-4 text-sm">
              <div>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 13V7M15 10.0008L9 10M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z"
                      stroke="#9ca3af"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <p>
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </p>
            </div>
            <div id="openTime" className="flex items-center gap-4 text-sm">
              <div>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#9ca3af"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
              <p className="text-gray-500 text-sm">
                Open - Monday&nbsp;&nbsp;to&nbsp;&nbsp;Sunday - 10:00AM to
                8:00PM
              </p>
            </div>
          </div>

          <button className=" border border-red-500 font-medium text-red-500 py-2 px-10 rounded hover:text-white hover:bg-red-500 duration-300">
            Get Directions
          </button>
        </div>
        <div id="photos " className="md:w-3/5 md:mt-4">
          <PhotosContainer />
        </div>
      </div>
      <div className="w-full " id="reviews">
        <ReviewsContainer />
      </div>
    </div>
  );
};

export default Seller;
