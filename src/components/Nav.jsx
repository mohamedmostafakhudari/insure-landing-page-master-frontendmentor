import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Menu from "./Menu";
const navItems = ["how we work", "blog", "account"];
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="py-6 relative">
      <div className="container mx-auto flex items-center justify-between px-6 md:p-0">
        {/* logo */}
        <img src="./assets/images/logo.svg" alt="logo" />
        {/* menu icon */}
        <div
          className="border w-7 h-7 flex items-center justify-center text-violet-dark cursor-pointer"
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
      </div>
      <div className="md:hidden">
        <Menu navItems={navItems} menuOpen={menuOpen} />
      </div>
    </nav>
  );
}
