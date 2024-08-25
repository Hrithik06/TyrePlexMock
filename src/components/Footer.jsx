import React from 'react';

function Footer() {
    return (
        <section className="relative overflow-hidden py-10 text-gray-600 border border-t-2 border-t-gray-500">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-2 inline-flex items-center">
                                <img
                                    alt="TyrePlex"
                                    src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
                                    // className="h-8 w-auto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <ul>
                                <li className="mb-2">
                                    <a className="hover:text-blue-700" href="/">
                                        Who We Are
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:text-blue-700" href="/">
                                        Are you a Tyre Dealer?
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <ul>
                                <li className="mb-2">
                                    <a className="hover:text-blue-700" href="/">
                                        Privacy Policy{' '}
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:text-blue-700" href="/">
                                        Terms of use
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <ul>
                                <li className="mb-2">
                                    <a className="hover:text-blue-700" href="/">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a className="hover:text-blue-700" href="/">
                                        Career
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-blue-700" href="/">
                                        Shipping & Return Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
