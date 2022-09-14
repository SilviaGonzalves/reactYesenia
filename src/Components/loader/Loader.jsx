import Spinner from 'react-bootstrap/Spinner';
import "./Loader.css"

const Loader = () => {
  return (
    <div>

        <Spinner animation="border" variant="dark" className='loader'/>

    </div>
  )
}

export default Loader