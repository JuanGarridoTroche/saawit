import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { loggeduser, logout } = useContext(AuthContext);
  // console.log(loggeduser);
  return loggeduser ? (
    <ul className="logged-user">
      <li>
        {loggeduser.photo ? (
          <img
            src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${loggeduser.photo}`}
            // src="/logo192.png"
            alt="avatar"
            style={{ width: "25px" }}
            className="avatar"
          />
        ) : null}
        <Link
          to={`users/profile/${loggeduser.id}`}
          loggeduser={loggeduser}
          className="username"
        >
          {loggeduser.username}
        </Link>
      </li>
      <li>
        <button
          onClick={() => {
            <Link to='/'/>
            logout();
          }}
        >
          Salir
        </button>
      </li>
    </ul>
  ) : (
    <ul className="logged-user">
      <li>
        <Link to="/register">Registro</Link>
      </li>
      <li>
        <Link to="/users/login">Iniciar sesión</Link>
      </li>
    </ul>
  );
};
