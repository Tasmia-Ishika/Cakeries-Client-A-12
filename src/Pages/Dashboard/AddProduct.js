import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey =
        '5d8d36463ced5b7184ed2ea2a14d6ada';

    const onSubmit = async data => {
        // console.log('data', data)
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log('imgbb result', result);
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        stock: data.stock,
                        minimum: data.minimum,
                        img: img
                    }
                    fetch('https://afternoon-meadow-48575.herokuapp.com/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(resProduct => {
                            console.log('inserted', resProduct);
                            if (resProduct.result.insertedId) {
                                reset();
                                Swal.fire(
                                    'Successful, YAY !!',
                                    'You added product successfully !!',
                                    'success'
                                )
                            }
                            else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Sorry, Could not add a product !!',
                                    text: 'Please try again..',

                                })
                            }
                        })
                }
            })
    };
    return (
        <div className=''>
            <h2 className='text-4xl ml-12 p-5 font-serif my-auto'>Add New Products</h2>
            <form className='my-auto ml-12 p-5' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Product Name is required'
                            },
                        })}
                    />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is required'
                            },
                        })}
                    />

                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description")}
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            },
                        })}
                    />

                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minimum", {
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity is required'
                            },
                        })}
                    />

                    <label className="label">
                        {errors.minimum?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimum.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Stock</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Stock"
                        className="input input-bordered w-full max-w-xs"
                        {...register("stock", {
                            required: {
                                value: true,
                                message: 'Available Quantity is required'
                            },
                        })}
                    />

                    <label className="label">
                        {errors.stock?.type === 'required' && <span className="label-text-alt text-red-500">{errors.stock.message}</span>}
                    </label>
                </div>

                <input className='btn btn-primary w-full text-white max-w-xs' value='Add Product' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;