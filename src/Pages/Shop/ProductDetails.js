import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetail from '../../hooks/useProductDetail';
import Footer from '../Shared/Footer';

const ProductDetails = () => {
    const { id } = useParams();
    const [product] = useProductDetail(id);
    const [user, loading, error] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();

        

        const placeOrder = {
            client: user.email,
            clientName: user.displayName,
            phone: event.target.phone.value,

        }
        fetch(`http://localhost:5000/product/${id}`)

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
                    <div class="hero bg-base-200 p-4 pt-4">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                                <div class="card-body">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Address</span>
                                        </label>
                                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Choose Quantity</span>
                                        </label>
                                        <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Phone</span>
                                        </label>
                                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    
                                    <div class="form-control mt-6">
                                        <button class="btn btn-primary">Confirm Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;