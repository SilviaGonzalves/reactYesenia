import React from 'react'
import { Button } from 'reactstrap'


const Contador = ({stock, counter, setCounter, handleAgregar}) => {
   
    // const [counter, setCounter] = useState(0)

    const handleSumar = () => {
        if (counter < stock){
            setCounter(counter + 1)
        }
    
       }
    
    const handleRestar = () => {
        if (counter > 0 ) {
            setCounter(counter - 1)
        }
    }

  return (
    <div>
      <div className="alinear">
            <Button onClick={handleRestar} className="mx-2 btn btn-primary"> - </Button>
            <span className="mx-2">{counter}</span>
            <Button onClick={handleSumar} className="mx-2 btn btn-primary"> + </Button>
      </div>
            <h3> {"\n"} </h3>
            <Button onClick={handleAgregar} className='my-2' disabled={stock<=0} >Añadir al carrito</Button> 
    </div>
  )
}



export default Contador