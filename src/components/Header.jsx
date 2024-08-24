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
      <header className="py-5 shadow font-medium top-0 sticky z-50 ">
        <Container>
          <ul className="flex ml-auto space-x-2 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  className={`flex items-center gap-1 px-3 duration-500 hover:bg-blue-200 rounded-full $`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </header>
    </header>
  );
};

export default Header;
