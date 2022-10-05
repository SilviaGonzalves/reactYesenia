import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/LoginContext";
import { Alert } from "../alert/Alert";

export function LoginScreen() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const { login, logout, resetPassword } = useAuth();

  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/administradores") 
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });


  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Escribe un correo electrónico para resstablecer la contraseña");
    try {
      await resetPassword(user.email);
      setError('Te enviamos un correo electrónico. Revisa tu bandeja de entrada')
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout= async () => {
    await logout();
    navigate("/");
}


  return (
    <div className="w-full max-w-xs m-auto">
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
            name="email"
            id="email"
            onChange={handleChange}
            className="form-control my-2"
            placeholder="Ingresa tu correo"
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
            name="password"
            id="password"
            onChange={handleChange}
            className="form-control my-2"
            placeholder="*************"
          />
        </div>

     
        <div >
          <button
            className="btn btn-success my-5 mx-3"
            type="submit"
          >
            Ingresar
          </button>
          <a
            className="btn btn-success my-5 mx-3"
            href="#!"
            onClick={handleResetPassword}
          >
            Olvidaste tu contraseña?
          </a>

          <button className="btn btn-success my-5 mx-3"
            onClick={handleLogout}
          >
          Finalizar
          </button>

        </div>
      </form>

    </div>
  );
}