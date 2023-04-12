import React from "react";

export default function Menu({ menuOpen, children }) {
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
      {children}
    </div>
  );
}
