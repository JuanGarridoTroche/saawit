import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { loggedUser, logout } = useContext(AuthContext);
  return loggedUser ? (
    <ul>
      <li>
        <img
          src={`./uploads/${loggedUser.photo}`}
          alt="avatar"
        /> 
         {loggedUser.username}
      </li>
      <li>
        <button
          onClick={() => {
            logout();
          }}
        >
          Salir
        </button>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <Link to="/register">Registro</Link>
      </li>
      <li>
        <Link to="/users/login">Iniciar sesión</Link>
      </li>
    </ul>
  );
};
