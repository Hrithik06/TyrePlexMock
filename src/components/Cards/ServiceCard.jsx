import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="xl:w-80 w-44 md:w-44 flex flex-col items-center border border-gray-300 shadow-md rounded-lg gap-4 py-6">
      <div>
        <img src={service.image} alt="" />
      </div>
      <div className="font-semibold text-base text-center">{service.name}</div>
      <a className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-[3px] leading-3 px-3 py-2.5 m-1 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
        Book Now
      </a>
    </div>
  );
};

export default ServiceCard;
