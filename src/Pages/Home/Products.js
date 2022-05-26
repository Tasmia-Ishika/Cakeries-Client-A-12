import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import Product from './Product';

const Products = () => {
    const [products] = useProduct();
  const navigate = useNavigate();
  const showAllItems = () => {
      navigate('/allProduct')
  }


    return (
        <div className='my-10 p-10'>
            <div className='text-center'>
                <h3 className='text-primary-content text-xl font-serif '>Shop Items</h3>
                <h1 className='text-neutral-focus text-3xl mt-3 font-semibold uppercase'>Our Products</h1>
            </div>
            <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
          <div className='text-center m-10'>
          <button onClick={showAllItems} className='btn btn-primary font-bold'>Check All Products</button>
          </div>
        </div>
    );
};

export default Products;