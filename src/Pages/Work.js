import React from "react";
import illustration from "../images/banner8.svg";
import { Helmet } from "react-helmet";
import { workData } from './ServiceAndTechnologyData';

const Work = () => {
  return (
    <main className="work">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ava-Data/Work</title>
        <link rel="canonical" href="http://localhost:3000/our-work" />
      </Helmet>
      <section className="ourWorkHeader">
        <div className="ourWorkLeft">
          <h2 className="ourWorkTitle">Our Work</h2>
          <p className="ourWorkPara">
            We support our through constant endeavor in improving its quality to
            build a robust and efficient IT industries with partnering that
            helps in achieving business goals and growth of business.
          </p>
        </div>
        <div className="ourWorkRight">
          <figure className="ourWorkImageContainer">
            <img
              src={illustration}
              alt={illustration}
              width="100%"
              height="80%"
            />
          </figure>
        </div>
      </section>
      <section className="workContent">
        <div className="workContentHeader">
          <h2 className="workContentHeaderTitle">
            Our Fresh <span>Works</span>
          </h2>
        </div>
        <div className="workContentWrapper">
          {workData.map((work) => {
            return (
              <div className="workContentBox" key={work.id}>
                <figure className="workImageContainer">
                  <img className="workImage" src={work.image} alt={work.image} />
                </figure>
                <div className="workInfo">
                  <h3 className="workInfoTitle">{work.title}</h3>
                    <p><span>Type:</span> {work.category}</p>
                    <p><span>Technology:</span> {work.tech}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Work;
