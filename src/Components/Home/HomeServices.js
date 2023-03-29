import React from "react";
import { homeServicesData } from "./Bannerdata";
import { Link } from "react-router-dom";
const HomeServices = () => {
  return (
    <section className="homeServices">
      <h2 className="homeServicesTitle">
        Services designed to <span>launch you as a market Leader</span>
      </h2>
      <div className="homeServicesWrapper">
        {homeServicesData.map((homeData) => {
          return (
            <div className={"homeServiceBox"} key={homeData.id}>
              <div className="serviceBoxEffect"></div>
              <div className="serviceBoxContent">
                <div className="serviceBoxIcon">{homeData.icon}</div>
                <div className="serviceBoxInfo">
                  <h3 className="serviceBoxTitle">{homeData.title}</h3>
                  <p className="serviceBoxPara">{homeData.para}</p>
                  <div className="serviceBoxLogos">
                    {
                      homeData.logos.map((logo,i)=>{
                        return(
                          <div className="logo" key={i+1}>
                            {logo}
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="homeSericeButtonWrapper">
        <Link to="/services"><button className="homeSericeButton"  type="button">Explore Services</button></Link>
      </div>
    </section>
  );
};

export default HomeServices;
