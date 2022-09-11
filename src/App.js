
import React from 'react';
import './App.css';
import NavBar from "./Components/navbar/NavBar.jsx";
// import Contenido from "./Components/contenido/Contenido.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/itemlistcontainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/itemdetailcontainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from "./Components/nosotros/Nosotros.jsx";
// import Contacto from './Components/contacto/Contacto.jsx';


const App = () => {

  return (
    <BrowserRouter>

      <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>

          <Route path="/nosotros" element={<Nosotros/>}/>
          {/* <Route path="/contacto" element={<Contacto/>}/> */}
         
          
          <Route path='*' element={ <Navigate to="/"/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
