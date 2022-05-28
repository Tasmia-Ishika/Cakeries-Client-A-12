import React from 'react';
import useReview from '../../hooks/useReview';
import Reviews from './Reviews';

const AllReview = () => {
    const [reviews] = useReview();
    return ( 
        <div>
            <div>
                <h1 className='text-center text-4xl font-serif m-8'>Our Client's Feedback</h1>
            </div>
            <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </div>
    );
};

export default AllReview;