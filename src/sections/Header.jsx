import React from "react";
import Nav from "../components/Nav";
import useWindow from "../hooks/useWindow";
export default function Header() {
  return (
    <header className="">
      <Nav />
      <Intro />
    </header>
  );
}

function Intro() {
  const { width } = useWindow();
  const backgroundStyle = {
    backgroundImage:
      width > 480
        ? "url(./assets/images/bg-pattern-intro-left-desktop.svg), url(./assets/images/bg-pattern-intro-right-desktop.svg)"
        : "url(./assets/images/bg-pattern-intro-left-mobile.svg),url(./assets/images/bg-pattern-intro-right-mobile.svg)",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "left top, right 300%",
  };
  return (
    <div className=" flex flex-col md:flew-row">
      <div className="flex-1">
        <picture>
          <source
            srcSet="./assets/images/image-intro-desktop.jpg"
            media="(min-width: 481px)"
          />
          <img src="./assets/images/image-intro-mobile.jpg" alt="intro" />
        </picture>
      </div>
      <div
        className="flex-1 bg-violet-dark text-center text-white min-h-[60vh] grid place-items-center"
        style={backgroundStyle}
      >
        <div className="container mx-auto px-4 md:p-0">
          <h1 className=" text-4xl font-bold font-heading">
            Humanizing <br /> your insurance.
          </h1>
          <p className="mt-3 max-w-[34ch] mx-auto md:m-0">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a
            href="#"
            className="block uppercase border w-fit mx-auto py-2 px-6 font-bold text-sm mt-8"
          >
            view plans
          </a>
        </div>
      </div>
    </div>
  );
}
