import React from "react";
import "./style.css";
import Illustration from '../../images/banner6.svg'
import { AiOutlineArrowRight } from "react-icons/ai";

const WhoWeAre = () => {
  return (
    <section className="whoWe">
      <div className="whoWeLeft">
        <figure className="whoWeImageContainer">
            <img src={Illustration} alt={Illustration} width="100%" height="100%" />
        </figure>
      </div>
      <div className="whoWeRight">
        <h2 className="whoWeRightTitle">Who are we?</h2>
        <p className="whoWeRightPara">We are a pack of innovators, web developers, software engineers, marketers, and tech enthusiasts who convert your ideas into tangible business ventures. We are everything you need to create world-class software solutions — from full-stack development to cloud engineering. We are the best engineering partners for your most complicated business challenges. We think of ourselves as a transformation machine that processes an idea and converts it into a tangible digital solution perfected for your target market.</p>
        <button className="whoWeRightButton" type="button">
            <p>Inquiry now</p>
            <AiOutlineArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default WhoWeAre;
