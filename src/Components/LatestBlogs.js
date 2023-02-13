import React, { Fragment } from "react";
import { LatestBlogsData } from "../Data/data";

const LatestBlogs = () => {
  return (
    <Fragment>
      <section className="my-[100px] ">
        <h1 className="text-[48px] font-bold text-[#212B36] text-center ">
          Latest Blogs
        </h1>

        <div className="grid grid-cols-3 gap-[32px] mt-[50px] ">
          {LatestBlogsData.map((product, i) => (
            <div key={product.id}>
              
                <img className="rounded-[6px] " src={product.img} alt="" />
              
              <div className="text-center mt-[20px] ">
                <h2 className=" text-[20px] font-semibold text-[#212B36]  ">
                  {product.name}
                </h2>
                <h6 className="text-[#A7A7A7] mt-[8px] text-[16px] font-normal ">
                  By <span className="text-[#F46B5B]  ">Admin</span>, 22 Nov
                  2022
                </h6>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default LatestBlogs;
