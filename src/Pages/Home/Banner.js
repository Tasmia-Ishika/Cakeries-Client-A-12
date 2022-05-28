import React from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url(" + "https://i.ibb.co/DfqNF00/background2.jpg" + ")", }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">World's #1 Largest And Budget Friendly Wholesaler For Bakery Tools.</h1>
                    <p className="mb-5 mt-2 font-serif text-lg">From Creams, Doughs and Bakings We Love To Narrate New  Stories Everyday For Our Precious Customer's. Visit Our Site and Find Your Desirable Items.</p>
                    <p className="btn btn-primary mt-12">Scroll Down to check more
                        <BsChevronDoubleDown></BsChevronDoubleDown>
                    </p>
                </div>
            </div>
        </div>



    );
};

export default Banner;