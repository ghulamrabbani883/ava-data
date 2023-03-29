import React from "react";
import "./style.css";
import { careerPerksData } from "./careerData";

const CareerPerks = () => {
  return (
    <section className="careerPerks">
      <div className="perksHeader">
        <h2 className="perksHeaderTitle">Perks To Work  <span>With Ava-Data</span></h2>
      </div>
      <div className="perksListWrapper">
        {careerPerksData.map((perk) => {
          return (
            <div className="perkListBox" key={perk.id}>
              <div className="perkListBoxEffect"></div>
              <div className="perkListIcon">{perk.icon}</div>
              <h3 className="perkListTitle">{perk.id}. {perk.title}</h3>
              <p className="perkListPara">{perk.para}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CareerPerks;
