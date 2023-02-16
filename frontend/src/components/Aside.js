import '../css/Aside.css';
import { Link } from "react-router-dom"


export const Aside =()=> {

  return (
    <section className="categories">
        <h2>Categorías</h2>
        {/* <NewsByCategory category="deportes">deportes</NewsByCategory> */}
        <Link to="/news?category=deportes">deportes</Link>
        <Link to="/news?category=videojuegos">videojuegos</Link>
        <Link to="/news?category=noticias">noticias</Link>
        <Link to="/news?category=programación">programación</Link>
        <Link to="/news?category=viajes">viajes</Link>
        <Link to="/news?category=tecnología">tecnología</Link>
        <Link to="/news?category=música">música</Link>
        <Link to="/news?category=memes">memes</Link>
        <Link to="/news?category=general">general</Link>
        
      </section>
  )
}