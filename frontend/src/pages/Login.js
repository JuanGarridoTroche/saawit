import { useState } from "react"
import { loginUserService } from "../services";

export const Login = ()=> {
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e)=> {
    e.preventDefault();
    setError('');

    try {
      await loginUserService();
      
    } catch (error) {
      setError(error.message)
    }

  }

  return (
    <section>
      <h1>Login de usuario</h1>
      {error ? <p>{error}</p> : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email </label>
        <input id="email" name="email" type="email" placeholder="cuenta de correo" required onChange={(e) => {
          setEmail(e.target.value)
        }}/>
        <label htmlFor="password">Contraseña </label>
        <input id="password" name="password" type="password" required onChange={(e)=> {
          setPassword(e.target.value)
        }}/>
        <button>Enviar</button>
      </form>
    </section>
  )
}