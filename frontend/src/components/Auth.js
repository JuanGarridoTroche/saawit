import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loggeduser, logout } = useContext(AuthContext);
  // console.log(loggeduser);
  return loggeduser ? (
    <>
      <ul className={`logged-user ${isOpen && "open"}`}>
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
            onClick={()=>{setIsOpen(!isOpen)}}
          >
            {loggeduser.username}
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              <Link to="/" />;
              logout();
            }}
          >
            Salir
          </button>
        </li>
      </ul>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  ) : (
    <>
    <ul className={`logged-user ${isOpen && "open"}`}>
      <li>
        <Link to="/register" onClick={()=>{setIsOpen(!isOpen)}}>Registro</Link>
      </li>
      <li>
        <Link to="/users/login" onClick={()=>{setIsOpen(!isOpen)}}>Iniciar sesión</Link>
      </li>      
    </ul>
    <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};
