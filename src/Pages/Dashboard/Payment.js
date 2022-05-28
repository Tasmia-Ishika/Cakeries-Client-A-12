import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import CheckoutForm from './CheckoutForm';

import Loading from '../Shared/Loading';

const stripePromise = loadStripe('pk_test_51L1pyzLgFdLsD88grqFJXeCe5OeFWkSBRP7JSPB0otOqx6myGVwt7rdbxuCOp0kwFIugntRF0QlVlfP5LWcBaMdh00gdHAke1h');


const Payment = () => {
    const { id } = useParams();
    const url = `https://afternoon-meadow-48575.herokuapp.com/orders/${id}`;

    const { data: order, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    console.log(order);
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-3xl text-rose-900 font-serif  m-4 p-4'>Payment Section</h1>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="font-bold text-lg">Your ordered Item is: {order.product}</p>
                    <p className='text-lg text-purple-800 font-bold'>Ordered quantity :   {order.orderQuantity} pieces</p>
                    <h2 className="text-2xl font-bold text-success">Due amount is : ${order.totalPrice}</h2>

                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;