import { useAuth } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Administradores = () => {
  // const { actualizarDB } = useCartContext()

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout= async () => {
    await logout();
    navigate("/");
}


  return (
    <div className='container my-5 mx-3'>

            <h2>
              Página para Administradores
            </h2>

                       
            <Link to="/actualizarDB" className="btn btn-success my-5 mx-3">
              Actualizar DB
            </Link>


            <Link to="/register" className="btn btn-success my-5 mx-3">
              Registrar Administradores
            </Link>

            <button className="btn btn-success my-5 mx-3"
            onClick={handleLogout}
             >
              Finalizar
            </button>
    </div>
  )
}

export default Administradores;
