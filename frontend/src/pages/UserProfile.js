import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useUserProfile from "../hooks/useUserProfile";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const UserProfile = () => {
  const { idUser } = useParams();
  const { user, loading, error } = useUserProfile(idUser);
  const { loggedUser, token } = useContext(AuthContext);
  

  if (loading) return <p>Cargando...</p>;
  if (error) return <ErrorMessage message={error} />;
  console.log(loggedUser);

  return (
    <section className="user-profile">
      <h2>Perfil del usuario</h2>
      {typeof(loggedUser.id) === typeof(user.id) && loggedUser.username === user.id ? (
        <form className="user-profile-form">
          <fieldset>
            <label>Id. de usuario: {<span>{user.id}</span>}</label>
          </fieldset>
          <fieldset>
            <label>Nombre de usuario: {<span>{user.username}</span>}</label>
          </fieldset>
          <fieldset>
            <label>email: {<span>{user.email}</span>}</label>
          </fieldset>
          <fieldset>
            <label>Biografía: {<span>{user.bio}</span>}</label>
          </fieldset>
          <fieldset>
            <label>Avatar: {<span>{user.photo}</span>}</label>
          </fieldset>
          <fieldset>
            <label>Rol: {<span>{user.role}</span>}</label>
          </fieldset>
          <fieldset>
            <label>
              Cuenta creada desde:{" "}
              {<span>{new Date(user.createdAt).toLocaleDateString()}</span>}
            </label>
          </fieldset>
          {user.photo ? (
            <fieldset>
              <label>email: {<span>{user.email}</span>}</label>
            </fieldset>
          ) : null}
          <fieldset>
            <label>
              Cuenta: <span>{user.active ? "Activa" : "Desactivada"}</span>
            </label>
          </fieldset>
        </form>
      ) : (
        <form className="user-profile-form">
          <fieldset>
            <label>Id. de usuario: {<span>{user.id}</span>}</label>
          </fieldset>
          <fieldset>
            <label>Nombre de usuario: {<span>{user.username}</span>}</label>
          </fieldset>
          <fieldset>
            <label>email: {<span>{user.email}</span>}</label>
          </fieldset>
          <fieldset>
            <label>Biografía: {<span>{user.bio}</span>}</label>
          </fieldset>
          <fieldset>
            <label>Avatar: {<span>{user.photo}</span>}</label>
          </fieldset>
          <fieldset>
            <label>Rol: {<span>{user.role}</span>}</label>
          </fieldset>
          <fieldset>
            <label>
              Cuenta creada desde:{" "}
              {<span>{new Date(user.createdAt).toLocaleDateString()}</span>}
            </label>
          </fieldset>
          {user.photo ? (
            <fieldset>
              <label>email: {<span>{user.email}</span>}</label>
            </fieldset>
          ) : null}
          <fieldset>
            <label>
              Cuenta: <span>{user.active ? "Activa" : "Desactivada"}</span>
            </label>
          </fieldset>
        </form>
      )}
    </section>
  );
};
