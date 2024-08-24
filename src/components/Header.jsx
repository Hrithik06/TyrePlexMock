import React from "react";
import { Container } from "../components/index";
const Header = () => {
  const navItems = [
    {
      name: "Car Tyres",
    },
    {
      name: "Bike Tyres",
    },
    {
      name: "Tyre Pressure",
    },
    {
      name: "Commercial Tyres",
    },
    {
      name: "Accessories",
    },
    {
      name: "More",
    },
  ];
  return (
    <header>
      <header className="py-2 h-full shadow font-medium top-0 sticky z-50 mb-4">
        <Container>
          <nav className="flex items-center md:px-4 xl:px-0">
            <div className="xl:w-40 md:w-16 ">
              <img
                className="w-full"
                // width="150"
                // height="36"
                src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
                alt="Tyreplex.com"
              ></img>
            </div>
            <ul className="flex xl:mx-auto md:ml-32 md:mr-4 items-center xl:text-base md:text-sm">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    className={`flex items-center xl:px-3 md:px-1 hover:underline underline-offset-4 decoration-red-600 `}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-1 p-1 hover:bg-red-100 hover:duration-500 rounded-2xl">
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              Login
            </button>
          </nav>
        </Container>
      </header>
    </header>
  );
};

export default Header;
