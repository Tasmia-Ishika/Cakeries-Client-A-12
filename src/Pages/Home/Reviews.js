import React from 'react';
import { AiFillStar} from 'react-icons/ai';

const Reviews = ({ review }) => {

    return (
        <div className="card lg:max-w-lg bg-neutral text-neutral-content bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <div>
                            <div>
                                <p className='font-bold text-lg' style={{color: "goldenrod"}}>Ratings: {review.ratings}<AiFillStar></AiFillStar></p>
                           </div>
                        </div>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;