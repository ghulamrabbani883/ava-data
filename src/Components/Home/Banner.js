import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { bannerData } from "./Bannerdata";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="banner"
    >
      {bannerData.map((banner,id) => {
        return (
          <SwiperSlide key={id+1}>
            <div className="slide">
              <h2 className="slideTitle">{banner.title}</h2>
              <p className="slidePara">{banner.para}</p>
              <Link to={banner.link}>
                <button className="slideButton" type="button">
                  <p>Lets Develope </p>
                  <AiOutlineArrowRight className="slideButtonArrow" />{" "}
                </button>
              </Link>
              <figure>
                <img className="slideImage"
                  src={banner.illustration}
                  alt={banner.illustration}
                />
              </figure>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;
