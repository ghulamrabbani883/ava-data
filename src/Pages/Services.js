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
            <Link to="/contact">
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
            <h3>Static Website</h3>
          </div>
          <div className="servicePlanInfo">
            <div className="servicePrice">
              <h3>$ 2000</h3>
            </div>
            <div className="servicePriceList">
              <p>Home Page</p>
              <p>About Page </p>
              <p>Contact Page</p>
              <p>Service Page</p>
            </div>
            <button className="serviceButton" type="button">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
        <div className="sevicePlan">
          <div className="servicePlanHeading">
            <h3>Dynamic Website</h3>
          </div>
          <div className="servicePlanInfo">
            <div className="servicePrice">
              <h3>$ 5000</h3>
            </div>
            <div className="servicePriceList">
              <p>Home Page</p>
              <p>About Page </p>
              <p>Contact Page</p>
              <p>Service Page</p>
              <p>Dashboard</p>
              <p>Authentication</p>
              <p>API Integration</p>
            </div>
            <button className="serviceButton" type="button">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </div>
        <div className="sevicePlan">
          <div className="servicePlanHeading">
            <h3>Static+Dynamic Website</h3>
          </div>
          <div className="servicePlanInfo">
            <div className="servicePrice">
              <h3>$ 1000</h3>
            </div>
            <div className="servicePriceList">
              <p>Home Page</p>
              <p>About Page </p>
              <p>Contact Page</p>
              <p>Service Page</p>
              <p>Dashboard</p>
              <p>Authentication</p>
              <p>API Integration</p>
              <p>Maintainance</p>
              <p>Dashboard authentication</p>
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
