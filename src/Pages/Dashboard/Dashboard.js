import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div class="drawer drawer-mobile">
      <input id="dash-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h2 className='text-3xl font-bold text-red-900'>Dashboard</h2>
        <Outlet></Outlet>


      </div>
      <div class="drawer-side">
        <label for="dash-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

          <li><Link to="/dashboard">My Orders</Link></li>
          <li><Link to="/dashboard/review">Add Feedback</Link></li>
          <li><Link to="/dashboard/profile">My Profile</Link></li>
          {admin && <>
            <li><Link to="/dashboard/users">All Users</Link></li>
            {/* <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
            <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li> */}
          </>}
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;