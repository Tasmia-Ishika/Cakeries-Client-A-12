import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeDisplay from './Pages/Home/HomeDisplay';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';


function App() {
  return (
    <div>
  <Navbar></Navbar>
  <Routes>
    <Route path='/' element={<HomeDisplay></HomeDisplay>}></Route>
  </Routes>
  <Footer></Footer>
    </div>
  );
}

export default App;
