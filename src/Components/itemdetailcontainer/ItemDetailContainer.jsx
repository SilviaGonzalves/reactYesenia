import { useEffect, useState } from "react"

import { useParams } from 'react-router-dom'
import ItemDetail from "../itemdetail/ItemDetail"
import Loader from "../loader/Loader"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    // console.log(itemId)
    // console.log(item)

    useEffect(() => {
        setLoading(true)

            // armo la referencia (SYNC)
            const docRef = doc(db, "productos", itemId)
            // llamar, consumir esa referencia (async)
            getDoc (docRef)
                .then ((doc) =>{
                    setItem({id:doc.id, ...doc.data()}) 
                    
                    
                })
                .finally(() => {
                    setLoading(false)
                })




        // pedirDatos()
        //     .then((res) => {
        //         setItem( res.find((prod) => prod.id === Number(itemId)) )
        //     })
        //     .catch(err => console.log(err))
        //     .finally(() => {
        //         setLoading(false)
        //     })

    }, [itemId])

    return (
        <div>
            {
                loading
                ? <Loader/>
                : <ItemDetail item={item} />
            }
            

        </div>
    )
}

export default ItemDetailContainer
