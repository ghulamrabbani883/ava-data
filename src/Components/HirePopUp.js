import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {BiLeftArrowAlt} from 'react-icons/bi'
import { hireDeveloperRight } from "../Pages/ServiceAndTechnologyData";
const HirePopUp = ({setIsHireHover,setHireClicked}) => {
  return (
    <section className="hirePop" onMouseEnter={()=>setIsHireHover(true)} onMouseLeave={()=>setIsHireHover(false)}>
      <div className="popUpHeader">
        <BiLeftArrowAlt className="popArrow" size={24} onClick={()=>setHireClicked(false)} />
        <Link to="/hire-dedicated-developer">Hire dedicated Developer</Link>
      </div>
      <div className="hireDeveloperWrapper">
        {hireDeveloperRight.map((hire) => {
          return (
            <div className="hireDeveloperBox" key={hire.id}>
              {hire.serviceList.map((service, i) => (
                <p className="hireDeveloperList" key={i + 1}>{service}</p>
              ))}
            </div>
          );
        })}
      </div>
      <div className="hireDeveloperSide">
        {hireDeveloperRight.map((hire) => {
          return (
            <div className="hireDeveloperBox" key={hire.id}>
              {hire.serviceList.map((service, i) => (
                <p className="hireDeveloperList" key={i + 1}>{service}</p>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HirePopUp;
