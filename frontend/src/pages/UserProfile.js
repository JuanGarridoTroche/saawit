import { useParams } from "react-router-dom"
import { ErrorMessage } from "../components/ErrorMessage";
import useUserProfile from "../hooks/useUserProfile";

export const UserProfile = () => {
  const {idUser} = useParams();
  const {user, loading, error} = useUserProfile(idUser);

  console.log(idUser);

  if(loading) return <p>Cargando...</p>
  if(error) return <ErrorMessage message={error} />

  
  return (
    <section>
      <h2>Perfil del usuario</h2>
      <label>Nombre de usuario: </label>
      <p>{user.data.username}</p>
    </section>
  )
}