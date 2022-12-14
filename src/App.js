import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About'
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipping from './components/Shipping/Shipping';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/shipping" element={
          <RequireAuth>
            <Shipping></Shipping>
          </RequireAuth>
        }></Route>
        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
