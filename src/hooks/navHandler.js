import { useEffect, useState } from "react";

export function navHandler() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [background, setBackground] = useState("transparent");
  const [shadow, setShadow] = useState("none");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        setScrollingDown(false);
        setLastScrollTop(currentScroll);
        setBackground("transparent");
      }

      setScrollingDown(currentScroll > lastScrollTop);
      setLastScrollTop(currentScroll);

      if (currentScroll > 0) {
        setBackground("black");
        setShadow("0px 2px 4px rgba(0, 0, 0, 0.5)");
      } else {
        setBackground("transparent");
        setShadow("none");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return { scrollingDown, shadow, background };
}
