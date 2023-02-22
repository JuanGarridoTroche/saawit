import "../css/UserProfile.css";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useUserProfile from "../hooks/useUserProfile";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState, useRef} from "react";
import { editUserAvatar, editUserProfile } from "../services";

export const UserProfile = () => {
  const { idUser } = useParams();
  const { user, loading, error } = useUserProfile(idUser);
  const { loggedUser, token } = useContext(AuthContext);
  const avatarInputRef = useRef();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [active, setActive] = useState(''); 
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const avatar = avatarInputRef.current.files;

    const formData =new FormData();    

    formData.set("username", username);
    formData.set("email", email);
    formData.set("bio", bio);
    formData.set("active", active);

    setActive(user.active);

    const body = 
    {
      username, email, bio, active
    }

    editUserProfile({token, body});
    editUserAvatar({token, avatar});
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <ErrorMessage message={error} />;
  // console.log(user);
  // console.log(loggedUser);
  // console.log(token);

  return (
    <section className="user-profile">
      <h2 className="profile">Perfil de usuario {user.active ? "activo" : <span>suspendido</span>}</h2>
      {token && loggedUser && loggedUser.id === user.id ? (
        <form className="user-profile-form" onSubmit={handleSubmit}>          
          <fieldset>
            <h3>Nombre de usuario:</h3>
            <label htmlFor="username" className="summary">Escribe un nombre de usuario</label>
            <input id="username" value={username} placeholder={user.username} onChange={(e)=> setUsername(e.target.value)}/>
          </fieldset>
          <fieldset>
            <h3>Correo electrónico:</h3>
            <label htmlFor="email" className="summary">
              Escribe un correo electrónico válido
            </label>
            <input id="email" value={email} placeholder={user.email} onChange={(e)=> setEmail(e.target.value)}/>
          </fieldset>
          <fieldset>
            <h3>Sobre mi:</h3>
            <label htmlFor="bio" className="summary">
              Una breve descripción sobre ti mismo para mostrar en tu perfil
            </label>
            <textarea id="bio" defaultValue={user.bio} onChange={(e)=> setBio(e.target.value)}></textarea>
          </fieldset>
          <fieldset>
            <h3>Avatar:</h3>
            <label className="summary">
              La imagen debe tener extensión jpg, jpeg, png, gif, bmp, raw o
              webp con un formato cuadrado
            </label>
            {user.photo ? (
              <label htmlFor="avatar">
                <img
                  src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${user.photo}`}
                  alt="subir imágenes de la entrada"
                  className="avatar"
                />
              </label>
            ) : null}
            {user.photo ? (
              <input
                hidden
                id="avatar"
                type="file"
                accept="image/*"
                ref={avatarInputRef}
              />
            ) : (
              <input type="file" />
            )}
          </fieldset>
          <fieldset>
            <h3>Rol:</h3>
            <label>{<span>{user.role}</span>}</label>
          </fieldset>
          <fieldset>
            <h3>Cuenta creada:</h3>
            <label>
              {<span>{new Date(user.createdAt).toLocaleDateString()}</span>}
            </label>
          </fieldset>
          {/* <fieldset>
            <h3>Cuenta:</h3>
            { user.active ? null :
              <label className="summary">Solicita la activación de tu cuenta a través del envío de una solicitud a tu correo electrónico</label>}
            <label>
              <span>{user.active ? "Activa" : <button>Activar</button>}</span>
            </label>
          </fieldset> */}
          <button>Actualizar</button>
        </form>
      ) : (
        <form className="user-profile-form">
          {/* <fieldset>
            <h3>Id. de usuario:</h3>
            <label>{<span>{user.id}</span>}</label>
          </fieldset> */}
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
            {user.photo ? (
              <img
                src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${user.photo}`}
                alt="avatar"
                style={{ width: "25px" }}
                className="avatar"
              />
            ) : (
              "Sin avatar"
            )}
          </fieldset>
          <fieldset>
            <h3>Rol:</h3>
            <label>{<span>{user.role}</span>}</label>
          </fieldset>
          <fieldset>
            <label>
              <h3>Cuenta creada:</h3>
              {<span>{new Date(user.createdAt).toLocaleDateString()}</span>}
            </label>
          </fieldset>
          {/* <fieldset>
            <h3>Cuenta:</h3>
            { user.active ? null :
              <label className="summary">Solicita la activación de tu cuenta a través del envío de una solicitud a tu correo electrónico</label>}            
            <label>              
              <span>{user.active ? "Activa" : "suspendida"}</span>
            </label>
          </fieldset> */}
        </form>
      )}
    </section>
  );
};
