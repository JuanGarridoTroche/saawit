import { useState } from "react"

export const Register = ()=> {
  const [email, setEmail] =useState('');
  const [pwd, setPwd] = useState('');
  const [repeatedPwd, setRepeatedPwd] = useState('');
  return (
    <section>
      <h1>Página de registro de nuevo usuario</h1>
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </fieldset>
        <fieldset>
          <label htmlFor="pwd">Contraseña</label>
          <input type="password" id="pwd" name="pwd" required />
        </fieldset>
        <fieldset>
          <label htmlFor="repeatedPwd">Repite la contraseña</label>
          <input type="password" id="repeatedPwd" name="repeatedPwd" required />
        </fieldset>
        <button>Date de alta</button>
      </form>
    </section>
  )
}