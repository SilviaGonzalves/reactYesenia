import { useEffect, useState } from "react"
import  pedirDatos  from "../../helpers/pedirDatos"
import { useParams } from 'react-router-dom'
import ItemDetail from "../itemdetail/ItemDetail"
import Loader from "../loader/Loader"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    // console.log(itemId)
    // console.log(item)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) )
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

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
