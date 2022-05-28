import React from 'react';

import Swal from 'sweetalert2';

const UserRow = ({ user, refetch, }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Canceled !!',
                        text: 'You cannot make admin',
                    })
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Successful !!',
                        'You made an admin!',
                        'success'
                    )
                }
            })
    }
    return (
        <tr>
            <th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm">Make Admin</button>}</td>

        </tr>
    );
};

export default UserRow;