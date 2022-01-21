import React from "react";
import { MdOutlineFace } from "react-icons/md";
import { SiNaver, SiKakaotalk } from "react-icons/si";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <MdOutlineFace />
        Portfolio
      </div>
      <ul className="navbar__menu">
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>project</p>
        </li>
        <li>
          <p>in</p>
        </li>
        <li>
          <p>more</p>
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
