import React from "react";
import starIcon from "../../assets/star.svg";
import apolloLogo from "../../assets/Apollo-Tyres-logo.png";
const ProductCard = () => {
  return (
    <div className="flex md:w-80 w-11/12 text-sm border border-gray-300 shadow-md rounded-lg relative overflow-hidden hover:shadow-xl hover:duration-500">
      <div className="w-7/12 xl:space-y-3 space-y-1 py-3 pl-3" id="details">
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
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(40000)}
        </div>
        <div className="text-xs text-green-500">Offer available</div>
        <div className="text-xs text-gray-500">Tube Tyre</div>
      </div>

      <div className="w-5/12" id="warranty-image">
        <div
          className="bg-[#FFCA2845] right-0 top-0 flex items-center justify-evenly gap-1 w-full rounded-tr-md"
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
        <div className="w-44 h-full">
          <img
            src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
            alt=""
            className="  absolute -bottom-4 -right-14"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
