import React from "react";
import { DedicatedTeamsData } from "./dedicatedData";

const DedicatedTeams = () => {
  return (
    <section className="dedicatedTalent">
      <div className="talentHeader">
        <h2 className="talentHeaderTitle">
          Create Outstanding <span>On-Demand Teams</span>
        </h2>
        <p className="talentHeaderPara">
          Get the Team or Team Member you want for your project.
        </p>
      </div>
      <div className="talentWrapper">
        {DedicatedTeamsData.map((data) => {
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

export default DedicatedTeams;
