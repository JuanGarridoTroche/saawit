import "../css/login.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUserService } from "../services";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUserService({ email, password });
      login(data.token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="login">
      <h2>Iniciar sesión</h2>
      {error ? <p className="error">{error}</p> : null}
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="cuenta de correo"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Contraseña"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Enviar</button>
      </form>
      <section className="dont-forget">
        <p>¿Has olvidado tu nombre de usuario o contraseña ?</p>
        <p>
          ¿Es tu primera vez en saawit? 
          <Link to="/register"> REGISTRARSE</Link>
        </p>
      </section>
    </section>
  );
};
