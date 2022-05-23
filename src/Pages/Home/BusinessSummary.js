import React from 'react';
import { AiTwotoneFlag } from 'react-icons/ai';
import { FaTruckMoving } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiStarFormation } from 'react-icons/gi';

const BusinessSummary = () => {
    return (
        <div className='my-10 p-5'>
            <h1 className=' font-bold text-5xl text-center uppercase'>Our Customers from Worldwide Trust us</h1>
            <h4 className='text-lg text-pink-900 font-extrabold text-center mt-3 mb-10'>We constantly try to meet our clients expectation</h4>
            <div className='flex grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center mt-5'>
                <div className='justify-items-center'>
                    <div className='justify-items-center'>
                    <AiTwotoneFlag size={70}></AiTwotoneFlag>
                    </div>
                    <p className='text-5xl font-bold'>90+</p>
                    <p className='text-lg font-semibold'>Countries</p>
                </div>
                <div className='justify-items-center'>
                   <div>
                   <BsFillPeopleFill size={70}></BsFillPeopleFill>
                   </div>
                    <p className='text-5xl font-bold'>900+</p>
                    <p className='text-lg font-semibold'>Happy Customers</p>
                </div>
                <div className='justify-items-center'>
                   <div>
                    <FaTruckMoving size={90}></FaTruckMoving>
                    </div>
                    <p className='text-5xl font-bold'>1000+</p>
                    <p className='text-lg font-semibold '>Deliveries Worldwide</p>
                </div>
                <div className='justify-items-center'>
                    <div>
                    <GiStarFormation size={70}></GiStarFormation>
                    </div>
                    <p className='text-5xl font-bold'>400+</p>
                    <p className='text-lg font-semibold'>Feedbacks</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;