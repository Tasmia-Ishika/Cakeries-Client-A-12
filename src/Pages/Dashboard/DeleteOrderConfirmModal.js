import React from 'react';
import Swal from 'sweetalert2';

const DeleteOrderConfirmModal = ({ deleteOrder, setDeleteOrder, setOrders, orders }) => {
    const { product, _id } = deleteOrder;
    const handleDelete = () => {
        fetch(`https://afternoon-meadow-48575.herokuapp.com/orders/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Your Order Just Canceled',
                        text: 'Go to shop page if you want to place order again.',

                    });
                    setDeleteOrder(null);
                    const leftOvers = orders.filter(order => order._id !== _id);
                    setOrders(leftOvers)
                }
            })


    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-red-600">Are you sure you want to cancel your ordered item {product}?</h3>
                    <p className="py-4 font-serif text-lg">If you cancel the order you will have to place order again.</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-error">Delete</button>
                        <label htmlFor="delete-confirm-order-modal" className="btn btn-success">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderConfirmModal;