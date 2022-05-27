import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const NotFound = () => {
    return (
        <section className='px-4 mx-auto text-center w-100'>
            <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
                <div>
                    <h1 className='my-5 text-2xl font-bold'>
                        Sorry! The page you're looking for is not available.
                    </h1>
                    <Link to='/'>
                        <button className='w-100 py-2 px-3  mt-3 btn btn-primary'>
                            Back to homepage
                        </button>
                    </Link>
                </div>
                <div>
                    <div className='w-100'>
                        <img className='mb-12'
                            src='https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13617.jpg?t=st=1653681383~exp=1653681983~hmac=775b6a3eba92006a24559cf7bc95efb171a9c805b42b6c0727924a132f2dfdf2&w=900'
                            alt=''
                        />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    )
}

export default NotFound
