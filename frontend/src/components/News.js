import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteNewsService } from "../services";


export const News =  ({ news, removeNews }) => {
  // Me faltaría traer los datos del usuario
  const {loggedUser, token} =useContext(AuthContext);
  const [error, setError] = useState('');
  // console.log(news);
  // console.log(loggedUser);
  
  const deleteNews = async (id) => {
    // alert(`Tweet ${id} borrado!`)
    try {
      // Desde aquí controlamos los errores que pueden ocurrir al borrar una news
      await deleteNewsService({id, token});
      removeNews(id);
      
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <figure>
        <img src="/arrow-up.svg" alt="arrow up" className="arrow-up"/>
        <p>{news.feedback}</p>
        <img src="/arrow-down.svg" alt="arrow down" className="arrow-down"/>
      </figure>
      <section key={news.id}>
        <p>{news.category} · Publicado por {news.idUSer} el {new Date(news.createdAt).toLocaleString()} </p>
        <p className="title">{news.title}</p>
        <p className="summary">{news.summary}</p>
        <a href={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/uploads/${news.name}`}><img src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/uploads/${news.name}`} alt={news.name}/></a>
        <p className="body">{news.body}</p>  
        {loggedUser && loggedUser.id === news.idUSer ? <button onClick={()=> deleteNews(news.id)}>Borrar noticia</button> : null}   
      </section>
    </>
  );
};
