import { Link } from "react-router-dom"

export const NotFoundPage = ()=> {
  return (
    <section>
      <img src="/404.png" alt="error 404"/>
      <Link to={'/'}>volver a inicio</Link>
    </section>
  )
}