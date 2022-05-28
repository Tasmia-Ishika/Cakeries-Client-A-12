import React from 'react';

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    const { name, img, price } = product;



    return (
        <tr>
            <td>{index + 1}</td>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" className="btn btn-sm  btn-error">Remove</label>

            </td>
        </tr>
    );
};

export default ProductRow;