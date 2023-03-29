import React from "react";
import { technologyRight } from "./ServiceAndTechnologyData";
import { Helmet } from "react-helmet";
const Technology = () => {
  const image =
    "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80";
  return (
    <main className="services">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ava-Data/Technology</title>
        <link rel="canonical" href="http://localhost:3000/technology" />
      </Helmet>
      <div className="serviceLeft">
        <div className="technologyTop">
          <img
            src={image}
            alt={image}
            width="80px"
            height="80px"
            style={{ "border-radius": "50%", "margin-left": "-20px" }}
          />
          <img
            src={image}
            alt={image}
            width="80px"
            height="80px"
            style={{ "border-radius": "50%", "margin-left": "-20px" }}
          />
          <img
            src={image}
            alt={image}
            width="80px"
            height="80px"
            style={{ "border-radius": "50%", "margin-left": "-20px" }}
          />
          <img
            src={image}
            alt={image}
            width="80px"
            height="80px"
            style={{ "border-radius": "50%", "margin-left": "-20px" }}
          />
        </div>
        <div className="technologyBottom" style={{"margin-top":"30px"}}>
          <h2 style={{"margin-bottom":"10px"}}> Hire Team</h2>
          <p>Create your own agile squad with experienced members just like your local team</p>
        </div>
      </div>
      <div className="serviceRight">
        {technologyRight.map((rightData) => {
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
    </main>
  );
};

export default Technology;
