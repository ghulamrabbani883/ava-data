import React,{useState} from "react";
import "./style.css";
import avaData from "../images/avadata.jpg";
import { Link } from "react-router-dom";
import HirePopUp from './HirePopUp';
const Sidenav = ({ isSidebarOpen }) => {
  const [hireClicked, setHireClicked] = useState(false);
  
  return (
    <aside className={`sidebarNav ${isSidebarOpen && "openSideNav"}`}>
      {
        hireClicked && <HirePopUp setHireClicked={setHireClicked} />
      }
      <div className="sideHeader">
        <figure>
          <Link to="/">
            <img className="logo" src={avaData} alt={avaData} height={70} />
          </Link>
        </figure>
      </div>
      <div className="sideNavList">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/our-work">Work</Link>
          <Link to="/hire-developers" onClick={()=>setHireClicked(true)}>Hire Developers</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">
            <button className="sideNavButton" type="button">
              Contact Us
            </button>
          </Link>
      </div>
    </aside>
  );
};

export default Sidenav;
