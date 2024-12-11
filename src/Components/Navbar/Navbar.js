import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu} from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo">⚙️</div>
        <nav>
          <ul className="nav-links">
          <li>
          <Link className="navele" to="/about">About</Link>
        </li>
        <li>
          <Link className="navele" to="/Education">Education</Link>
        </li>
        <li>
          <Link className="navele" to="/work">My Work</Link>
        </li>
        <li>
          <Link className="navele" to="/Skills">Skills</Link>
        </li>

          </ul>
        </nav>
        <Link to="https://wa.me/917666345870" target="_blank" className="btn hire-me">Contact Me</Link>
      </header>
      <button className="menu">
        <IoMdSettings className="set" />
        <GiHamburgerMenu className="men" />
      </button>
    </>
  );
};

export default Navbar;
