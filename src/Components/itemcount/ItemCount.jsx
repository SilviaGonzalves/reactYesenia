import React from 'react'
import './ItemCount.css';
import Contador from '../contador/Contador';

const ItemCount = ({productos}) => {
 
      const {stock, img, desc} = productos


     return (

            <div className="container my-5 contenedorItem">
            <h2 className="centrar">{desc}</h2>
            <img src={img} className="imagenItem" alt="img"/>
            {
              stock === 0 ? <h3 className="centrar">Sin stock</h3>:<p>Stock:{stock}</p> 
            }
            {
              stock !== 0 ? <Contador stock={stock}/> : null
}       

            </div>

     )


}

export default ItemCount;