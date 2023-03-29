import React from "react";
import "./style.css";
import { TalentData } from "./dedicatedData";
const DedicatedTalent = () => {
  return (
    <section className="dedicatedTalent">
      <div className="talentHeader">
        <h2 className="talentHeaderTitle">Leverage World-Class <span>Talent</span></h2>
        <p className="talentHeaderPara">
          We have a team of experts who have a pool of expertise in their
          respective fields. Their approach is out-of-box, dynamic, and unique
          in the market.
        </p>
      </div>
      <div className="talentWrapper">
        {TalentData.map((data) => {
          return (
            <div className="talentBox" key={data.id}>
              <div className="talentBoxIcon">{data.icon}</div>
              <h3 className="talentBoxTitle">{data.title}</h3>
              <p className="talentBoxPara">{data.para}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DedicatedTalent;
