import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteNewsService } from "../services";

export const News = ({ news, removeNews }) => {

  // console.log(news);
  // Me faltaría traer los datos del usuario
  const { loggedUser, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  // console.log(news.photos[0].name);
  // console.log(loggedUser);

  const deleteNews = async (id) => {
    // alert(`Tweet ${id} borrado!`)
    try {
      // Desde aquí controlamos los errores que pueden ocurrir al borrar una news
      await deleteNewsService({ id, token });
      removeNews(id);
    } catch (error) {
      setError(error.message);
    }
  };
  const photoName = news.photos.map(e => e.name);
  // console.log(photoName);
  
    
  return (
    <>
      <figure>
        <img src="/arrow-up.svg" alt="arrow up" className="arrow-up" />
        <p>{news.feedback}</p>
        <img src="/arrow-down.svg" alt="arrow down" className="arrow-down" />
      </figure>
      <section key={news.id}>
        <p>
          {news.category} · Publicado por{" "}
          <Link to={`/users/profile/${news.idUser}`}>{news.username}</Link> el{" "}
          {new Date(news.createdAt).toLocaleString()}{" "}
        </p>
        <p className="title">{news.title}</p>
        {news.summary ? <p className="summary">{news.summary}</p> : null}
        {photoName ? (
          <a
            href={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${photoName}`}
          >
            <img
              src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${photoName}`}
              alt={news.photos.name}
            />
          </a>
        ) : null}
        <p className="body">{news.body}</p>
        {loggedUser && loggedUser.id === news.idUser ? (
          <button
            onClick={() => {
              if (
                window.confirm(
                  "¿Estás seguro que quieres eliminar esta noticia?"
                )
              )
                deleteNews(news.id);
            }}
          >
            Borrar noticia
          </button>
        ) : null}
      </section>
    </>
  );
};
