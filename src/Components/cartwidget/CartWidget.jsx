
import './CartWidget.css';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const  CartWidget = () => {
    
    const { cart, sumoCantCarrito } = useContext(CartContext)


    return (
        <Link to="/cart" className={`widget ${cart.length > 0 ? "widget-visible" : " "}` }>
           
             <img src="/assets/imagenes/imagcarrito.png" id="imagen-carrito" alt="carrito" />
             <span>{sumoCantCarrito()}</span>
        </Link>
   
    )
}

export default CartWidget
