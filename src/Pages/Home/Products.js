import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='my-10 p-10'>
            <div className='text-center'>
                <h3 className='text-primary-content text-xl font-serif '>Shop Items</h3>
                <h1 className='text-neutral-focus text-3xl mt-3 font-semibold uppercase'>Our Products</h1>
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

export default Products;