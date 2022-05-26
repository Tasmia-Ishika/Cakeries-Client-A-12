import React from 'react';
import Swal from 'sweetalert2';

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    const { name, img, price} = product;

    

    return (
        <tr>
            <td>{index + 1}</td>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-sm  btn-error">Remove</label>

            </td>
        </tr>
    );
};

export default ProductRow;