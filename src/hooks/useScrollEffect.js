import { useState, useEffect } from "react";

export default function useScrollEffect() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0); //loads 0 when is at the top of the page
  const [background, setBackground] = useState("transparent");
  const [shadow, setShadow] = useState("none");

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPos = window.scrollY;

      if (newScrollPos <= 0) {
        //Ignores scroll events if at the top of the page
        setScrollingDown(false);
        setPrevScrollPos(newScrollPos);
        setBackground("transparent");
        return;
      }

      setScrollingDown(newScrollPos > prevScrollPos); // it will set scrollingDown useState to (true), if current scroll is greater than previous, meaning that the nav bar will disapear
      setPrevScrollPos(newScrollPos); // sets the prevScrollPos to the current one, so that the above function can work

      if (newScrollPos > 10) {
        setShadow("0px 2px 4px rgba(0, 0, 0, 0.5)");
      } else {
        setShadow("none");
      }

      if (newScrollPos > 2) {
        setBackground("black");
      } else {
        setBackground("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); //stops listening to avoid memory leaks
  }, [prevScrollPos]); //by using a dependancy array the effect only re-runs when one of the dependencies change, without it it might use outdated values of prevScrollPos

  return { scrollingDown, background, shadow };
}