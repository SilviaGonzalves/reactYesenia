import React from 'react'
import { useState} from "react"



const Contador = ({stock}) => {
   
    const [counter, setCounter] = useState(0)

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
        
       <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
       <span className="mx-2">{counter}</span>
       <button onClick={handleSumar} className="btn btn-primary">+</button>
    </div>
  )
}



export default Contador