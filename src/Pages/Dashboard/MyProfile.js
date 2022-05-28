import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [dbUser, setDbUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/userProfile?email=${user.email}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDbUser(data)
            })
    }, [user.email])

    const handleSubmit = event => {
        event.preventDefault();
        const newUser = {
            name: user.displayName,
            email: user.email,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedin: event.target.linkedin.value,
        }


        fetch(`http://localhost:5000/userProfile/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Your Profile Updated Successfully !!',
                    'You can edit your profile anytime.',
                    'success'
                )
            })
    }
    return (
        <div>
            <h2 className='text-center text-4xl font-serif'>Update Profile</h2>
            <p className='text-center text-lg font-bold mb-9 mt-2'>You can update or edit your information in your profile anytime.</p>
            <form onSubmit={handleSubmit} className='grid  grid-cols-1 gap-3 justify-items-center mt-2 mb-7'>
                <input type="name" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name='location' defaultValue={dbUser[0]?.location || ''} placeholder="Location" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='phone' defaultValue={dbUser[0]?.phone || ''} placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='linkedin' defaultValue={dbUser[0]?.linkedin || ''} placeholder="LinkedIn ID" className="input input-bordered w-full max-w-xs" />
                <input type="submit" value="submit" className="btn btn-primary w-full max-w-xs" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default MyProfile;