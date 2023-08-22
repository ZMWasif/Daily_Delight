import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Templates.css";
import { Autoplay } from "swiper";
import banners from "../Images/Banner_Images";
import "swiper/css/autoplay";

const Templates = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="max-w-7xl ">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          loop={true}
          centeredSlides={true}
          speed={10000}
          autoplay={{ delay: 1000 }}
          /* modules={[Autoplay]} */
        >
          {/* 
          <SwiperSlide>
            <div className="h-96 flex">
              <div className={`card3`}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, sunt?
                </p>
              </div>
            </div>
          </SwiperSlide> */}
          {banners.map((banner) => {
            return (
              <SwiperSlide className="gallery-card" key={banner}>
                <img src={banner} alt="" />
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default Templates;
