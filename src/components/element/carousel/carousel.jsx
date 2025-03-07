import React from "react";
// Import Swiper React components
import {Swiper} from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";

// import required modules

export default function Carousel({
   slidesPerView,
   pagination,
   navigation,
   autoPlay,
   modules,
   spaceBetween,
   sizeResponsive,
   delay,
   loop,
   freeMode,
   skipSlide,
   className,
   children,
}) {
   return (
      <>
         <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            loop={loop || false}
            slidesPerGroup={skipSlide || 1}
            freeMode={freeMode}
            pagination={
               pagination && {
                  clickable: true,
               }
            }
            autoplay={
               autoPlay && {
                  delay: delay || 2500,
               }
            }
            navigation={
               navigation && {
                  disabledClass: "!hidden",
               }
            }
            modules={modules || []}
            breakpoints={sizeResponsive || null}
            className={`${className}`}
         >
            {children}
         </Swiper>
      </>
   );
}
