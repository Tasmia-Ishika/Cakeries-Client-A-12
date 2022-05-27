import React from 'react';
import Footer from '../Shared/Footer';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center m-7'>Blogs</h2>
            <h3 className='text-3xl text-rose-600 m-2 p-2 font-bold'>How will you improve the performance of a React Application? </h3>
            <p className=' text-black m-2 p-3 font-serif'>ANSWER: There's a term called lazy loading where images are loaded only when the images are about to appear in the viewport. Here we discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:

                1) Keeping component state local where necessary
                2) Memoizing React components to prevent unnecessary re-renders
                3) Code-splitting in React using dynamic import
                4) Windowing or list virtualization in React
                5) Lazy loading images in React</p>

            <h3 className='text-3xl text-rose-600 m-2 p-2 font-bold'> What are the different ways to manage a state in a React application? </h3>
            <p className=' text-black m-2 p-3 font-serif'>ANSWER: There are 4 way react states that can be saved.1. local state. It is managed using useState hooks. 2. GLobal state. It is when we want to get the data and update them anywhere in the app and in different components.  3. Server State. best example is use query where different properties are managed. 4. URL state. This is when data exists in the URL including the path name and query parameter.</p>

            <h3 className='text-3xl text-rose-600 m-2 p-2 font-bold'>How does prototypical inheritance work?
            </h3>
            <p className=' text-black m-2 p-3 font-serif'>ANSWER: JavaScript is a prototype-based programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
                Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).

                JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.</p>

            <h3 className='text-3xl text-rose-600 m-2 p-2 font-bold'>Why you do not set the state directly in React? </h3>
            <p className=' text-black m-2 p-3 font-serif'>ANSWER: The initial state is passed to the function first which returns the current state value and sets that value in the state with the function. The initial could be same or different from the current state. It make sures that the component has been updated and calls for re-rendering of the component. It can be  used to render components in UI for realtime.</p>

            <h3 className='text-3xl text-rose-600 m-2 p-2 font-bold'> What is a unit test? ,Why should write unit tests?</h3>
            <p className=' text-black m-2 p-3 font-serif'>ANSWER: Unit test is a software testing method.The developers learn the functionality and gains knowledge on the unit API. It allows the developers to refine the code and makes sure that the module works properly. </p>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;