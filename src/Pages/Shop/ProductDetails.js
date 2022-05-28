import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import useProductDetail from '../../hooks/useProductDetail';
import Footer from '../Shared/Footer';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useProductDetail(id);
    const { name, price, minimum, stock } = product;
    const [user, loading] = useAuthState(auth);
    const [error, setError] = useState('')
    const [totalPrice, setPrice] = useState(null);
    const [disabled, setDisabled] = useState(false)


    const handleOrder = (event) => {
        const orderQuantity = parseInt(event.target.value);
        console.log(orderQuantity);
        if (orderQuantity < minimum) {
            console.log(orderQuantity);
            console.log(minimum);
            setError('Select order amount according to minimum quantity')
            setDisabled(true);

        }

        else if (orderQuantity > stock) {
            setError('Select order amount according to our available stock.')
            setDisabled(true);
        }
        else if (orderQuantity < stock || orderQuantity > minimum) {
            setError('')
            setDisabled(false);
        }
    }
    const handlePurchase = event => {
        event.preventDefault();
        const orderQuantity = event.target.orderQuantity.value;
        const totalPrice = orderQuantity * price;
        setPrice(totalPrice);

        const order = {
            product: name,
            price,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: event.target.address.value,
            address: event.target.phone.value,
            orderQuantity,
            totalPrice
        }
        console.log(order);


        let newAvailableQuantity = parseInt(stock) - parseInt(orderQuantity);
        const newProduct = { ...product, stock: newAvailableQuantity }
        setProduct(newProduct);

        //Posting the data to the database with a new collection
        fetch('https://afternoon-meadow-48575.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // setProduct(null);
                console.log(data);

            })

        //Update Available Quantity in the Database after purchasing product

        fetch(`https://afternoon-meadow-48575.herokuapp.com/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Your order is confirmed!!',
                    'Thank you for the purchase.',
                    'success'
                )
            })
    }

    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-7 mb-10'>Shop Your Items</h1>
            <div className='flex border-4 border-primary grid sm:grid-cols-2 lg:grid-cols-2'>
                <div>
                    <img className='w-100 p-4' src={product.img} alt="" />
                    <br />
                    <h2 className='text-2xl m-3 font-serif'>Item Name: {product.name}</h2>
                    <h2 className='text-2xl m-3 font-serif'>Minimum Order: {product.minimum} Pieces</h2>
                    <h2 className='text-2xl m-3 font-serif'>Available InStock: {product.stock} Pieces</h2>
                    <p className='text-2xl m-3 font-serif'>Price:  ${product.price} Per Pieces</p>
                </div>
                <div>
                    <form onSubmit={handlePurchase} className="hero bg-base-200 p-4 pt-4">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <label className="label">
                                        Order Quantity
                                    </label>
                                    <p className='text-red-500'> {error}</p>
                                    <input type="number" name='orderQuantity' defaultValue={minimum} onChange={handleOrder} placeholder="Order Quantity" className="input input-bordered w-full max-w-xs" required />
                                    <p className='text-rose-500 font-bold text-2xl'>Total Price: ${totalPrice}</p>
                                    <input type="submit" disabled={disabled} value="Confirm Order" placeholder="Type here" className="btn btn-primary w-full max-w-xs" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;