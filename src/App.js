import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import RequireAuth from './Pages/Authentication/RequireAuth';
import SignUp from './Pages/Authentication/SignUp';
import Blogs from './Pages/Home/Blogs';
import ContactUs from './Pages/Home/ContactUs';
import HomeDisplay from './Pages/Home/HomeDisplay';
import Navbar from './Pages/Shared/Navbar';
import ProductDetails from './Pages/Shop/ProductDetails';




function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomeDisplay></HomeDisplay>}></Route>

        <Route path="/shop/:id" element={
          <RequireAuth>
           <ProductDetails/>
          </RequireAuth>}>
        </Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
