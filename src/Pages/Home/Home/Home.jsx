import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';
import FeaturedSection from '../FeaturedSection/FeaturedSection';
import Testimonial from '../Testimonial/Testimonial';
import ReactHelmet from '../../../Components/ReactHelmet/ReactHelmet';

const Home = () => {
    return (
        <div>
            <ReactHelmet title={'Home'}/>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <FeaturedSection/>
            <Testimonial/>
        </div>
    );
};

export default Home;