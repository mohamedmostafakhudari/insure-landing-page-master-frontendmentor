import React from "react";

export default function NavItem({ item }) {
  return (
    <li className="uppercase text-white font-bold text-lg md:text-violet-darkGrayish md:text-sm duration-200 ease-in-out md:hover:text-violet-veryDark">
      <a href="#" className="md:block md:py-6 md:text-center">
        {item}
      </a>
    </li>
  );
}
