import { Link } from "react-router-dom"
import { Login } from "./Login"

export const Header = ()=> {
  return (
    <header>
      <Link to="/"><img src="/logo.png" alt="logo-saawit"/></Link>
      <h2>sa<span>a</span>wit</h2>
      <nav>
        <input type="search" id="search"/>
        <Login/>
        <label>registered</label>
      </nav>
    </header>
  )
}