import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import RequireAuth from './Pages/Authentication/RequireAuth';
import SignUp from './Pages/Authentication/SignUp';
import AddProduct from './Pages/Dashboard/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Review from './Pages/Dashboard/Review';
import Users from './Pages/Dashboard/Users';
import AllProducts from './Pages/Home/AllProducts';
import Blogs from './Pages/Home/Blogs';
import ContactUs from './Pages/Home/ContactUs';
import HomeDisplay from './Pages/Home/HomeDisplay';
import MyPortfolio from './Pages/Shared/MyPortfolio';
import Navbar from './Pages/Shared/Navbar';
import ProductDetails from './Pages/Shop/ProductDetails';




function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomeDisplay></HomeDisplay>}></Route>
        <Route path='/allProduct' element={<AllProducts></AllProducts>}></Route>

        <Route path="/shop/:id" element={
          <RequireAuth>
            <ProductDetails />
          </RequireAuth>}>
        </Route>

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<Review />}></Route>

          <Route path='payment/:id' element={<Payment></Payment>}></Route>

          <Route path='profile' element={<MyProfile />}></Route>

          <Route path='user' element={<RequireAdmin>
            <Users />
          </RequireAdmin>}>
          </Route>
          <Route path='addProduct' element={<RequireAdmin>
            <AddProduct />
          </RequireAdmin>}>
          </Route>
          <Route path='manageProduct' element={<RequireAdmin>
            <ManageProducts />
          </RequireAdmin>}>
          </Route>
        </Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
