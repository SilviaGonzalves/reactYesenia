import React from 'react'
import Contador from '../contador/Contador';
import './ItemDetail.css';
import {  useState } from "react";
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

      const { cart, addToCart, isInCart } = useCartContext()


      const [cantidad, setCantidad] = useState(0)

      const handleAgregar = () => {
          if (cantidad > 0) {
            
                  const itemToCart = {
                   id: item.id,
                   nombre: item.nombre,
                   precio: item.precio,
                   cantidad
                  }
                  addToCart(itemToCart)
             }
           
      }
  return (
    <div className="container my-5 contenedorGral">
      <div className="contenedorIzq">
            <h2 className="letraTitulo"><strong>{item.nombre}</strong></h2>
            <img src={item.img} className="imagenItem" alt="img"/>
            <p className="tamLetra"><strong>Precio: </strong>{item.precio}</p>

      {/* {item.stock === 0 
            ? <h3 className="centrar"><strong>Sin stock</strong></h3>
            : <p className="tamLetra"><strong>Stock: </strong>{item.stock}</p>
      }   
      {item.stock !== 0 
            ? <Contador 
            stock={item.stock}
            counter={cantidad}
            setCounter={setCantidad}
            handleAgregar={handleAgregar}
              /> 
            : <h3> {"\n"} </h3>
      } */}

            {
            isInCart(item.id)
            ? <p>El producto ya está agregado al carrito</p>
            :[
                  (item.stock === 0 
                        ? <h3 className="centrar"><strong>Sin stock</strong></h3>
                        : <p className="tamLetra"><strong>Stock: </strong>{item.stock}</p>
                  ),

                  (item.stock !== 0 
                        ? <Contador 
                        stock={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                        /> 
                        : <h3> {"\n"} </h3>
                  )
             ]
            } 
      </div>
      <div className="contenedorDer">
       
            <h2 className="titulo" ><strong>Categoría: </strong>{item.category}</h2>

            <h2 className="titulo1" ><strong>Descripción del producto: </strong></h2>
            <p>{item.desc}</p>
      </div>
      <div className='estBotones'>
            <Link to="/cart" className='btn btn-success mx-5'>Terminar mi compra</Link>  

                                  
            <Link to="/" className='btn btn-success mx-5'>Volver al inicio</Link>
      </div> 
   </div> 
)}

export default ItemDetail