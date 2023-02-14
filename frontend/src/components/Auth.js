import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { loggedUser, logout } = useContext(AuthContext);
  return loggedUser ? (
    <ul>
      <li>
        <img
          // src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/uploads/${loggedUser.name}`}
          src="/logo192.png"
          alt="avatar"
          style={{ width: "25px" }}
        />
        <Link to={`users/profile/${loggedUser.id}`} loggedUser={loggedUser}>
          {loggedUser.username}
        </Link>
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
