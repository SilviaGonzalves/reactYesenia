import { productos } from "../datos/datos"

const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
            // cuerpo de la promesa
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } )
}
export default pedirDatos