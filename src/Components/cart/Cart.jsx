
import {  useCartContext } from '../context/CartContext'
import './Cart.css';
import {BsTrash} from "react-icons/bs"
import { Navigate } from 'react-router-dom'

const Cart = () => {

  const { cart, sumaTotalCarrito, vaciarCarrito, removeItem } = useCartContext()

  if (cart.length === 0 )  return <Navigate to="/"/>

  return (
    <div className='container my-5 contGral'>
            <h2>Tu carrito</h2>
            <div className='estTitulos'>
                    <p>Nombre</p>
                    <p>Cantidad</p>
                    <p>Precio</p>
                    <p>Total</p>
                    <p> </p>
            </div>
            
            {cart.map((item) => (
                <div key={item.id} className='estItems'>
                    <p className='estP1'>{item.nombre}</p>
                    <p className='estP2'>{item.cantidad}</p>
                    <p className='estP2'>{item.precio}</p>
                    <p className='estP2'>{item.precio * item.cantidad}</p>
                    <button onClick={() => removeItem(item.id)}className='btn btn-danger'><BsTrash/></button>
                </div>
            ))}
            <div className='estTotal'>
                <h4>Total compra: ${sumaTotalCarrito()}</h4>
                <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
            </div>
    </div>
  )
}

export default Cart     