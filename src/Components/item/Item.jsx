import React from 'react'
import Contador from '../contador/Contador';
import './Item.css';

const Item = ({producto}) => {

  return (
    <div className="container my-5 contenedorItem">
          
            <h2 className="centrar">{producto.nombre}</h2>
            <img src={producto.img} className="imagenItem" alt="img"/>
            <p className="tamLetra">Precio: {producto.precio}</p>
            {producto.stock === 0 ? <h3 className="centrar">Sin stock</h3>:<p className="tamLetra">Stock: {producto.stock}</p>}
            {producto.stock !== 0 ? <Contador stock={producto.stock}/> : null}
            
    </div>
  )
}

export default Item