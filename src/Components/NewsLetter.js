import React, { Fragment } from 'react';

const NewsLetter = () => {
  return (
    <Fragment>
      <section className=" my-[100px] bg-[#FA541C] opacity-80 rounded-[6px] ">
        <div class="text-center ">
          <h1 className=" text-[48px] font-semibold text-[#FFFFFF] pt-[40px] ">
            Join our newsletter now!
          </h1>
          <h5 className="text-[24px] font-normal text-[#FFFFFF] ">
            Register now and get our latest updates and promos.
          </h5>

          <form class="pt-[50px] pb-[35px] ">
            <div class="relative  ">
              <input
                class=" w-[650px] outline-none rounded-[6px] bg-[#FAFAFA] p-4 text-[18px] text-[#A7A7A7] font-normal"
                id="email"
                type="email"
                placeholder="Enter your email"
              />

              <button
                class="absolute  right-[245px] rounded-[6px] bg-[#212B36] w-[130px] py-[16px]  text-[18px] font-semibold text-[#FFFFFF] "
                type="button"
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default NewsLetter;