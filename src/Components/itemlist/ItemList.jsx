
import './ItemList.css';
import Item from "../item/Item";


const ItemList = ({productos = []}) => {

     return (
           <div className="container my-5 contenedorGral">
              {productos.map((prod) => {
                  return( 
                    <Item producto={prod} key={prod.id}/>
                  )
            }) }  
          </div>
      )
}

export default ItemList

