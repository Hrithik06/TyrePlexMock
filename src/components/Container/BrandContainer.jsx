import React, { useState, useEffect } from 'react';
import { BrandCard } from '../index';
import tyreBrands from '../../utils/tyreBrands.json';
// import michelinLogo from '../../assets/michelin-logo-1900x450.png';
// import bridgestoneLogo from '../../assets/bridgestone-logo-5500x1200.png';
// import goodyearLogo from '../../assets/goodyear-logo-3000x900.png';
// import continentalLogo from '../../assets/continental-logo-black-on-gold.png';
// import pirelliLogo from '../../assets/pirelli-logo-2100x550.png';
// import hankookLogo from '../../assets/Hankook-logo-5500x1000.png';
// import dunlopLogo from '../../assets/dunlop-logo-2200x500.png';
// import toyoLogo from '../../assets/toyo-logo-2200x700.png';
// import yokohamaLogo from '../../assets/Yokohama-logo-5100x800.png';
// import ceatLogo from '../../assets/CEAT-Tyre-logo-2000x1000.png';
// import jktyreLogo from '../../assets/JK-Tyre-logo-2700x700.png';
// const tyreBrands = [
//     {
//         name: 'Michelin',
//         logoUrl: michelinLogo,
//     },
//     {
//         name: 'Bridgestone',
//         logoUrl: bridgestoneLogo,
//     },
//     {
//         name: 'Goodyear',
//         logoUrl: goodyearLogo,
//     },
//     {
//         name: 'Continental',
//         logoUrl: continentalLogo,
//     },
//     {
//         name: 'Pirelli',
//         logoUrl: pirelliLogo,
//     },
//     {
//         name: 'Hankook',
//         logoUrl: hankookLogo,
//     },
//     {
//         name: 'Dunlop',
//         logoUrl: dunlopLogo,
//     },
//     {
//         name: 'Toyo',
//         logoUrl: toyoLogo,
//     },
//     {
//         name: 'Yokohama',
//         logoUrl: yokohamaLogo,
//     },
//     {
//         name: 'CEAT',
//         logoUrl: ceatLogo,
//     },
//     {
//         name: 'JKTyre',
//         logoUrl: jktyreLogo,
//     },
// ];

const BrandContainer = () => {
    const [brandLogos, setBrandLogos] = useState([]);
    useEffect(() => {
        setBrandLogos(tyreBrands);
    }, []);
    return (
        <div className="border p-4 pb-4 space-y-2 border-gray-300 shadow-md rounded-lg ">
            <h1
                className="font-medium text-xl flex items-center gap-1"
                id="deals"
            >
                Deals in
            </h1>
            <div className="hideHorizontalScrollBar flex gap-4 pb-4 ">
                {brandLogos.map((brand) => (
                    <div key={brand.brandName} className="">
                        <BrandCard brand={brand} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandContainer;
