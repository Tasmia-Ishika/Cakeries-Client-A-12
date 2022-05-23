import React from 'react';
import appointment from '../../assets/background.jpg';
import Swal from 'sweetalert2';

const Form = () => {
    const handleSubscribe = event => {
        event.preventDefault()
        Swal.fire(
            'Subscription Done!',
            'You will receive your newsletter from following month.',
            'success'
        )
    }
    return (
        <form style={{
            background: `url(${appointment})`
        }} className='w-100 my-28'>
            <div className='p-10'>
                <h1 className='text-rose-900 font-extrabold text-3xl text-center'>Contact Us</h1>
                <h2 className='font-semibold text-rose-900  text-5xl text-center mb-5'>Stay connected with us</h2>
                <div className='text-center'>
                    <input type="email" placeholder="Email" className="input input-bordered input-md w-full max-w-xs mb-5" />
                    <br />
                    <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs mb-5" />
                    <br />
                    <textarea className="textarea textarea-accent input-md w-full max-w-xs mb-5" placeholder="Your Message"></textarea>
                    <br />
                    <button onClick={handleSubscribe} class="btn btn-primary font-bold">Subscribe</button>
                </div>

            </div>
        </form>
    );
};

export default Form;