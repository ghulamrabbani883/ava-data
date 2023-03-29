import React from "react";
import "./style.css";
const DedicatedPricing = () => {
  return (
    <section className="dedicatedPricing">
      <div className="dedicatedPricingHeader">
        <h2 className="dedicatedPricingTitle">Pricing <span>Plans</span></h2>
        <p className="dedicatedPricingPara">
          Hire Dedicated resources from Hyperlink InfoSystem Starts from,
        </p>
      </div>
      <div className="dedicatedPricingWrapper">
        <div className="dedicatedPricingBox">
          <h3 className="dedicatedPricingType">Hourly</h3>
          <p className="dedicatedPricingInfo">
            For short-term project or need a specialized service, hire our
            skilled Dedicated app developers on an hourly basis.
          </p>
          <p className="dedicatedPrice"><span>$ 25</span>/ hour</p>
          <button className="pricingButton" type="button">
            Hire Now
          </button>
        </div>
        <div className="dedicatedPricingBox">
          <h3 className="dedicatedPricingType">Monthly</h3>
          <p className="dedicatedPricingInfo">
            For rather precise, limited budget, less time and long-term
            partnership, consider a source of Dedicated app developers on a
            monthly basis.
          </p>
          <p className="dedicatedPrice"><span>$ 3000</span> / month</p>
          <button className="pricingButton" type="button">
            Hire Now
          </button>
        </div>
        <div className="dedicatedPricingBox">
          <h3 className="dedicatedPricingType">Quarterly</h3>
          <p className="dedicatedPricingInfo">
            If you need constant support or guidance and expecting your target
            audience and project requirements may change then hire Dedicated app
            developers on a quarterly basis.
          </p>
          <p className="dedicatedPrice"><span>$ 8000</span> / Quarter</p>
          <button className="pricingButton" type="button">
            Hire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default DedicatedPricing;
