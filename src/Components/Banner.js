import React, { Fragment } from 'react';
import banner from '../asset/images/banner.png'

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

// import required modules
import { Autoplay, Navigation } from "swiper";

const Banner = () => {
  return (
    <Fragment>
      <section className="h-[641px] w-full mt-[41px] mb-[100px] ">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper h-[641px]] mb-10"
        >
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "100%",
              }}
              className="bg-no-repeat bg-center bg-origin-padding w-full h-full "
            >
              <div className="pl-0 md:pl-16 w-full md:w-1/2 md:bg-transparent bg-[#e0e2ebad]  flex items-center md:items-start justify-center h-full flex-col ">
                <div>
                  <h1 className="text-md md:text-xl text-[#54626E] font-medium text-[24px] mt-[153px] ">
                    Top Trending Products
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#212B36] font-bold text-[64px] mt-[15px] hidden md:block">
                    Best Modern Winter Clothes Collection
                  </h1>
                </div>
                <div className="mt-[45px] mb-[173px] ">
                  <button className=" bg-[#FA541C] rounded-[7px] text-white font-medium text-[16px] py-[16px] px-[38px] ">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "100%",
              }}
              className="bg-no-repeat bg-center bg-origin-padding w-full h-full "
            >
              <div className="pl-0 md:pl-16 w-full md:w-1/2 md:bg-transparent bg-[#e0e2ebad]  flex items-center md:items-start justify-center h-full flex-col ">
                <div>
                  <h1 className="text-md md:text-xl text-[#54626E] font-medium text-[24px] mt-[153px] ">
                    Top Trending Products
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#212B36] font-bold text-[64px] mt-[15px] hidden md:block">
                    Best Modern Winter Clothes Collection
                  </h1>
                </div>
                <div className="mt-[45px] mb-[173px] ">
                  <button className=" bg-[#FA541C] rounded-[7px] text-white font-medium text-[16px] py-[16px] px-[38px] ">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "100%",
              }}
              className="bg-no-repeat bg-center bg-origin-padding w-full h-full "
            >
              <div className="pl-0 md:pl-16 w-full md:w-1/2 md:bg-transparent bg-[#e0e2ebad]  flex items-center md:items-start justify-center h-full flex-col ">
                <div>
                  <h1 className="text-md md:text-xl text-[#54626E] font-medium text-[24px] mt-[153px] ">
                    Top Trending Products
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#212B36] font-bold text-[64px] mt-[15px] hidden md:block">
                    Best Modern Winter Clothes Collection
                  </h1>
                </div>
                <div className="mt-[45px] mb-[173px] ">
                  <button className=" bg-[#FA541C] rounded-[7px] text-white font-medium text-[16px] py-[16px] px-[38px] ">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </Fragment>
  );
};

export default Banner;