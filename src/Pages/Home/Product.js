import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();

  const navigateToProductDetail = id => {
    navigate(`/shop/${id}`)
  }

  return (
    <div className="card w-50 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl font-bold">{product.name}</h2>
        <p className='font-serif'>{product.description}</p>
        <p className='text-lg font-black'>Minimum Order: {product.minimum} Pieces</p>
        <p className='text-3xl font-serif'>Single Piece: ${product.price}</p>
        <p className='text-lg font-black'>Available Stock: {product.stock} Pieces</p>
        <div className="card-actions">
          <button onClick={() => navigateToProductDetail(product._id)} className="btn btn-primary font-bold">Purchase</button>

        </div>
      </div>

    </div>
  );
};

export default Product;