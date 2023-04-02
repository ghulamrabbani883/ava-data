import React, { Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { serviceLeftData, serviceRightData } from "./ServiceAndTechnologyData";
import { Helmet } from "react-helmet";
const Services = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ava-Data/Services</title>
        <link rel="canonical" href="http://localhost:3000/services" />
      </Helmet>
      <section className="services">
        <div className="serviceLeft">
          <h2 className="serviceLeftTitle">Industry</h2>
          <div className="serviceLeftWrapper">
            {serviceLeftData.map((leftData) => {
              return (
                <div className="serviceLeftList" key={leftData.id}>
                  {leftData.icon}
                  <p>{leftData.para}</p>
                </div>
              );
            })}
          </div>
          <div className="serviceLeftBottom">
            <Link to="/about">
              <button className="serviceLeftButton" type="button">
                Know More
              </button>
            </Link>
          </div>
        </div>
        <div className="serviceRight">
          {serviceRightData.map((rightData) => {
            return (
              <div className="serviceRightBox" key={rightData.id}>
                <div className="serviceRightTitle">
                  <div className="serviceRightTitleIcon">{rightData.icon}</div>
                  <h4>{rightData.title}</h4>
                </div>
                <ul className="serviceList">
                  {rightData.serviceList.map((list, i) => {
                    return <li key={i + 1}>{list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
      <section className="servicePricing">
        <div className="sevicePlan">
          <div className="servicePlanHeading">
            <h3>Web App</h3>
          </div>
          <div className="servicePlanInfo">
            <div className="servicePrice">
              <h3>$ 5000</h3>
            </div>
            <div className="servicePriceList">
              <p>For a dynamic website with an MVP or simple online store, and it will take upto 1 month of time to complete the project. The prices may vary depending on the faeture you need.</p>
            </div>
            <button className="serviceButton" type="button">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
        <div className="sevicePlan">
          <div className="servicePlanHeading">
            <h3>Mobile App</h3>
          </div>
          <div className="servicePlanInfo">
            <div className="servicePrice">
              <h3>$ 7000</h3>
            </div>
            <div className="servicePriceList">
            <p>For the interactive mobile application with an MVP or simple online store, and it will take upto 1-2 months of time to complete the project. The prices may vary depending on the faeture you need.</p>
            </div>
            <button className="serviceButton" type="button">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
        <div className="sevicePlan">
          <div className="servicePlanHeading">
            <h3>Web+Mobile App</h3>
          </div>
          <div className="servicePlanInfo">
            <div className="servicePrice">
              <h3>$ 12000</h3>
            </div>
            <div className="servicePriceList">
            <p>For a dynamic website along with an interactive mobile appliaction having the same faeture,  with an MVP or simple online store, and it will take upto 1 month of time to complete the project. The prices may vary depending on the faeture you need.</p>
            </div>
            <button className="serviceButton" type="button">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
