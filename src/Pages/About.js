import React, { Fragment } from "react";
import WhoWeAre from "./../Components/About/WhoWeAre";
import VisionMission from "../Components/About/VisionMission";
import WhatWeDo from "./../Components/About/WhatWeDo";
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <Fragment>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Ava-Data/About</title>
                <link rel="canonical" href="http://localhost:3000/about" />
            </Helmet>
      <section className="about">
        <WhoWeAre />
      </section>
      <VisionMission />
      <section className="about">
        <WhatWeDo />
      </section>
    </Fragment>
  );
};

export default About;
