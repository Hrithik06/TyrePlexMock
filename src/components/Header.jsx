// import React from 'react';
// import { Container } from '../components/index';
// const Header = () => {
//     const navItems = [
//         {
//             name: 'Car Tyres',
//         },
//         {
//             name: 'Bike Tyres',
//         },
//         {
//             name: 'Tyre Pressure',
//         },
//         {
//             name: 'Commercial Tyres',
//         },
//         {
//             name: 'Accessories',
//         },
//         {
//             name: 'More',
//         },
//     ];
//     return (
//         <header>
//             <header className="py-2 h-full shadow font-medium top-0 sticky z-50 mb-4">
//                 <Container>
//                     <nav className="flex items-center md:px-4 xl:px-0">
//                         <div className="xl:w-40 md:w-16 ">
//                             <img
//                                 className="w-full"
//                                 // width="150"
//                                 // height="36"
//                                 src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
//                                 alt="Tyreplex.com"
//                             ></img>
//                         </div>
//                         <ul className="flex xl:mx-auto md:ml-32 md:mr-4 items-center xl:text-base md:text-sm">
//                             {navItems.map((item) => (
//                                 <li key={item.name}>
//                                     <button
//                                         className={`flex items-center xl:px-3 md:px-1 hover:underline underline-offset-4 decoration-red-600 `}
//                                     >
//                                         {item.name}
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="flex items-center gap-1 p-1 hover:bg-red-100 hover:duration-500 rounded-2xl">
//                             <svg
//                                 width="16px"
//                                 height="16px"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                             >
//                                 <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                                 <g
//                                     id="SVGRepo_tracerCarrier"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                 ></g>
//                                 <g id="SVGRepo_iconCarrier">
//                                     <path
//                                         d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
//                                         stroke="#000000"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     ></path>{' '}
//                                 </g>
//                             </svg>
//                             Login
//                         </button>
//                     </nav>
//                 </Container>
//             </header>
//         </header>
//     );
// };

// export default Header;

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    // { name: 'Dashboard', href: '#', current: true },
    { name: 'Car Tyres', href: '#', current: false },
    { name: 'Bike Tyres', href: '#', current: false },
    { name: 'Tyre Pressure', href: '#', current: false },
    { name: 'Commercial Tyres', href: '#', current: false },
    { name: 'Accessories', href: '#', current: false },
    { name: 'More', href: '#', current: false },
    { name: 'Login', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Header = () => {
    return (
        <Disclosure as="nav" className="white font-roboto shadow-lg">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                aria-hidden="true"
                                className="block h-6 w-6 group-data-[open]:hidden fil-red-400"
                            />
                            <XMarkIcon
                                aria-hidden="true"
                                className="hidden h-6 w-6 group-data-[open]:block"
                            />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center md:justify-between justify-center sm:items-stretch ">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="TyrePlex"
                                src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={
                                            item.current ? 'page' : undefined
                                        }
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-900 text-white'
                                                : 'text-black hover:bg-red-100 ',
                                            'rounded-md px-2 py-2 text-sm font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-black hover:bg-red-100 ',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
};
export default Header;
