import  {useState, createContext, useContext } from 'react'
import Swal from 'sweetalert2'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
      setCart([ ...cart, item])
    }
  
    const isInCart = (id) => {
      return  cart.some((item) => item.id === id)
    }
  
    const sumoCantCarrito = () => {
      return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }
  
    const sumaTotalCarrito = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
     }

    const removeItem = (id) =>{
        setCart (cart.filter((item) => item.id !== id) )
    }

    const vaciarCarrito = () => {
        Swal.fire({
            title: 'Está seguro?',
            text: "No podrá revertir esta operación !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                  setCart([])
              
              )
            }
          })
    } 
    const terminarCompra = (id) => {
      Swal.fire({
        title: 'Compra exitosa!!!',
        text: `Tu número de orden es : ${id}`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Genial!'
      })
      setCart([])
    }  



    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            sumoCantCarrito,
            sumaTotalCarrito,
            vaciarCarrito,
            removeItem,
            terminarCompra
          }}>   
        {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () =>{
    return useContext(CartContext)
}

