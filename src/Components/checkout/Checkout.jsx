import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom"
// import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from "firebase/firestore"
import { db } from "../firebase/config"

 
const Checkout = () => {

    const { cart, sumaTotalCarrito, terminarCompra } = useCartContext()

    const [values, setValues] = useState({
        nombre:"",
        email:"",
        direccion:"",
    })
    const handleInputChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault()
      


          const orden = {
            comprador: values,
            items: cart,
            total: sumaTotalCarrito()
          }

          if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
          }

          if (values.email.length < 2) {
            alert("Email incorrecto")
            return
          }
        
          if (values.direccion.length < 2) {
            alert("Dirección incorrecta")
            return
          }

//creamos en firebase
          const batch = writeBatch(db)
          const ordenesRef = collection(db, "ordenes")
          const productosRef = collection(db, 'productos')

          const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))

          const productos = await getDocs(q)
             
          const outOfStock = []

          productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id ===doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
              batch.update(doc.ref,{
                stock: doc.data().stock - itemInCart.cantidad
              })
             }else{
                outOfStock.push(itemInCart)
              }
            })

            if (outOfStock.length === 0) {
              batch.commit()
              .then(() => {
                
                addDoc(ordenesRef, orden)
                  .then((doc) => {
                      console.log(doc.id)
 
                      terminarCompra(doc.id)
                  })
              })
            }else {
              alert("Item sin stock")
              navigate("/");
            }
}


if (cart.length === 0){
      return <Navigate to="/"/> 
}
return (

          <div  className='container my-5'>
            <h2>Checkout</h2>
          <hr/>
          <form onSubmit={handleSubmit}>
              <input type={"text"}
              name="nombre"
              onChange={handleInputChange} 
              value={values.nombre}
              className="my-3 form-control" 
              placeholder='Tu Nombre'
              />

              <input type={"email"} 
              name="email"
              onChange={handleInputChange} 
              value={values.email}
              className="my-3 form-control" 
              placeholder='Tu Email'
              />

              <input type={"text"} 
              name="direccion"
              onChange={handleInputChange} 
              value={values.direccion}
              className="my-3 form-control" 
              placeholder='Tu Dirección'
              />

              <button type='submit' className='btn btn-primary'>Enviar</button>

          </form>
              
          </div>
  )
}


export default Checkout
