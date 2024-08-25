import React from 'react';
import starIcon from '../../assets/star.svg';

const ProductCard = ({ product }) => {
    return (
        <div className="flex xl:w-[310px] xl:h-60 md:w-80 pb-2 w-full text-sm border border-gray-300 shadow-md rounded-lg relative overflow-hidden hover:shadow-xl hover:duration-500 ">
            <div
                className="w-7/12 xl:space-y-3 space-y-1 py-3 pl-3"
                id="details"
            >
                <div className="w-full" id="brand-logo">
                    <img alt="" src={product?.logoUrl} className="w-1/2" />
                </div>
                <div id="name">{product?.name}</div>
                <div id="version" className="text-gray-500">
                    {product?.version}
                </div>
                <div
                    id="rating"
                    className="flex items-center justify-start gap-1  text-gray-500"
                >
                    <span className="flex items-center bg-green-500 gap-0.5 px-1 rounded-sm text-white">
                        <img src={starIcon} alt="" />
                        <p>{product?.rating}</p>
                    </span>
                    <p className="text-xs">{product?.reviews} Reviews</p>
                </div>
                <div id="price" className="text-base">
                    {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    }).format(product?.price_in_inr)}
                </div>
                <div className="text-xs text-green-500">Offer available</div>
                <div className="text-xs text-gray-500">{product?.type}</div>
            </div>

            <div className="w-5/12" id="warranty-image">
                <div
                    className="bg-[#FFCA2845] right-0 top-0 flex pr-1 items-center justify-evenly w-full rounded-tr-md"
                    id="warranty"
                >
                    <div>
                        <svg
                            width="24px"
                            height="24px"
                            viewBox="-2.5 -2.5 30.00 30.00"
                            fill="black"
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
                                {' '}
                                <path
                                    d="M10.4608 1.50732C11.2607 0.539132 12.7446 0.539132 13.5445 1.50732L14.7445 2.95979C15.1677 3.472 15.8176 3.74061 16.4789 3.67664L18.3571 3.49495C19.6102 3.37372 20.6624 4.42666 20.5402 5.67974L20.3597 7.53129C20.2949 8.1958 20.566 8.84883 21.0823 9.2721L22.5232 10.4533C23.4993 11.2534 23.4993 12.7466 22.5232 13.5467L21.0823 14.7279C20.566 15.1512 20.2949 15.8042 20.3597 16.4687L20.5402 18.3203C20.6624 19.5733 19.6102 20.6263 18.3571 20.505L16.4789 20.3234C15.8176 20.2594 15.1677 20.528 14.7445 21.0402L13.5445 22.4927C12.7446 23.4609 11.2607 23.4609 10.4608 22.4927L9.26079 21.0402C8.83761 20.528 8.18769 20.2594 7.52637 20.3234L5.64824 20.505C4.39507 20.6263 3.34293 19.5733 3.4651 18.3203L3.64562 16.4687C3.71041 15.8042 3.43933 15.1512 2.92298 14.7279L1.48208 13.5467C0.505968 12.7466 0.505968 11.2534 1.48208 10.4533L2.92298 9.2721C3.43933 8.84883 3.71041 8.1958 3.64562 7.53129L3.4651 5.67974C3.34293 4.42666 4.39507 3.37372 5.64824 3.49495L7.52637 3.67664C8.18769 3.74061 8.83761 3.472 9.26079 2.95979L10.4608 1.50732Z"
                                    stroke="#fafaff"
                                    strokeWidth="1.5"
                                ></path>{' '}
                                <path
                                    d="M8.12549 12.7725L10.4136 15.0516C10.8437 15.48 11.5531 15.4296 11.9182 14.9446L15.8801 9.68274"
                                    stroke="#fafaff"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                ></path>{' '}
                            </g>
                        </svg>
                    </div>
                    <span className="text-sm">
                        {product?.warranty_years} Year Warranty
                    </span>
                </div>
                <div className="w-44 h-full">
                    <img
                        src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
                        alt=""
                        className="absolute -bottom-4 -right-14"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
