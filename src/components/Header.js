import { Link } from "react-router-dom";
import "./styles/header.scss";
import flower from "../assets/flower.svg";

const Header = () => {
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
