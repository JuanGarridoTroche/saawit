import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { newsService, voteNewsService } from "../services";


export const News = ({ news, removeNews }) => {
  const { loggedUser, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const deleteNews = async (id) => {
    // alert(`Tweet ${id} borrado!`)
    try {
      // Desde aquí controlamos los errores que pueden ocurrir al borrar una news
      const method = 'DELETE';
      await newsService({ id, token, method });
      removeNews(id); 
      console.log(error);    
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const readNews = async (id) => {
    // alert(`Tweet ${id} borrado!`)
    try {
      // Desde aquí controlamos los errores que pueden ocurrir al borrar una news
      const method = 'GET';
      await newsService({ id, token, method });
      removeNews(id);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const addVote = async (id, vote)=> {   

    try {
      const method = 'POST';
      // const body = JSON.stringify({"like": vote});
      const body = {"like": vote};
     

      console.log(body);
      

      console.log("ID: ", id, "Like: ", body);
      await voteNewsService({token, body, id, method})
      alert(body.like ? 'voto positivo' : 'voto negativo')
      
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <figure>
        <img src="/arrow-up.svg" alt="arrow up" className="arrow arrow-up" onClick={()=>{
          addVote(news.id, true);
        }}/>
        <p>{news.feedback}</p>
        <img src="/arrow-down.svg" alt="arrow down" className="arrow arrow-down" onClick={()=> {
          addVote(news.id, false);
        }}/>
      </figure>
      <section key={news.id} className="single-news-container">
        <p>
          {news.category} · Publicado por{" "}
          <Link to={`/users/profile/${news.idUser}`}>{news.username}</Link> el{" "}
          {new Date(news.createdAt).toLocaleString()}{" "}
        </p>
        <p className="title">{news.title}</p>
        {news.summary ? <p className="summary">{news.summary}</p> : null}
        {news.photos.map((photo) => {
          return (
            <a
              href={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${photo.name}`} 
              key={photo.id}
            >
              <img
                src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${photo.name}`}
                alt={photo.name}
                className="photos"
              />
            </a>
          );
        })}
        <p className="body">{news.body}</p>
        {loggedUser && loggedUser.id === news.idUser ? (         
            <img 
            src="/trash.svg" alt="delete news"
            className="delete-news"
            onClick={() => {
                  if (
                    window.confirm(
                      "¿Estás seguro que quieres eliminar esta noticia?"
                    )
                  )
                    deleteNews(news.id);
                }}
            />
        ) : null}
        {loggedUser && loggedUser.id === news.idUser ? (         
            <img 
            src="/pencil.svg" alt="edit news"
            className="edit-news"
            onClick={() => {             
              // navigate(`/news/${news.id}`)
              // <ReadNews id={news}/>
              readNews(news.id);
                }}
            />
        ) : null}
        
      </section>
    </>
  );
};
