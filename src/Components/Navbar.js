import React, { useState } from "react";
import avaData from "../images/avadata.jpg";
import { Link } from "react-router-dom";
import "./style.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Sidenav from "./Sidenav";
import HirePopUp from "./HirePopUp";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHireHover, setIsHireHover] = useState(false);
  return (
    <nav className="navbar">
      {isSidebarOpen && <Sidenav isSidebarOpen={isSidebarOpen} />}
      {isHireHover && <HirePopUp setIsHireHover={setIsHireHover} />}
      <div className="navLeft">
        <figure>
          <Link to="/">
            <img className="logo" src={avaData} alt={avaData} height={70} />
          </Link>
        </figure>
      </div>
      <div className="navMid">
        <ul className="navbarList">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
          <li>
            <Link to="/our-work">Work</Link>
          </li>
          <li
            className="hireDeveloper"
            onMouseEnter={() => setIsHireHover(true)}
            onMouseLeave={() => setIsHireHover(false)}
          >
            <Link to="/hire-developers">Hire Developers</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <Link to="/contact">
          <button type="button">Contact Us</button>
        </Link>
        {!isSidebarOpen ? (
          <RxHamburgerMenu
            className="hamberger"
            size={24}
            onClick={() => setIsSidebarOpen(true)}
          />
        ) : (
          <RxCross1
            className="hamberger"
            size={24}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
