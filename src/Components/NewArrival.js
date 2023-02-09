import React, { Fragment } from 'react';
import arrival1 from "../asset/images/arrival1.png";
import arrival2 from "../asset/images/arrival2.png";
import arrival3 from "../asset/images/arrival3.png";
import arrival4 from "../asset/images/arrival4.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";


// import required modules
import { Navigation } from "swiper";

const NewArrival = () => {
  return (
    <Fragment>
      <section className="my-[100px]">
        <h1 className="text-[48px] font-bold text-[#212B36] text-center ">
          New Arrival
        </h1>
        <h4 className=" text-[#48545E] font-normal text-[24px] text-center mb-[50px] ">
          Shop our new arrivals from popular brands
        </h4>

        <section className="py-[34px] px-[38px] border border-[#E9E9E9] ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                {" "}
                <div>
                  <img
                    class=" bg-[#6373813a] rounded-[6px] "
                    src={arrival1}
                    alt="avatar"
                  />
                </div>
                <div class="text-center">
                  <h1 class="text-[17px] font-bold text-[#383838] mt-[20px] mb-[6px] ">
                    Winter Quality Jacket
                  </h1>
                  <h5 class=" text-[#637381] text-[16px] font-normal ">
                    (390 Items)
                  </h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  class=" bg-[#6373813a] rounded-[6px] "
                  src={arrival2}
                  alt="avatar"
                />

                <div class="text-center">
                  <h1 class="text-[17px] font-bold text-[#383838] mt-[20px] mb-[6px] ">
                    Winter Quality Jacket
                  </h1>
                  <h5 class=" text-[#637381] text-[16px] font-normal ">
                    (390 Items)
                  </h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  class=" bg-[#6373813a] rounded-[6px] "
                  src={arrival3}
                  alt="avatar"
                />

                <div class="text-center">
                  <h1 class="text-[17px] font-bold text-[#383838] mt-[20px] mb-[6px] ">
                    Winter Quality Jacket
                  </h1>
                  <h5 class=" text-[#637381] text-[16px] font-normal ">
                    (390 Items)
                  </h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  class=" bg-[#6373813a] rounded-[6px] "
                  src={arrival1}
                  alt="avatar"
                />

                <div class="text-center">
                  <h1 class="text-[17px] font-bold text-[#383838] mt-[20px] mb-[6px] ">
                    Winter Quality Jacket
                  </h1>
                  <h5 class=" text-[#637381] text-[16px] font-normal ">
                    (390 Items)
                  </h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  class=" bg-[#6373813a] rounded-[6px] "
                  src={arrival4}
                  alt="avatar"
                />

                <div class="text-center">
                  <h1 class="text-[17px] font-bold text-[#383838] mt-[20px] mb-[6px] ">
                    Winter Quality Jacket
                  </h1>
                  <h5 class=" text-[#637381] text-[16px] font-normal ">
                    (390 Items)
                  </h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  class=" bg-[#6373813a] rounded-[6px] "
                  src={arrival2}
                  alt="avatar"
                />

                <div class="text-center">
                  <h1 class="text-[17px] font-bold text-[#383838] mt-[20px] mb-[6px] ">
                    Winter Quality Jacket
                  </h1>
                  <h5 class=" text-[#637381] text-[16px] font-normal ">
                    (390 Items)
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
    </Fragment>
  );
};

export default NewArrival;