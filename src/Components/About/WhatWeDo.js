import React from "react";
import Illustration from '../../images/banner7.svg'

const WhatWeDo = () => {
  return (
    <section className="whatWeDo">
      <div className="whatWeDoLeft">
        <h2 className="whatWeLeftTitle">What we do?</h2>
        <p className="whatWeLeftPara">
        From the best mobile app development to custom web development and Blockchain services, Ava-Data specializes in several areas of software technology and digital marketing. We deliver the best IT services in India tailored to your unique business requirements. No idea is out of reach when you collaborate with us. If you can conceptualize it, we can create it! We give substance to your imagination and add value to your business.
        </p>
      </div>
      <div className="whatWeDoRight">
        <figure className="whatWeImageContainer">
          <img
            src={Illustration}
            alt={Illustration}
            width="100%"
            height="100%"
          />
        </figure>
      </div>
    </section>
  );
};

export default WhatWeDo;
