import React from 'react';
import user1 from '../../assets/users/user1.webp';
import user2 from '../../assets/users/user2.webp';
import user3 from '../../assets/users/user3.webp';
import user4 from '../../assets/users/user4.webp';
import Reviews from './Reviews';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Henry Parkinson',
            review: 'Very satisfied with the service. They provide best quality with best range. Highly Recommended',
            ratings: '5.0',
            img: user1,
            location: 'San Diego',
        },
        {
            _id: 2,
            name: 'Alison Stewart',
            review: 'Fast delivery, keep it up.',
            ratings: '4.5',
            img: user2,
            location: 'France',
        },
        {
            _id: 3,
            name: 'Herman Simon',
            review: 'Reasonable price and good stuff they provide.. Will recommend them.',
            ratings: '3.7',
            img: user3,
            location: 'Mexico',
        },
        {
            _id: 4,
            name: 'Sara Ibrahim',
            review: 'I loved the items they sent. Every item was perfect. Delivery was also fast.',
            ratings: '4.3',
            img: user4,
            location: 'Saudi Arabia',
        },
    ]
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
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;