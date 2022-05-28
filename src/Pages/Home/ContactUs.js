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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold m-8">Contact Us</h1>
                    <h1 className="text-xl font-bold m-8">Let us know your message. Please fill the form below if you have any queries!!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="text" placeholder="Your Message" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleContact} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;