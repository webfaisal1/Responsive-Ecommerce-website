import React, { Fragment } from 'react';
import ArrivalDiscount from '../Components/ArrivalDiscount';
import Banner from '../Components/Banner';
import BestSales from '../Components/BestSales';
import LatestBlogs from '../Components/LatestBlogs';
import NewArrival from '../Components/NewArrival';
import PopularCategories from '../Components/PopularCategories';

const Home = () => {
  return (
    <Fragment>
      <section className='container' >
        <Banner />
        <PopularCategories/>
        <NewArrival/>
        <ArrivalDiscount/>
        <BestSales/>
        <LatestBlogs/>
      </section>
    </Fragment>
  );
};

export default Home;