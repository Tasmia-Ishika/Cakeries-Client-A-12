import React, { useState } from 'react';
import { useQuery } from 'react-query'
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('product', () => fetch('https://afternoon-meadow-48575.herokuapp.com/product', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center text-3xl m-5 font-serif '>Manage Products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>1</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            ></ProductRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <DeleteConfirmModal
                    deletingProduct={deletingProduct}
                    refetch={refetch}
                    setDeletingProduct={setDeletingProduct}
                ></DeleteConfirmModal>
            }
            <Footer></Footer>
        </div>
    );
};

export default ManageProducts;