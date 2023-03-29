import React from "react";
import { DedicatedProcessData } from "./dedicatedData";

const DedicatedProcess = () => {
  return (
    <section className="dedicatedProcess">
      <div className="dedicatedProcessHeader">
        <h2 className="processHeaderTitle">Process We <span>Follow</span></h2>
      </div>
      <div className="dedicatedProcessWrapper">
        {DedicatedProcessData.map((data) => {
          return (
            <div className="processBox" key={data.id}>
              <div className="processBoxIcon">{data.icon}</div>
              <h3 className="processBoxTitle">{data.id}. {data.title}</h3>
              <p className="processBoxPara">{data.para}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DedicatedProcess;
