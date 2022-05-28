import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const handleSubmit = (event) => {
        event.preventDefault();
        const rating = event.target.rating.value;
        const review = event.target.review.value;

        const reviews = {
            name: user.displayName,
            rating,
            review
        }

        fetch('https://afternoon-meadow-48575.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Feedback Successfully Added !',
                    'Thank you for your feedback.We appreciate you because it helps us to improve our services.',
                    'success'
                )
            })

    }

    return (
        <div>
            <h2 className='text-5xl font-serif text-center mb-3'>Drop Feedback</h2>
            <p className='font-bold text-center text-xl m-6'>Share your experience with us by dropping your feedback.</p>
            <form onSubmit={handleSubmit} className='grid  grid-cols-1 gap-3 justify-items-center mt-2'>
                <input type="name" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="number" name='rating' placeholder="Ratings" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='review' placeholder="Your Feedback" className="input input-bordered w-full max-w-xs" required />
                <input type="submit" value="Submit" placeholder="Type here" className="btn btn-primary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddReview;