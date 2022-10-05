
import {useState } from "react"
import {useAuth}  from "../context/LoginContext.jsx"
import {  useNavigate} from "react-router-dom"
import { Alert } from "../alert/Alert";

export function Register() {
    const { signup, logout } = useAuth()

    const [user, setUser] = useState({
        email: "",
        password:""
    })
    
    const [error, setError] = useState("")
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
          await signup(user.email, user.password);
          alert ("Alta satisfactoria")
          setUser([])
        } catch (error) {
          setError(error.message);
        }
      };

      const handleLogout= async () => {
          await logout();
          navigate("/");
      }

      return (
        <div className="conatainer my-5">
          {error && <Alert message={error} />}
    
          <form
            onSubmit={handleSubmit}
            className="container py-5"
          >
            <div className="mb-4">
              <label
                htmlFor="email"
              ><strong>
                Email
              </strong></label>
              <input
                type="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="form-control my-2"
                placeholder="Ingrese su correo"
              />
            </div>
    
            <div className="mb-4">
              <label
                htmlFor="password"
              ><strong>
                Password
              </strong></label>
              <input
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="form-control my-2"
                placeholder="*************"
              />
            </div>
            <div>
                    <button className="btn btn-success my-5 mx-3">
                    Registrar
                    </button>

                    <button className="btn btn-success my-5 mx-3"
                    onClick={handleLogout}
                    navigate to ="/">
                    Finalizar
                    </button>

            </div>
          </form>
        </div>
      );
    }
