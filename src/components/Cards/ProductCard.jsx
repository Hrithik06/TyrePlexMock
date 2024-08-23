import React from "react";
import starIcon from "../../assets/star.svg";
import apolloLogo from "../../assets/Apollo-Tyres-logo.png";
const ProductCard = () => {
  return (
    <div className="grid grid-cols-12 xl:w-80 text-sm border border-gray-300 shadow-md rounded-lg">
      <div className="col-span-7 space-y-3  py-3 pl-3" id="details-col">
        <div className="w-full" id="brand-logo">
          <img
            // src="https://www.carlogos.org/tire-brands-logos/Apollo-Tyres-logo-1920x1080.png"
            alt=""
            src={apolloLogo}
            className="w-1/2"
          />
        </div>
        <div id="name">AMAZER 4G LIFE</div>
        <div id="version" className="text-gray-500">
          145/80 R12
        </div>
        <div
          id="rating"
          className="flex items-center justify-start gap-1  text-gray-500"
        >
          <span className="flex items-center bg-green-500 gap-1 px-2 rounded-sm text-white">
            <img src={starIcon} alt="" />
            <p>4</p>
          </span>
          <p className="text-xs">320 Reviews</p>
        </div>
        <div id="price" className="text-base">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(400000)}
        </div>
        <div className="text-xs text-green-500">Offer available</div>
        <div className="text-xs text-gray-500">Tube Tyre</div>
      </div>

      <div className="col-span-5  " id="image-col">
        <div
          className="bg-[#FFCA2845] right-0 top-0 flex items-center justify-evenly gap-1 w-full rounded-md"
          id="warranty"
        >
          <div>
            <img
              src="https://cdn.tyreplex.net/themes/moonlight/images/warranty-tag-1x.png?v=1500&tr=q-60"
              alt=""
              className="w-full"
            />
          </div>
          5 Year Warranty
        </div>
        <div className="w-44 h-full relative overflow-hidden">
          <img
            src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
            alt=""
            className=" object-cover absolute -right-4 bottom-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
