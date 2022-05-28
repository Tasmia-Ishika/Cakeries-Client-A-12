import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteOrder }) => {
    const { _id, product, orderQuantity, totalPrice, paid, transactionId } = order;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product}</td>
            <td>{orderQuantity}</td>
            <td>{totalPrice}</td>
            <td>{
                (totalPrice && !paid) && <div> <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-sm btn-success mr-2">Pay</button></Link>
                    <label onClick={() => setDeleteOrder(order)} htmlFor="delete-confirm-order-modal" className="btn btn-sm btn-error">Cancel</label></div>
            }</td>

           <td>{(totalPrice && paid) && <div>
                <p><span className='text-success text-lg font-bold'>Paid</span></p>
                <p>Transaction id: <span className='text-success font-semibold text-sm'>{transactionId}</span> </p>
            </div>}</td>
        </tr>
    );
};

export default OrderRow;