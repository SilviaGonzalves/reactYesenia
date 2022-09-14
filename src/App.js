
import './App.css';
import NavBar from "./Components/navbar/NavBar.jsx";
// import Contenido from "./Components/contenido/Contenido.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/itemlistcontainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/itemdetailcontainer/ItemDetailContainer.jsx';
import Cart from './Components/cart/Cart.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from "./Components/nosotros/Nosotros.jsx";
// import Contacto from './Components/contacto/Contacto.jsx';
import { CartProvider } from './Components/context/CartContext';


const App = () => {

  return (
    <CartProvider>
        <BrowserRouter>

          <NavBar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart/>} />
              <Route path="/nosotros" element={<Nosotros/>}/>
              {/* <Route path="/contacto" element={<Contacto/>}/> */}
            
              
              <Route path='*' element={ <Navigate to="/"/>} />

          </Routes>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
