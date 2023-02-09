import React, { Fragment } from "react";
import catagories1 from '../asset/images/catagories1.png'
import catagories2 from '../asset/images/catagories2.png'
import catagories3 from '../asset/images/catagories3.png'
import catagories4 from '../asset/images/catagories4.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";


// import required modules
import { Navigation } from "swiper";

const PopularCategories = () => {
  return (
    <Fragment>
      <h1 className="text-[64px] mt-[100px] font-bold text-[#212B36] text-center ">
        Popular Categories
      </h1>
      <h4 className=" text-[#48545E] font-normal text-[24px] text-center mb-[50px] ">
        Shop the product of your choice from the popular category
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
                  src={catagories1}
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
                src={catagories2}
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
                src={catagories3}
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
                src={catagories4}
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
                src={catagories4}
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
                src={catagories2}
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
    </Fragment>
  );
};

export default PopularCategories;
