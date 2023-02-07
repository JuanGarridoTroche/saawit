import { Link } from "react-router-dom"

export const Header = ()=> {
  return (
    <header>
      <section className="header">
        <Link to="/"><img src="/logo.png" alt="logo-saawit"/></Link>
        <h2>sa<span>a</span>wit</h2>
      </section>
      <input type="search" id="search" placeholder="Busca en Saawit"/>      
      <nav>  
        <ul>
          <li><Link to="/register">Regístrate</Link></li>  
          <li><Link to="/login">Login</Link></li>
        </ul>      
      </nav>
    </header>
  )
}