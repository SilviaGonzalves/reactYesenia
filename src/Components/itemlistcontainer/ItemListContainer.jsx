
import { useEffect, useState } from "react"
import './ItemListContainer.css';
import  pedirDatos  from "../../helpers/pedirDatos"
// import  pedirDatos  from "../helpers/pedirDatos.jsx"
import ItemList from "../itemlist/ItemList"



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then( (res) => {
                setProductos(res)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                // console.log("Fin del proceso")
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos}/>
        </div>

    )
}
export default ItemListContainer