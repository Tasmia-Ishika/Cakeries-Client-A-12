import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/banner.jpg';

const ExtraSection = () => {
    return (
        <div className="hero min-h-screen mb-0 p-3">
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold mt-2">We Help You To Create Stories of Cookies, Cakes and Doughnuts... </h1>
                    <p className="py-6 text-lg">To ensure a proper baking we provide every tool you need. In order to bake perfectly you must choose tools which are truly baking friendly.We keep things from worldwide only to provide you the best.</p>
                <Link to={'/contact'}>
                <button className="btn btn-primary font-bold">Contact Us</button>
                </Link>   
                    
                </div>
            </div>
            
        </div>
       
    </div>

    );
};

export default ExtraSection;