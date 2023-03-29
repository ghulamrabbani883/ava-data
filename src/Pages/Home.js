import React from "react";
import Banner from "../Components/Home/Banner";
import "./style.css";
import HomeServices from "../Components/Home/HomeServices";
import HomeBusinessNeeds from "../Components/Home/HomeBusinessNeeds";
import CustomerReviews from "../Components/Home/CustomerReviews";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ava-Data</title>
        <link rel="canonical" href="http://localhost:3000" />
      </Helmet>
      <section className="bannerContainer">
        <Banner />
        <HomeServices />
      </section>
      <section className="otherContainer">
        <HomeBusinessNeeds />
        <CustomerReviews />
      </section>
      {/* <section className="bannerContainer">
      </section> */}
    </main>
  );
};

export default Home;
