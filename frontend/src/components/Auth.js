import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Aside } from "./Aside";
import { NewsContainer } from "./NewsContainer";

export const Auth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [news, setNews] = useState();
  const { loggeduser, logout } = useContext(AuthContext);
  // console.log(loggeduser);
  return loggeduser ? (
    <>
      <ul className={`logged-user ${isOpen && "open"}`}>
        <li className="subtitle">Usuario:</li>
        <li>
          {loggeduser.photo ? (
            <img
              src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${loggeduser.photo}`}              
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

        {loggeduser ? 
        <li className="subtitle">Crear noticia</li>
        : null}
        <li onClick={()=>{setIsOpen(!isOpen)}} className="menu" >{loggeduser ? <NewsContainer /> : null}</li>
        <li className="subtitle">Categorías</li>
        <li onClick={()=>{setIsOpen(!isOpen)}} className="menu"><Aside setNews={setNews}/></li>
        <li className="subtitle">Filtros</li>
        <li className="menu"></li>
        <li className="subtitle">Sobre nosotros</li>
        <li><Link to="/about" onClick={()=>{
          setIsOpen(!isOpen);
        }}>sobre nosotros</Link></li>
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
    <li className="subtitle">Usuario:</li>
      <li>
        <Link to="/register" onClick={()=>{setIsOpen(!isOpen)}}>Registro</Link>
      </li>
      <li>
        <Link to="/users/login" onClick={()=>{setIsOpen(!isOpen)}}>Iniciar sesión</Link>
      </li>  
      <li className="menu"><Aside setNews={setNews} onClick={()=>{setIsOpen(!isOpen)}}/></li>
      <li className="subtitle">Filtro:</li>
      <li className="subtitle">Sobre nosotros:</li>
      <li className="menu"><Link to="/about" onClick={()=>{
          setIsOpen(!isOpen);
        }}>sobre nosotros</Link></li> 
        
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
