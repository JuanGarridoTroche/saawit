import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { loggedUser, logout } = useContext(AuthContext);

  console.log(loggedUser);
  return loggedUser ? (
    <ul className="logged-user">
      <li>
        <img
          src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${loggedUser.photo}`}
          // src="/logo192.png"
          alt="avatar"
          style={{ width: "25px" }}
          className="avatar"
        />
        <Link to={`users/profile/${loggedUser.id}`} loggedUser={loggedUser} className="username">
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
