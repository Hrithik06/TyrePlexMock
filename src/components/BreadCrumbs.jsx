import React from 'react';

const BreadCrumbs = () => {
    return (
        <div>
            {/* <!--Third breadcrumb--> */}
            <nav class="w-full rounded-md">
                <ol class="list-reset flex">
                    <li>
                        <a
                            href="#"
                            class="text-primary transition duration-150 ease-in-out hover:text-primary-accent-300 focus:text-primary-accent-300 active:text-primary-accent-300 motion-reduce:transition-none dark:text-primary-400"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <span class="mx-2 text-neutral-400">/</span>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-primary transition duration-150 ease-in-out hover:text-primary-accent-300 focus:text-primary-accent-300 active:text-primary-accent-300 motion-reduce:transition-none dark:text-primary-400"
                        >
                            Tyre Dealers GHaziabad
                        </a>
                    </li>
                    <li>
                        <span class="mx-2 text-neutral-400">/</span>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-primary transition duration-150 ease-in-out hover:text-primary-accent-300 focus:text-primary-accent-300 active:text-primary-accent-300 motion-reduce:transition-none dark:text-primary-400"
                        >
                            Tyre Dealers
                        </a>
                    </li>
                    <li>
                        <span class="mx-2 text-neutral-400">/</span>
                    </li>
                    <li class="text-neutral-400">
                        SHREE HEMKUNT TYRES AND SERVICES
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default BreadCrumbs;
