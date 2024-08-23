import React from "react";
import michelinLogo from "../../assets/michelin-logo-1900x450.png";
import pirelliLogo from "../../assets/pirelli-logo-2100x550.png";
const BrandCard = () => {
  return (
    <div className="flex justify-center gap-10">
      <div className="xl:w-56 w-52 md:w-32 flex flex-col items-center border border-gray-300 shadow-md rounded-lg gap-1 py-3 text-gray-700">
        <div className="w-full flex justify-center">
          <img src={michelinLogo} alt="" className="w-24" />
        </div>
        <div>MRF</div>
      </div>

      <div className="xl:w-56 w-52 md:w-32  flex flex-col items-center border border-gray-300 shadow-md rounded-lg gap-1 py-3 text-gray-700">
        <div className="w-full flex justify-center">
          <img src={pirelliLogo} alt="" className="w-24" />
        </div>
        <div>Pirelli</div>
      </div>
    </div>
  );
};

export default BrandCard;
