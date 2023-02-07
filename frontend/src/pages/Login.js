export const Login = ()=> {
  const handleSubmit = async ()=> {
    // const user = await fetch("")
  }

  return (
    <section>
      <h1>Login de usuario</h1>
      <form onSubmit={handleSubmit}>
        <label id="email">email </label>
        <input name="email" type="email" placeholder="cuenta de correo"/>
        <label id="password">Contraseña </label>
        <input name="password" type="password"/>
        <button >Enviar</button>
      </form>
    </section>
  )
}