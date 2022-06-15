import { Link } from "react-router-dom";
import "./styles/header.scss";
import flower from "../assets/flower.svg";
import { useEffect, useState } from "react";

const Header = ({ setStickyMargin }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 140 ? setSticky(true) : setSticky(false);
    scrollTop >= 140 ? setStickyMargin(234) : setStickyMargin(0);
  };

  return (
    <div className={"header" + (sticky ? " is-sticky" : "")}>
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
