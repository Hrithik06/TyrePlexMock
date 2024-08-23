import React from "react";
import { ServiceCard } from "../components/index";

const Services = () => {
  const services = [
    {
      name: "Wheel Balancing",
      image: "https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100",
    },
    {
      name: "Book Now",
      image: "https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100",
    },
  ];
  return (
    <div className="p-4 border border-gray-300 shadow-md rounded-lg space-y-2">
      <h2 className="text-lg font-medium">Services offered by this dealer</h2>
      <div className="w-full flex flex-start gap-2 ">
        {services.map((service) => (
          <ServiceCard service={service} key={service.name} />
        ))}
      </div>
    </div>
  );
};

export default Services;
