
import './Alert.css';

export function Alert({ message }) {
    return (
     
        <div
        className="container my-5 "
        role="alert"
      >
      
        <span className="estAlert"><strong>{message}</strong></span>
        </div>
    )
  }

