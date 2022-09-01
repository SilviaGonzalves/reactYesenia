import React from 'react'

import './Item.css';
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

  return (
    <div className="container my-5 contenedorItem">
          
            <h2 className="centrar">{producto.nombre}</h2>
            <img src={producto.img} className="imagenItem" alt="img"/>
            <p className="tamLetra">Precio: {producto.precio}</p>
            {producto.stock === 0 
              ? <h3 className="centrar">Sin stock</h3>
              : <p className="tamLetra">Stock: {producto.stock}</p>
            }
            <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver detalle</Link>
        
    </div>
  )
}

export default Item