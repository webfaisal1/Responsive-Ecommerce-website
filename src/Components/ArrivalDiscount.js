import React, { Fragment } from "react";
import bg1 from "../asset/images/arrivalbg1.png";
import bg2 from "../asset/images/arrivalbg2.png";

const ArrivalDiscount = () => {
  return (
    <Fragment>
      <section className="flex items-center gap-[35px] ">
        <div
          class="bg-cover bg-center bg-no-repeat h-full w-full"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "100%",
          }}
        >
          <div className=" w-[235px] rounded-[8px] pl-[11px] my-[105px]  bg-white opacity-[75%] ml-[20px] ">
            <h1 className="text-[20px] text-black font-semibold ">
              10% Discount on
            </h1>

            <h1 className=" font-semibold text-[36px] text-[#212B36] ">
              Quality Top with Skirt
            </h1>

            <div className=" py-[20px] ">
              <button className=" bg-[#FA541C] rounded-[6px] text-white font-normal text-[16px] py-[10px] px-[20px] ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div
          class="bg-cover bg-center bg-no-repeat h-full w-full"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "100%",
          }}
        >
          <div className=" w-[235px] rounded-[8px] pl-[11px] my-[105px]  bg-white opacity-[75%] ml-[20px] ">
            <h1 className="text-[20px] text-black font-semibold ">
              15% Discount on
            </h1>

            <h1 className=" font-semibold text-[36px] text-[#212B36] ">
              Winter Wool Sweater
            </h1>

            <div className=" py-[20px] ">
              <button className=" bg-[#FA541C] rounded-[6px] text-white font-normal text-[16px] py-[10px] px-[20px] ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ArrivalDiscount;
