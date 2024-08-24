import React from 'react';
import tickIcon from '../assets/tick.svg';
const Payment = () => {
    const paymentMethods = [
        'Deposit to Account',
        'Credit Card/Debit Card',
        'Wallets (PayTM/PhonePe/Amazon etc.)',
        'Net Banking',
        'UPI',
    ];
    return (
        <div className="w-full p-3 border border-gray-300 shadow-md rounded-lg space-y-2">
            <h1 className="font-medium text-xl " id="payment">
                Payment Mode
            </h1>
            <ul className="grid md:gap-y-2 grid-rows-3 md:grid-cols-2 xl:w-3/5">
                <li className="col-span-1 flex items-center">
                    <span>
                        <img src={tickIcon} alt="" />
                    </span>
                    Deposit to Account
                </li>
                <li className="col-span-1 flex items-center">
                    <span>
                        <img src={tickIcon} alt="" />
                    </span>
                    Credit Card/Debit Card
                </li>
                <li className="col-span-1 flex items-center">
                    <span>
                        <img src={tickIcon} alt="" />
                    </span>
                    Wallets (PayTM/PhonePe/Amazon etc.)
                </li>
                <li className="col-span-1 flex items-center">
                    <span>
                        <img src={tickIcon} alt="" />
                    </span>
                    Net Banking
                </li>
                <li className="col-span-1 flex items-center">
                    <span>
                        <img src={tickIcon} alt="" />
                    </span>
                    UPI
                </li>
            </ul>
        </div>
    );
};

export default Payment;
