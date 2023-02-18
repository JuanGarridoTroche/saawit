import '../css/UserProfile.css'
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useUserProfile from "../hooks/useUserProfile";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const UserProfile = () => {
  const { idUser } = useParams();
  const { user, loading, error } = useUserProfile(idUser);
  const { loggedUser, token } = useContext(AuthContext);

  const handleSubmit = ()=> {
    alert('Actualizando el perfil de usuario')
  }
  

  if (loading) return <p>Cargando...</p>;
  if (error) return <ErrorMessage message={error} />;
  console.log(user);
  console.log(loggedUser);
  // console.log(token);

  return (
    <section className="user-profile">
      <h2>Perfil del usuario</h2>
      {token && loggedUser && loggedUser.id === user.id ? (
        <form className="user-profile-form" onSubmit={handleSubmit}>
          <h2>Usuario logueado: {loggedUser ? loggedUser.id : null}</h2>
          {/* <h3>{loggedUser.id === user.id ? `viendo mi perfil de usuario ${loggedUser.id}` : `Viendo el perfil de otro usuario (${loggedUser.id} distinto de ${user.id})`}</h3> */}
          <fieldset>
            <label>Id. de usuario: {<span>{user.id}</span>}</label>
          </fieldset>
          <fieldset>
            <h3>Nombre de usuario:</h3>
            <input placeholder={user.username}/>            
          </fieldset>
          <fieldset>
          <h3>Correo electrónico:</h3>
          <input placeholder={user.email}/>            
          </fieldset>
          <fieldset>          
          <h3>Sobre mi:</h3>
          <textarea>{user.bio}</textarea>
            {/* <label>Biografía: {<span>{user.bio}</span>}</label> */}
          </fieldset>
          <fieldset>
            <h3>Avatar:</h3>
            <img
            src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${user.photo}`}            
            alt="avatar"
            style={{ width: "25px" }}
            className="avatar"
          />
          {/* {user.photo ? (            
              <img
                src={URL.createObjectURL(user.photo)}
                alt="preview"
                style={{ width: "100px" }}
              />            
          ) : null} */}
            {/* <img src={`http://localhost:4000/${user.photo}`} alt={user.photo} ><input type='file' hidden/></img> */}
            {/* <label>Avatar: {<span>{user.photo}</span>}</label> */}
          </fieldset>
          <fieldset>
            <h3>Rol:</h3>
            <label>{<span>{user.role}</span>}</label>
          </fieldset>
          <fieldset>
            <h3>Cuenta creada:</h3>
            <label>{<span>{new Date(user.createdAt).toLocaleDateString()}</span>}
            </label>
          </fieldset>
          {/* {user.photo ? (
            <fieldset>
              <label>email: {<span>{user.email}</span>}</label>
            </fieldset>
          ) : null} */}
          <fieldset>
            <h3>Cuenta activa:</h3>            
            <label>
              <span>{user.active ? "Activa" : "suspendida"}</span>
            </label>
          </fieldset>
          <button>Actualizar</button>
        </form>
      ) : (
        <form className="user-profile-form">
          <h2>Perfil de usuario sin estar logueado</h2>
          <h3>Viendo el perfil de un usuario sin loguearme</h3>
          <fieldset>
          <h3>Id. de usuario:</h3>
            <label>{<span>{user.id}</span>}</label>
          </fieldset>
          <fieldset>
          <h3>Nombre de usuario:</h3>
            <label>{<span>{user.username}</span>}</label>
          </fieldset>
          <fieldset>
          <h3>Cuenta de correo:</h3>
            <label>{<span>{user.email}</span>}</label>
          </fieldset>
          <fieldset>
          <h3>Sobre mi:</h3>
            <label>{<span>{user.bio}</span>}</label>
          </fieldset>
          <fieldset>
          <h3>Avatar:</h3>
            <label>{<span>{user.photo}</span>}</label>
          </fieldset>
          <fieldset>
          <h3>Rol:</h3>
            <label>{<span>{user.role}</span>}</label>
          </fieldset>
          <fieldset>
            <label>
            <h3>Cuenta creada::</h3>              
              {<span>{new Date(user.createdAt).toLocaleDateString()}</span>}
            </label>
          </fieldset>
          <fieldset>
          <h3>Cuenta activa:</h3>
            <label>
              Cuenta: <span>{user.active ? "Activa" : "Desactivada"}</span>
            </label>
          </fieldset>
        </form>
      )}
    </section>
  );
};
