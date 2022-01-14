import React from "react";
import { MdOutlineFace } from "react-icons/md";
import { SiNaver, SiKakaotalk } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <MdOutlineFace />
          Portfolio
        </Link>
      </div>
      <ul className="navbar__menu">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/">b</Link>
        </li>
        <li>
          <Link to="/">d</Link>
        </li>
        <li>
          <Link to="/">d</Link>
        </li>
      </ul>

      <div className="navbar__icons">
        <li>
          <SiKakaotalk />
        </li>
        <li>
          <SiNaver />
        </li>
      </div>
    </div>
  );
};

export default Navbar;
