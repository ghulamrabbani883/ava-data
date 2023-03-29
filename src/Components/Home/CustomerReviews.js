import React, { useRef } from "react";
import { customerReviewsData } from "./Bannerdata";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import { Pagination } from "swiper";

const CustomerReviews = () => {
  const ref = useRef(0);
  const handleReviewsFlow = (amount) => {
    ref.current.scrollLeft += amount;
  };
  return (
    <section className="customerReviews">
      <div className="customerReviewHeader">
        <h2 className="reviewsTitle">
          What our Customer has
          <br /> <span>to say About Us</span>
        </h2>
      </div>
      <div className="reviewsWrapper">
        {customerReviewsData.map((review) => {
          return (
            <div className="reviewsBox">
              <div className="reviewsBoxInner">
                <div className="reviewsPara">
                  <p>{review.para}</p>
                </div>
                <div className="reviewsBoxInfo">
                  <figure>
                    <img
                      className="reviewsInfoImage"
                      src={review.image}
                      alt={review.name}
                    />
                  </figure>
                  <div className="reviewsInfoContent">
                    <h4>{review.name}</h4>
                    <h3>{review.title}</h3>
                    <p>{review.company}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="reviewsButton">
        <button type="button">Explore More Testimonials</button>
      </div>
    </section>
  );
};

export default CustomerReviews;
