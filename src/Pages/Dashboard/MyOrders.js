import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';
import DeleteOrderConfirmModal from './DeleteOrderConfirmModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [deleteOrder, setDeleteOrder] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`https://afternoon-meadow-48575.herokuapp.com/orders?customer=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }


      })

        .then(res => {
          // console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/')
          }

          return res.json()
        })
        .then(data => {

          setOrders(data);

        });
    }
  }, [user, navigate])


  return (
    <div>
      <h1 className='text-center text-4xl font-serif mb-7'>My orders : {orders.length} Items</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index) => <OrderRow
                key={order._id}
                order={order}
                index={index}
                setDeleteOrder={setDeleteOrder}
              ></OrderRow>)
            }
          </tbody>
        </table>
        <div>
          {
            deleteOrder && <DeleteOrderConfirmModal
              deleteOrder={deleteOrder}
              orders={orders}
              setOrders={setOrders}
              setDeleteOrder={setDeleteOrder}
            ></DeleteOrderConfirmModal>
          }
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyOrders;