import React from 'react';
import Swal from 'sweetalert2';

const ProductRow = ({ product, index, refetch }) => {
    const { name, img, price, _id } = product;

    const handleDelete = () => {
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    Swal.fire(
                        `Item: ${name} is deleted Successfully !!`,
                        'You can add more items from Add Product Route.',
                        'success'
                      )
                    refetch();
                }
            })
    }

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
            <td><button onClick={() => handleDelete()} class="btn btn-sm  btn-error">Remove</button></td>
        </tr>
    );
};

export default ProductRow;