import React from 'react';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Form from './Form';
import './HomeDisplay.css';
import Products from './Products';
import Testimonial from './Testimonial';



const HomeDisplay = () => {
    return (
        <div> 
           <Banner></Banner>
           <Products></Products>
           <BusinessSummary></BusinessSummary>
           <Testimonial></Testimonial>
           <Form></Form>
        </div>
    );
};

export default HomeDisplay;