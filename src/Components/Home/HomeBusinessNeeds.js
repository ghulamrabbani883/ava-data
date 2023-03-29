import React from "react";
import { homeNeedsData } from "./Bannerdata";

const HomeBusinessNeeds = () => {
  return (
    <section className="homeBusinessNeeds">
      <h2 className="homeBusinessNeedsTitle1">
        Changes your <br /> business
      </h2>
      <h3 className="homeBusinessNeedsTitle2">
        Common needs For <br /> your business
      </h3>
      <div className="businessNeedsWrapper">
        {homeNeedsData.map((needData) => {
          return (
            <div className="buinessNeeds" key={needData.id}>
              <div className="businessNeedsIcon">
                <p>{needData.id}</p>
              </div>
              <div className="businessNeedsContent">
                <h4 className="businessContentTitle">{needData.title}</h4>
                <p className="businessContentPara">
                  {needData.para}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeBusinessNeeds;
