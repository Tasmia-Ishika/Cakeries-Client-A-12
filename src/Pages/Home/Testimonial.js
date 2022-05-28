import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Reviews from './Reviews';

const Testimonial = () => {
    const [reviews] = useReview();
    const navigate = useNavigate();
    const showAllReviews = () => {
        navigate('/allReview')
    }


    return (
        <section >
            <div className='m-8'>
                <div>
                    <h4 className='text-2xl text-center font-serif '>Feedbacks</h4>
                    <h1 className='text-4xl text-center font-semibold'>What our Customer says</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 m-6 p-7' >
                {
                    [...reviews].reverse().slice(0, 4).map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
            <div className='text-center'>
                <button onClick={showAllReviews} className='btn btn-primary '>View more reviews</button>
            </div>
        </section>
    );
};

export default Testimonial;