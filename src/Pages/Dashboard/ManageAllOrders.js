import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [status, setStatus] = useState('pending');

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // http://localhost:5000/orders
        fetch('', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [])

    const handleShip = id => {
        setStatus('shipped')
    }


    return (
        <div>
            <h2>Manage All Orders:{orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Total price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.customerEmail}</td>
                                <td>{order.product}</td>
                                <td>{order.totalPrice}</td>
                                <td>
                                    {(order.paid && (status === 'pending')) && <div>
                                        <p className='text-success'>{status}</p>
                                        <button onClick={() => handleShip(order._id)} className='btn btn-xs btn-success'>Ship</button>
                                    </div>}
                                    {!order.paid && <div>
                                        <p className='text-red-600'>UnPaid</p>
                                        {/* <p>Transaction id: <span className='text-success'>{a.transactionId}</span> </p> */}
                                    </div>}
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;