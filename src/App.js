

import './App.css';
import NavBar from "./Components/navbar/NavBar.jsx";
import { LoginProvider } from './Components/context/LoginContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/itemlistcontainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/itemdetailcontainer/ItemDetailContainer.jsx';
import Cart from './Components/cart/Cart.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from "./Components/nosotros/Nosotros.jsx";
import Checkout from './Components/checkout/Checkout.jsx';
import {LoginScreen} from './Components/loginscreen/LoginScreen';
import { CartProvider } from './Components/context/CartContext';
import {Register} from './Components/register/Register';
import Administradores from './Components/administradores/Administradores.jsx';

import { ProtectedRoute } from './Components/ProtectedRoute';
import ActualizarDB from './Components/actualizarDB/ActualizarDB';

const App = (user) => {

  return (
    <LoginProvider>
    <CartProvider>
        <BrowserRouter>

          <NavBar/>
          <Routes>
            <>
             
                  <Route path="/" element={<ItemListContainer/>}/>
                  <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
                  <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                  <Route path="/cart" element={<Cart/>} />
                  <Route path="/nosotros" element={<Nosotros/>}/>
                  <Route path="/checkout" element={<Checkout/>}/>
                  <Route path='*' element={ <Navigate to="/"/>} />

                  <Route path="/login" element={<LoginScreen/>}/> 
                  <Route element={<ProtectedRoute user={user}/>}>
                        <Route path="/register" element={<Register/>}/>  
                        <Route path="/administradores" element={<Administradores/>}/>
                        <Route path="/actualizarDB" element={<ActualizarDB/>}/> 
                  </Route>

                  <Route path='*' element={ <Navigate to="/"/>} />
               
            
            </>

          </Routes>
        </BrowserRouter>
    </CartProvider>
    </LoginProvider>
  );
}

export default App;