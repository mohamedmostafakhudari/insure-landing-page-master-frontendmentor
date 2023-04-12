import React from "react";
import { useState, useEffect } from "react";
export default function useWindow() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function resize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });
  return windowSize;
}
