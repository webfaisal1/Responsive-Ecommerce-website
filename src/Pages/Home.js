import React, { Fragment } from 'react';
import ArrivalDiscount from '../Components/ArrivalDiscount';
import Banner from '../Components/Banner';
import BestSales from '../Components/BestSales';
import CategoriesDiscount from '../Components/CategoriesDiscount';
import LatestBlogs from '../Components/LatestBlogs';
import NewArrival from '../Components/NewArrival';
import NewsLetter from '../Components/NewsLetter';
import PopularCategories from '../Components/PopularCategories';
import Footer from '../Shared/Footer';

const Home = () => {
  return (
    <Fragment>
      <section className='container' >
        <Banner />
        <PopularCategories/>
        {/* <CategoriesDiscount/> */}
        <NewArrival/>
        <ArrivalDiscount/>
        <BestSales/>
        <LatestBlogs/>
        <NewsLetter/>
        <Footer/>
      </section>
    </Fragment>
  );
};

export default Home;