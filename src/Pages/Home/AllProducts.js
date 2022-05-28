import React from 'react';
import useProduct from '../../hooks/useProduct';
import Footer from '../Shared/Footer';
import Product from './Product';

const AllProducts = () => {
    const [products] = useProduct();

    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-serif m-8'>Our Available Items</h1>
            </div>
             <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;