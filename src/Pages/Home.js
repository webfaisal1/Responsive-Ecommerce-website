import React, { Fragment } from 'react';
import Banner from '../Components/Banner';
import PopularCategories from '../Components/PopularCategories';

const Home = () => {
  return (
    <Fragment>
      <section className='container' >
        <Banner />
        <PopularCategories/>
      </section>
    </Fragment>
  );
};

export default Home;