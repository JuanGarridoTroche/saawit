import '../css/Header.css';
import { useState } from "react"
import { Link } from "react-router-dom"
import useSearch from "../hooks/useSearch"
import { Auth } from "./Auth"
import { Search } from "./Search"

export const Header = ()=> {
  const [search, setSearch] = useState('')  
  const {news, errorMessage, loading, searchParams, setSearchParams} = useSearch();
  
  const handleSearch = (event)=> {
    event.preventDefault();

    return <Search search={search}/>  

  }

  return (
    <header>
      <section className="brand">
        <Link to="/"><img src="/logo.png" alt="logo-saawit"/></Link>
        <h2>sa<span style={{color:"rgb(255, 69, 0)"}}>a</span>wit</h2>
      </section>
      <form onSubmit={handleSearch} className='search-form'>
        <input type="search" value={search} placeholder="Busca en Saawit" onChange={(e)=> {
          setSearch(e.target.value)                    
        }}/>  
        <button>Buscar</button>
      </form>    
      <nav>  
        <Auth/>     
      </nav>
    </header>
  )
}