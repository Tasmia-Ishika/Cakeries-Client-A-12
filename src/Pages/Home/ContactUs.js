import React from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const handleContact = event => {
      
        Swal.fire(
            'Thank you !!',
            'We got your queries. We will respond you via mail very soon.',
            'success'
        )
    } 
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold m-8">Contact Us</h1>
                    <h1 class="text-xl font-bold m-8">Let us know your message. Please fill the form below if you have any queries!!</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea type="text" placeholder="Your Message" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button onClick={handleContact} class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;