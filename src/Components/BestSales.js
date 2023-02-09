import React, { Fragment } from "react";
import bestSell1 from "../asset/images/bestSels1.png";
import bestSell2 from "../asset/images/bestSels2.png";
import bestSell3 from "../asset/images/bestSels3.png";
import bestSell4 from "../asset/images/bestSels4.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

// import required modules
import { Navigation } from "swiper";

const BestSales = () => {
  return (
    <Fragment>
      <section className="my-[100px]">
        <h1 className="text-[48px] font-bold text-[#212B36] text-center ">
          Best Sales
        </h1>
        <h4 className=" text-[#48545E] font-normal text-[24px] text-center mb-[50px] ">
          Shop the product of your choice from the best sales
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
                    class="  rounded-[6px] "
                    src={bestSell1}
                    alt="avatar"
                  />
                </div>
                <h1 class="text-[18px] font-bold text-[#383838] mt-[14px] ">
                  Jeans Jacket
                </h1>
                <div className="flex items-center justify-between ">
                  <span class=" text-[#FFC700] space-x-1 ">
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star-half"></i>
                  </span>
                  <h1 className="text-[#FA541C] text-[18px] font-semibold ">
                    {" "}
                    $270.00
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                {" "}
                <div>
                  <img
                    class="  rounded-[6px] "
                    src={bestSell2}
                    alt="avatar"
                  />
                </div>
                <h1 class="text-[18px] font-bold text-[#383838] mt-[14px] ">
                  Jeans Jacket
                </h1>
                <div className="flex items-center justify-between ">
                  <span class=" text-[#FFC700] space-x-1 ">
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star-half"></i>
                  </span>
                  <h1 className="text-[#FA541C] text-[18px] font-semibold ">
                    {" "}
                    $270.00
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                {" "}
                <div>
                  <img
                    class="  rounded-[6px] "
                    src={bestSell3}
                    alt="avatar"
                  />
                </div>
                <h1 class="text-[18px] font-bold text-[#383838] mt-[14px] ">
                  Jeans Jacket
                </h1>
                <div className="flex items-center justify-between ">
                  <span class=" text-[#FFC700] space-x-1 ">
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star-half"></i>
                  </span>
                  <h1 className="text-[#FA541C] text-[18px] font-semibold ">
                    {" "}
                    $270.00
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                {" "}
                <div>
                  <img
                    class="  rounded-[6px] "
                    src={bestSell4}
                    alt="avatar"
                  />
                </div>
                <h1 class="text-[18px] font-bold text-[#383838] mt-[14px] ">
                  Jeans Jacket
                </h1>
                <div className="flex items-center justify-between ">
                  <span class=" text-[#FFC700] space-x-1 ">
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star-half"></i>
                  </span>
                  <h1 className="text-[#FA541C] text-[18px] font-semibold ">
                    {" "}
                    $270.00
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                {" "}
                <div>
                  <img
                    class="  rounded-[6px] "
                    src={bestSell3}
                    alt="avatar"
                  />
                </div>
                <h1 class="text-[18px] font-bold text-[#383838] mt-[14px] ">
                  Jeans Jacket
                </h1>
                <div className="flex items-center justify-between ">
                  <span class=" text-[#FFC700] space-x-1 ">
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star-half"></i>
                  </span>
                  <h1 className="text-[#FA541C] text-[18px] font-semibold ">
                    {" "}
                    $270.00
                  </h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                {" "}
                <div>
                  <img
                    class="  rounded-[6px] "
                    src={bestSell1}
                    alt="avatar"
                  />
                </div>
                <h1 class="text-[18px] font-bold text-[#383838] mt-[14px] ">
                  Jeans Jacket
                </h1>
                <div className="flex items-center justify-between ">
                  <span class=" text-[#FFC700] space-x-1 ">
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star" aria-hidden="true"></i>
                    <i  class=" fa fa-star-half"></i>
                  </span>
                  <h1 className="text-[#FA541C] text-[18px] font-semibold ">
                    {" "}
                    $270.00
                  </h1>
                </div>
              </div>
            </SwiperSlide>
 


         
          </Swiper>
        </section>
      </section>
    </Fragment>
  );
};

export default BestSales;
