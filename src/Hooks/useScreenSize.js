import { useState, useEffect } from "react";

export default function useScreenSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileView = width <= 600;
  const desktopView = width <= 1000;

  return { width, mobileView, desktopView };
}
