import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const mobileStyles = {
    control: (provided) => ({
        ...provided,
        '@media (max-width: 640px)': {
            border: 'none',
            boxShadow: 'none',
            backgroundColor: 'white',
        },
    }),
    menu: (provided) => ({
        ...provided,
        '@media (max-width: 640px)': {
            position: 'absolute',
            zIndex: 10,
        },
    }),
    menuPortal: (provided) => ({
        ...provided,
        '@media (max-width: 640px)': {
            position: 'absolute',
            top: 'auto',
            bottom: '100%',
            zIndex: 10,
        },
    }),
};

const Dropdown = ({
    dropDownOptions,
    onDropdownChange,
    defaultOption,
    isMulti,
    placeholder,
}) => {
    const defaultValue = { label: defaultOption, value: defaultOption };
    const handleChange = (selectedOption) => {
        // Pass the selected value to the parent component's callback
        onDropdownChange(selectedOption);
    };
    const [options, setOptions] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setOptions(dropDownOptions.map((opt) => ({ label: opt, value: opt })));
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640); // Adjust the breakpoint as needed
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="w-full md:w-auto md:text-base text-xs">
            <Select
                options={options}
                components={animatedComponents}
                onChange={handleChange}
                isMulti={isMulti}
                placeholder={placeholder}
                styles={mobileStyles}
                menuPlacement="auto"
                menuPosition="absolute"
                isSearchable={!isMobile}
            />
        </div>
    );
};

export default Dropdown;
