import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import avaData from '../images/avadata.jpg'
import {MdEmail,MdPhone,MdLocationPin} from 'react-icons/md'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer1">
        <figure className="logo">
          <img src={avaData} alt={avaData} height="60px" />
        </figure>
        <div className="footerInfo">
          <MdEmail className="footerIcon" size={18} /> avadata.in@gmail.com
        </div>
        <div className="footerInfo">
          <MdPhone className="footerIcon" size={18} /> +91 8907345884
        </div>
        <address>
          <MdLocationPin className="footerIcon" size={18} /> 21 Highfield Road,<br />
          London, UK <br />
          E42 5NS
        </address>
      </div>
      <div className="footer2">
        <h3 className="footerTitle">Company</h3>
        <div className="footerInfoContent">
          <div>
            <Link className="footerInfoList" to="/about">About</Link>
          </div>
          <div>
            <Link className="footerInfoList" to="/services">Services</Link>
          </div>
          <div>
            <Link className="footerInfoList" to="/technology">Technology</Link>
          </div>
          <div>
            <Link className="footerInfoList" to="/our-work">Work</Link>
          </div>
          <div>
            <Link className="footerInfoList" to="/hire-developers">Hire Developers</Link>
          </div>
          <div>
            <Link className="footerInfoList" to="/career">Career</Link>
          </div>
        </div>
      </div>
      <div className="footer2">
        <h3 className="footerTitle">Services</h3>
        <div className="footerInfoContent">
          <div className="footerInfoList">
            <p>Website development</p>
          </div>
          <div className="footerInfoList">
            <p>Mobile App development</p>
          </div>
          <div className="footerInfoList">
            <p>Cloud Computing</p>
          </div>
          <div className="footerInfoList">
            <p>BlockChain</p>
          </div>
          <div className="footerInfoList">
            <p>Databases</p>
          </div>
        </div>
      </div>
      <div className="footer2">
      <h3 className="footerTitle">Technologies</h3>
        <div className="footerInfoContent">
          <div className="footerInfoList">
            <p>Reactjs</p>
          </div>
          <div className="footerInfoList">
            <p>Nodejs</p>
          </div>
          <div className="footerInfoList">
            <p>Java</p>
          </div>
          <div className="footerInfoList">
            <p>React Native</p>
          </div>
          <div className="footerInfoList">
            <p>Flutter</p>
          </div>
          <div className="footerInfoList">
            <p>Rest API</p>
          </div>
          <div className="footerInfoList">
            <p>GraphQL</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
