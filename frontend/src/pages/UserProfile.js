import { useParams } from "react-router-dom"
import { ErrorMessage } from "../components/ErrorMessage";
import useUserProfile from "../hooks/useUserProfile";

export const UserProfile = () => {
  const {idUser} = useParams();
  const {user, loading, error} = useUserProfile(idUser);

  // console.log(idUser);

  if(loading) return <p>Cargando...</p>
  if(error) return <ErrorMessage message={error} />

  
  return (
    <section>
      <h2>Perfil del usuario</h2>
      <form>
        <fieldset>
      <label>Nombre de usuario: {<span>{user.username}</span>}</label>      
      </fieldset>
      <fieldset>
        <label>email: {<span>{user.email}</span>}</label>
      </fieldset>
      <fieldset>
      <label>Cuenta creada desde: {<span>{new Date(user.createdAt).toLocaleDateString()}</span>}</label>
      </fieldset>
      {user.photo ? 
      <fieldset>
        <label>email: {<span>{user.email}</span>}</label>
      </fieldset>
      : null}
      <fieldset>
      <label>Cuenta: <span>{user.active ? 'Activa' : 'Desactivada'}</span></label>        
      </fieldset>
      </form>
    </section>
  )
}