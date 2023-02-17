import 'react-slideshow-image/dist/styles.css'
import '../css/Slide.css'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteNewsService } from "../services";
import { Slide } from 'react-slideshow-image';

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
        {news.photos.map((photo) => {
          return (
            <Slide autoplay='false'>
              <div className="each-slide-effect">
              <div
                style={{'backgroundImage': `url(${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${photo.name})`}}
                
              ><span>Slide {photo.id}</span></div>
              </div>
            </Slide>
          );
        })}
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