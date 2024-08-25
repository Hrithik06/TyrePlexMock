import React, { useState, useEffect } from 'react';
import tyreData from '../../utils/tyreData.json';
import { ProductCard, Dropdown } from '../index';
import chevronDown from '../../assets/chevronDown.svg';
import tyreBrands from '../../utils/tyreBrands.json';

const ProductContainer = () => {
    const [tyreList, setTyreList] = useState([]);
    const [showList, setShowList] = useState([]);
    const [modifiedList, setModifiedList] = useState([]);
    const [sortValue, setSortValue] = useState({
        label: 'Most Popular',
        value: 'Most Popular',
    });
    const [brandFilterValue, setBrandFilterValue] = useState([]);
    const [vehicleType, setVehiclType] = useState(null);
    const sortOptions = [
        'Most Popular',
        'Price High to Low',
        'Price Low to High',
    ];
    const vehicleOptions = ['All', 'Car', 'Bike', 'Scooter'];

    const brandOptions = tyreBrands.map((brand) => brand?.brandName);

    const handleSortChange = (selectedValue) => {
        setSortValue(selectedValue);
    };

    const handleBrandFilterChange = (selectedValue) => {
        setBrandFilterValue(selectedValue);
    };

    const handlVehicleFilterChange = (selectedValue) => {
        setVehiclType(selectedValue);
    };

    useEffect(() => {
        // Load data initially
        setTyreList(tyreData);
        setModifiedList(tyreData);
        setShowList(tyreData.slice(0, 8));
    }, []);

    useEffect(() => {
        let filteredData = tyreList;

        if (brandFilterValue.length > 0) {
            const filterArray = brandFilterValue.map((item) => item.value);
            filteredData = filteredData.filter((tyre) =>
                filterArray.includes(tyre.brand),
            );
        }
        if (vehicleType && vehicleType?.value !== 'All') {
            filteredData = filteredData.filter(
                (tyre) => tyre.vehicle_type === vehicleType.value,
            );
        }
        const sortedData = sortData(filteredData);
        setModifiedList(sortedData);
        setShowList(sortedData.slice(0, 8));
    }, [sortValue, brandFilterValue, tyreList, vehicleType]);

    const sortData = (list) => {
        const sortedList = [...list];
        if (sortValue.value === 'Price Low to High') {
            return sortedList.sort((a, b) => a.price_in_inr - b.price_in_inr);
        } else if (sortValue.value === 'Price High to Low') {
            return sortedList.sort((a, b) => b.price_in_inr - a.price_in_inr);
        } else {
            return sortedList.sort((a, b) => b.reviews - a.reviews);
        }
    };

    const handleViewMore = () => {
        if (showList.length < modifiedList.length) {
            setShowList(modifiedList.slice(0, showList.length + 8));
        }
    };

    return (
        <div className="space-y-4">
            <h1
                className="font-medium text-xl flex items-center gap-1 px-4"
                id="deals"
            >
                Tyres sold by this Dealer
            </h1>

            <div
                id="sort-filter"
                className="flex md:gap-4 fixed z-50 bottom-0  md:static md:px-4 text-sm mx-auto md:w-auto w-screen"
            >
                <Dropdown
                    onDropdownChange={handleSortChange}
                    dropDownOptions={sortOptions}
                    placeholder="Sort By"
                    isMulti={false}
                />
                <Dropdown
                    onDropdownChange={handleBrandFilterChange}
                    dropDownOptions={brandOptions}
                    isMulti={true}
                    placeholder="Filter By Brand"
                />
                <Dropdown
                    onDropdownChange={handlVehicleFilterChange}
                    dropDownOptions={vehicleOptions}
                    isMulti={false}
                    placeholder="Vehicle Type"
                />
            </div>

            {showList.length > 0 ? (
                <div className="border p-4 pb-4 space-y-2 border-gray-300 shadow-md rounded-lg xl:p-0 xl:pb-6 xl:shadow-none xl:border-none">
                    <div className="flex flex-wrap xl:justify-between md:justify-evenly gap-y-4">
                        {showList.map((tyre, index) => {
                            const key = `${tyre.brand}-${tyre.name}-${tyre.version}-${index}`;
                            return (
                                <div key={key}>
                                    <ProductCard product={tyre} />
                                </div>
                            );
                        })}
                    </div>

                    {showList.length < modifiedList.length && (
                        <div>
                            <button
                                className="border border-gray-500 font-medium text-gray-500 py-2 md:px-5 px-2 rounded flex items-center mx-auto mt-4 justify-center md:mb-0 mb-10"
                                onClick={handleViewMore}
                            >
                                <span>
                                    <img src={chevronDown} alt="" />
                                </span>
                                <span>View More</span>
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-xl text-center">
                    No Tyres to show!! Try changing the filters
                </div>
            )}
        </div>
    );
};

export default ProductContainer;
