import React from 'react';
import useProduct from '../../hooks/useProduct';
import Product from './Product';

const AllProducts = () => {
    const [products] = useProduct();

    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-serif m-8'>All Our Available Items</h1>
            </div>
            <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;