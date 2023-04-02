import React from "react";
import "./style.css";
import banner from "../../images/dedicateBannerImage.jpg";
import { Link } from "react-router-dom";

const DedicatedBanner = () => {
  return (
    <section className="dedicatedBanner">
      <div className="dedicatedLeftBanner">
        <h2 className="dedicatedBannerTitle">Hire Dedicated Developers</h2>
        <p className="dedicatedBannerPara">
          Hire Dedicated Developers for your dream app idea from our expert app
          developers at quite competitive rates in the market.
        </p>
        <Link to="/contact"><button type="button">Get a Qoute </button></Link>
      </div>
      <div className="dedicatedRightBanner">
        <figure>
          <img src={banner} alt={banner} />
        </figure>
      </div>
    </section>
  );
};

export default DedicatedBanner;
