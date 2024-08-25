import React from 'react';
import michelinLogo from '../../assets/michelin-logo-1900x450.png';
import pirelliLogo from '../../assets/pirelli-logo-2100x550.png';
const BrandCard = ({ brand }) => {
    return (
        <div className="xl:w-56 w-52 md:w-32 md:h-full flex flex-col items-center justify-around border border-gray-300 shadow-md rounded-lg gap-1 py-1 text-gray-500">
            <div className="mx-2 xl:mx-6">
                <img src={brand.logoUrl} alt="" className="w-full" />
            </div>
            <div>{brand.brandName}</div>
        </div>
    );
};

export default BrandCard;
