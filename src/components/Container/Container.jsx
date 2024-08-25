import React from 'react';

const Container = ({ children, className }) => {
    return (
        <div className={` mx-auto w-full xl:max-w-7xl ${className}`}>
            {children}
        </div>
    );
};

export default Container;
