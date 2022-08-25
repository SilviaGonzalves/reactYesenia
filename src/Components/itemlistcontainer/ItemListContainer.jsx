
import ItemCount from "../itemcount/ItemCount"
import './ItemListContainer.css';
// import Item from "./Item"



const ItemListContainer = () => {

    // const nombres = [
    //     {nombre:"Silvia",
    //      edad: 60

    //     },
    //     {nombre:"Belen",
    //      edad:40
 
    //     },
    //     {nombre:"Matias",
    //      edad:35

    //     }
    // ]

     const productos=[
        {stock:10,
         img:"/assets/imagenes/pintura1.jpg",
         desc:"Esmalte cremoso"
        },
        {stock:20,
         img:"/assets/imagenes/espejo1.jpg",
         desc:"Esmalte espejado"
        },
        {stock:0,
         img:"/assets/imagenes/accesorio1.jpg",
         desc:"Accesorios "
        }
     ]

    return (
        <div className="contenedorGral">
                    {/* <p>Hola, nombres de ItemListContainer</p>
                <Item pasonombre={nombres[0]} />
                <Item pasonombre={nombres[1]} />
                <Item pasonombre={nombres[2]} /> */}
                <ItemCount productos={productos[0]} />
                <ItemCount productos={productos[1]} />
                <ItemCount productos={productos[2]} />

        </div>
    )
}
export default ItemListContainer