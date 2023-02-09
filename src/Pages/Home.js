import React, { Fragment } from 'react';
import Banner from '../Components/Banner';
import BestSales from '../Components/BestSales';
import NewArrival from '../Components/NewArrival';
import PopularCategories from '../Components/PopularCategories';

const Home = () => {
  return (
    <Fragment>
      <section className='container' >
        <Banner />
        <PopularCategories/>
        <NewArrival/>
        <BestSales/>
      </section>
    </Fragment>
  );
};

export default Home;