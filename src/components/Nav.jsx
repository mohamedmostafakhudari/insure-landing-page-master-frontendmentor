import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavItem from "./NavItem";
import Menu from "./Menu";
const navItems = ["how we work", "blog", "account"];
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="py-6 relative md:py-0">
      <div className="container mx-auto flex items-center justify-between px-6 md:p-0">
        {/* logo */}
        <img src="./assets/images/logo.svg" alt="logo" />
        {/* menu icon */}
        <div
          className="border w-7 h-7 flex items-center justify-center text-violet-dark cursor-pointer md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <>
              <FontAwesomeIcon icon={faXmark} className="text-violet-dark" />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faBars} className="text-violet-dark" />
            </>
          )}
        </div>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex whitespace-nowrap gap-6">
            {navItems.map((item) => (
              <NavItem item={item} />
            ))}
          </ul>
          <a
            href="#"
            className="block text-violet-veryDark font-bold border w-full text-sm text-center py-2 px-6 uppercase duration-100 ease-in-out hover:text-white hover:bg-violet-veryDark"
          >
            view plans
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <Menu menuOpen={menuOpen}>
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
        </Menu>
      </div>
    </nav>
  );
}
