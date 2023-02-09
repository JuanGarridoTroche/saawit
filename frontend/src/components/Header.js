import { Link } from "react-router-dom"
import { Auth } from "./Auth"

export const Header = ()=> {
  return (
    <header>
      <section className="brand">
        <Link to="/"><img src="/logo.png" alt="logo-saawit"/></Link>
        <h2>sa<span style={{color:"rgb(255, 69, 0)"}}>a</span>wit</h2>
      </section>
      <input type="search" id="search" placeholder="Busca en Saawit"/>      
      <nav>  
        <Auth/>     
      </nav>
    </header>
  )
}