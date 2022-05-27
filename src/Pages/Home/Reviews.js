import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Reviews = ({ review }) => {
    console.log(review);
     

    return (
        <div className="card lg:max-w-lg bg-neutral text-neutral-content bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex items-center">
                    <div>
                        <h4 className='text-2xl font-serif'>{review.name}</h4>
                        <p className='font-semibold'>{review.review}</p>
                        <div>
                            <p className='font-serif'>Ratings:  <Rating
                                initialRating={review.rating}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                                readonly
                            ></Rating></p>
                        </div>
                     
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviews;