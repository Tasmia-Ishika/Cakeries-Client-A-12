import React from 'react';
import { useQuery } from 'react-query'
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';
const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-4xl text-center font-serif mb-7">All Users: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Users;