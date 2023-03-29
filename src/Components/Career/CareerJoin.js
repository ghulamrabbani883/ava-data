import React from "react";
import "./style.css";
import { careerJoinData } from "./careerData";
const CareerJoin = () => {
  return (
    <section className="careerJoin">
      <div className="careerJoinHeader">
        <h2 className="joinHeaderTitle">
          Why Join <span>Ava-Data?</span>
        </h2>
        <p className="joinHeaderPara">
          Ava-Data is actively seeking to connect with brilliant individuals
          that have an entrepreneurial mindset, a strong will to achieve, and
          the self-assurance to use innovative technology to transform the
          world. individuals that have an entrepreneurial mindset, a strong will
          to achieve, and the self-assurance to use innovative technology to
          transform the world.
        </p>
        <p className="joinHeaderPara">
          We are one of the best places to work. Ava-Data creates an atmosphere
          where you can grow your inner self, show your talents, get the best
          out of your own self. We believe in invention of new processes that
          ease your work. The work place at Ava-Data is very flexible.
        </p>
        <p className="joinHeaderPara">
          We are looking for some fresh talents who can add cultural values at
          Hyperlink InfoSystem, some one who has the same mission that is ours
          but also can bring diversity at the same time.
        </p>
      </div>
      <div className="careerJoinWrapper">
        {careerJoinData.map((data) => {
          return (
            <div className="careerJoinBenefit">
              <div className="careerJoinBenefitLeft">
                <figure className="joinBenefitImage">
                  <img
                    src={data.image}
                    alt={data.image}
                    width="100%"
                    height="100%"
                  />
                </figure>
              </div>
              <div className="careerJoinBenefitRight">
                <h2 className="careerJoinId">{data.id}</h2>
                <h3>{data.title}</h3>
                <p>{data.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CareerJoin;
