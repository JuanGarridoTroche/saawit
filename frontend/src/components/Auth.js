import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { loggedUser, logout} = useContext(AuthContext);
  return loggedUser ? (
    <p>
      Conectado como {loggedUser.username} <button onClick={()=>{logout()}}>Salir</button>
    </p>
     ) : (
    <ul>  
      <li>      
        <Link to="/register">Registro</Link>
      </li>
      <li>
        <Link to="/users/login">Iniciar sesión</Link>
      </li>
      {/* <li><Link to="/news/top">Top ranked news</Link></li> */}
    </ul>
  );
};
