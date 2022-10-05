import { useAuth } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const ActualizarDB = () => {

    const { logout } = useAuth();

    const navigate = useNavigate();
  
    const handleLogout= async () => {
      await logout();
      navigate("/");
  }

  return (
    <div className='container my-5 mx-5'>
           
    <h2> <strong>Esta sección solo está permitida para </strong></h2>

    <h2> <strong>     personal informático (A/B/M  de la DB)   </strong></h2>

    <h2> <strong>     "EN DESARROLLO"   </strong></h2>

    <button className="btn btn-success my-5 mx-3"
            onClick={handleLogout}
    >
        Finalizar
    </button>

    </div>
  )
}

export default ActualizarDB