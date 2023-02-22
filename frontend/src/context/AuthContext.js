import { createContext, useEffect, useState } from "react";
import { getloggedUserDataService } from "../services";

export const AuthContext = createContext();

// Esta lógica de contexto nos permite envolver children (<App/>). Este contexto es una forma de mandar datos, funciones y valores entre componentes sin tener que pasar por todo el árbol de componentes.
export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loggeduser, setloggedUser] = useState(null);

  // Con este hook, useEffect, almacenamos el token en cuanto te logueas en la aplicación y queda guardado en localstorage aunque cierres la aplicación y la abras minutos más tarde (según tengas definido el tiempo de caducidad del token en nuestro backend). Siempre que se modifique el token, se cargará de nuevo el useEffect, almacenando nuevamente el token.
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  // Se ejecuta cuando carga el token y sacamos todos los datos del usuario que tiene dentro el token (id y role)
  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getloggedUserDataService({ token });
        setloggedUser(data);
      } catch (error) {
        logout();
      }
    };
    if (token) getUserData();
  }, [token]);

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken("");
    setloggedUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, loggeduser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
