
import './CartWidget.css';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const  CartWidget = () => {
    
    const { sumoCantCarrito } = useContext(CartContext)


    return (
        <Link to="/cart">
           
             <img src="/assets/imagenes/imagcarrito.png" id="imagen-carrito" alt="carrito" />
             <span>{sumoCantCarrito()}</span>
        </Link>
   
    )
}

export default CartWidget
