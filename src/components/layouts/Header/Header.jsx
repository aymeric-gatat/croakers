import { useEffect, useState } from "react";
import Nav from "../../navigations/Header-Menu/Nav";
import "./header.scss";
import logo from "/products/vite.svg";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => [window.removeEventListener("scroll", handleScroll)];
  }, []);
  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <p className="logo">Croakers</p>
      <Nav />
    </header>
  );
}
