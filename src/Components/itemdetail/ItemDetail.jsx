import React from 'react'
import Contador from '../contador/Contador';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
  return (
    <div className="container my-5 contenedorGral">
      <div className="contenedorIzq">
            <h2 className="letraTitulo"><strong>{item.nombre}</strong></h2>
            <img src={item.img} className="imagenItem" alt="img"/>
            <p className="tamLetra"><strong>Precio: </strong>{item.precio}</p>

            {item.stock === 0 
                  ? <h3 className="centrar"><strong>Sin stock</strong></h3>
                  : <p className="tamLetra"><strong>Stock: </strong>{item.stock}</p>
            }

            {item.stock !== 0 
            ? <Contador stock={item.stock}/> 
            : <h3> {"\n"} </h3>
            }
      </div>
      <div className="contenedorDer">
       
            <h2 className="titulo" ><strong>Categoría: </strong>{item.category}</h2>

            <h2 className="titulo1" ><strong>Descripción del producto: </strong></h2>
            <p>{item.desc}</p>
      </div>
   </div> 
)}

export default ItemDetail