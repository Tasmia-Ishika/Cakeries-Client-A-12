import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: "url(" + "https://i.ibb.co/DfqNF00/background2.jpg" + ")", }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Bangladesh's #1 Largest And Budget Friendly Wholesaler For Bakery Tools.</h1>
                    <p class="mb-5 mt-2 font-serif text-lg">From Creams, Doughs and Bakings We Love To Narrate New  Stories Everyday For Our Precious Customer's. Check Our Site and Find Your Desirable Items.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>



    );
};

export default Banner;