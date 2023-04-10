import React from "react";
import NavItem from "./NavItem";
export default function Menu({ navItems, menuOpen }) {
  const backgroundStyle = {
    backgroundImage: 'url("./assets/images/bg-pattern-mobile-nav.svg")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "contain",
  };
  return (
    <div
      className={`min-h-[calc(100vh-76px)] container mx-0 px-4 bg-violet-veryDark absolute top-full w-full origin-left ${
        menuOpen ? "scale-x-100" : "scale-x-0"
      } duration-200 ease-in-out`}
      style={backgroundStyle}
    >
      <ul className=" flex flex-col items-center [&>li]:mt-10">
        {navItems.map((item) => (
          <NavItem key={item} item={item} />
        ))}
      </ul>
      <a
        href="#"
        className="block text-white font-bold border w-full text-lg text-center py-2 mt-8 uppercase"
      >
        view plans
      </a>
    </div>
  );
}
