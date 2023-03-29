import React, { useState } from "react";
import { FAQData } from "./dedicatedData";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const DedicatedFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleIconClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <section className="dedicatedFAQ">
      <div className="FAQHeader">
        <h2 className="FAQTitle">Frequently Asked Questions</h2>
      </div>
      <div className="FAQListWrapper">
        {FAQData.map((data) => {
          return (
            <div className="FAQList" key={data.id}>
              <div className="FAQQuestion">
                <p>
                  {data.id}. {data.question}
                </p>
                {data.id !== activeIndex ? (
                  <AiOutlinePlus
                    className="FAQIcon"
                    size={16}
                    onClick={()=>handleIconClick(data.id)}
                  />
                ) : (
                  <AiOutlineMinus
                    className="FAQIcon"
                    size={16}
                    onClick={()=>handleIconClick(data.id)}
                  />
                )}
              </div>
              <p
                className={`FAQAnswer ${
                  data.id === activeIndex && "openFAQAnswer"
                }`}
              >
                {data.ans}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DedicatedFAQ;
