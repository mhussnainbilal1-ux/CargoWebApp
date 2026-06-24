"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const Slider = () => {
  const slides = [
    {
      image: "/media/main-slider/1.jpg",
      title: "LARGE NUMBER OF FREIGHT WAYS MAKES US POWERFUL",
    },
    {
      image: "/media/main-slider/2.jpg",
      title: "LARGE NUMBER OF FREIGHT WAYS MAKES US POWERFUL",
    },
  ];

  return (
    <div id="owl-main-slider" className="owl-carousel enable-owl-carousel owl-theme">
      
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        autoplay={{ delay: 4000 }}
        speed={1200}  
        loop
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="item"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="container-fluid">
                <div className="slider-content col-md-6 col-lg-6">
                  
                  <div style={{ display: "table" }}>
                    
                    <div
                      style={{
                        display: "table-cell",
                        width: "100px",
                        verticalAlign: "top",
                      }}
                    >
                      <a className="prev">
                        <i className="fa fa-angle-left"></i>
                      </a>
                      <a className="next">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>

                    <div style={{ display: "table-cell" }}>
                      <h1>{slide.title}</h1>
                    </div>

                  </div>

                  <p>
                    Nunc accumsan metus quis metus. Sed luctus. Mauris eu enim
                    quisque dignissim nequesudm consectetuer dapibus wn eu leo
                    integer varius erat.
                    <br />
                    <a className="btn btn-success" href="#">
                      LEARN MORE
                    </a>
                  </p>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};