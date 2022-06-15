import { Link } from "react-router-dom";
import "./styles/header.scss";
import flower from "../assets/flower.svg";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 140
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-holder">
          <Link to={`/`} className="link">
            Home
          </Link>
          <img className="company-image" src={flower} alt="flower" />
          <a href="#about" className="link">
            About
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
