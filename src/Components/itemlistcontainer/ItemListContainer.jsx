
import { useEffect, useState } from "react"
import './ItemListContainer.css';
import ItemList from "../itemlist/ItemList"
import { useParams } from 'react-router-dom'
import Loader from "../loader/Loader"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        // armo la referencia (SYNC)
        const productosRef = collection(db, "productos")
        // llamar, consumir esa referencia (async)
        const q = categoryId
            ? query(productosRef, where ("category", "==", categoryId))
            : productosRef

        getDocs (q)
            .then ((resp) =>{
                const productosDB = resp.docs.map((doc) => ({id:doc.id, ...doc.data()}) )
              
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (
        <div>
            {
                loading 
                ? <Loader/>
                : <ItemList productos={productos}/>
            }

        </div>

    )
}
export default ItemListContainer