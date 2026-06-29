"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

export const Slider = () => {
  const [bigScreen,setBigScreen]= useState(false);
  useEffect(()=>{
		if (window.innerWidth > 768) {
			setBigScreen(true);
		}
		if (window.innerWidth <= 768) {
			setBigScreen(false);
		}
	},[])
  
  const slides = [
    // {
    //   image: "/media/main-slider/side1.jpeg",
    // },
    {
      image: "/media/main-slider/slide2.jpeg",
    },
    {
      image: "/media/main-slider/slide3.jpeg",
    },
    {
      image: "/media/main-slider/slide4.jpeg",
    },
    {
      image: "/media/main-slider/slide5.jpeg",
    }, 
    {
      image: "/media/main-slider/slide6.jpeg",
    },
  ];

  return (
    <div id="owl-main-slider" style={{ height:bigScreen?"600px":"200px"}} className="owl-carousel enable-owl-carousel owl-theme wow fadeInLeft" data-wow-delay="0.3s">
      
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
              style={{ backgroundImage: `url(${slide.image})`, height:bigScreen?"600px":"200px" }}
            >
              <div className="container-fluid">
                <div className="slider-content col-md-7 col-lg-7">
                  
                  {/* <div style={{ display: "table" }}>
                    
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

                   

                  </div>

                 */}

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};