import React from "react";
import { jobOpenings } from "./careerData";
import { Link } from "react-router-dom";
const CareerOpening = () => {
  let categories = ["Front-end Developer", "Backend Developer", "DevOps"];
  const Location = ["USA","UK","India","Germany","NewZeelan","Australia","Brazil","Vietnam"]
  return (
    <section className="careerOpening">
      <div className="openingHeader">
        <h2 className="openingHeaderTitle">Open Positions</h2>
        <p className="openingHeaderPara">
          An agile technology culture and work-life balance are the cornerstones
          of AVA-DATA's workplace culture.
        </p>
      </div>
      <div className="openingMain">
        <div className="openingFilter">
        <div className="categoryFilter">
            <h3 className="filterTitle">Search Jobs</h3>
            <div className="jobSearch">
              <input type="search" placeholder="Front-end" />
            </div>
          </div>
          <div className="categoryFilter">
            <h3 className="filterTitle">Category</h3>
            {categories.map((cat) => (
              <p className="filterList">{cat}</p>
            ))}
          </div>
          <div className="categoryFilter">
            <h3 className="filterTitle">Locations</h3>
            {Location.map((cat) => (
              <p className="filterList">{cat}</p>
            ))}
          </div>
        </div>
        <div className="openingListWrapper">
          {jobOpenings.map((job) => {
            return (
              <div className="openingList" key={job.id}>
                <div className="openingListLeft">{job.icon}</div>
                <div className="openingListRight">
                  <div className="jobListTitle">{job.title}</div>
                  <div className="jobListPara">{job.para}</div>
                  <div className="JobListButton">
                    <Link to="/contact">
                      <button type="button">Send CV</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerOpening;
