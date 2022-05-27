import React from 'react';
import Footer from '../Shared/Footer';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ExtraSection from './ExtraSection';
import Form from './Form';
import './HomeDisplay.css';
import Products from './Products';
import Testimonial from './Testimonial';



const HomeDisplay = () => {
    return (
        <div className='products-container'> 
           <Banner/>
           <ExtraSection/>
           <Products/>
           <BusinessSummary/>
           <Testimonial/>
           <Form/>
           <Footer/>
        </div>
    );
};

export default HomeDisplay;