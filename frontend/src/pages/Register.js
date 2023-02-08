import { useState } from "react"
import { registerUserService } from "../services";

export const Register = ()=> {
  const [email, setEmail] =useState('');
  const [password, setPwd] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] =useState('');
  const [error,setError] = useState('');

  const handleForm = async (e) => { 
    e.preventDefault();
    setError('');   
    if(password.length < 8) {
      setError('La contraseña debe tener más de 7 caracteres.');      
      return;
    }
    
    try {
      await registerUserService({ username, email, password, bio });
      
      
    } catch (error) {
      setError(error.message);
    }

  }

  return (
    <section className="register">
      <h1>Página de registro de nuevo usuario</h1>
      <p>{error}</p>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="username">Nombre de usuario<span className="required"> *</span></label>
          <input type="text" id="username" name="username" placeholder="nombre de usuario..." onChange={(e) => {
            setUsername(e.target.value)
          }} required />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email<span className="required"> *</span></label>
          <input type="email" id="email" name="email" placeholder="escribe tu correo..." onChange={(e) => {
            setEmail(e.target.value)
          }} required />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Contraseña<span className="required"> *</span></label>
          <input type="password" id="password" name="password" required onChange={(e) => {
            setPwd(e.target.value);
          }}/>
        </fieldset>
        <fieldset>
          <label htmlFor="bio">Acerca de ti</label>
          <textarea type="text" id="bio" name="bio" rows="4" cols="50" onChange={(e)=> {
            setBio(e.target.value);
          }} />
        </fieldset>
        <button>Enviar</button>
      </form>
      
    </section>
  )
}

