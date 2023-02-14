import { useState } from "react"
import { Link } from "react-router-dom"
import { Auth } from "./Auth"
import { Search } from "./Search"

export const Header = ()=> {
  const [search, setSearch] = useState('')
  return (
    <header>
      <section className="brand">
        <Link to="/"><img src="/logo.png" alt="logo-saawit"/></Link>
        <h2>sa<span style={{color:"rgb(255, 69, 0)"}}>a</span>wit</h2>
      </section>
      <input type="search" id="search" placeholder="Busca en Saawit" onChange={(e)=> {
        setSearch(e.target.value)
        
        
        return <Search search={search}/>        
      }}/>      
      <nav>  
        <Auth/>     
      </nav>
    </header>
  )
}