import '../css/NotFoundPage.css'
import { Link } from "react-router-dom"

export const NotFoundPage = ()=> {
  return (
    <section className="not-found-container">
      <img src="/404.png" alt="error 404" className="not-found-image"/>
      <Link to={'/'}>volver a inicio</Link>
    </section>
  )
}