import React from 'react';
import Swal from 'sweetalert2';

const DeleteConfirmModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { name, _id } = deletingProduct;

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
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-700">Are you sure you want to delete {name} ?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-sm  btn-error">Remove</button>
                        <label for="delete-confirm-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;