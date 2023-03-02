import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { newsService, voteNewsService } from "../services";
import Slider from "./Slider";

export const News = ({ news, removeNews, control, setControl }) => {
  const { loggeduser, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Eliminamos una noticia
  const deleteNews = async (id) => {
    try {
      // Desde aquí controlamos los errores que pueden ocurrir al borrar una news
      const method = "DELETE";
      await newsService({ id, token, method });
      setControl(!control);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  // Seleccionamos una noticia
  const readNews = async (id) => {
    try {
      // Desde aquí controlamos los errores que pueden ocurrir al borrar una news
      const method = "GET";
      await newsService({ id, token, method });
    } catch (error) {
      setError(error.message);
    }
  };

  // Añadir voto a noticias de otros usuarios
  const addVote = async (id, vote) => {
    try {
      const method = "POST";
      // const body = JSON.stringify({"like": vote});
      const body = { like: vote };

      await voteNewsService({ token, body, id, method });
      setControl(!control);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <figure>
        <img
          src="/arrow-up.svg"
          alt="arrow up"
          className="arrow arrow-up"
          onClick={() => {
            addVote(news.id, true);
          }}
        />
        <p className="votes">{news.feedback}</p>
        <img
          src="/arrow-down.svg"
          alt="arrow down"
          className="arrow arrow-down"
          onClick={() => {
            addVote(news.id, false);
          }}
        />
      </figure>
      <section key={news.id} className="single-news-container">
        <p className="publish-news">
          {news.category} · Publicado por 
          <Link to={`/users/profile/${news.idUser}`}> {news.username}</Link> el
          {new Date(news.createdAt).toLocaleString()}
        </p>
        <p className="title">{news.title}</p>
        {news.summary ? <p className="summary">{news.summary}</p> : null}
        <Slider photos={news.photos}/>
        <p className="body">{news.body}</p>
        {loggeduser && loggeduser.id === news.idUser ? (
          <img
            src="/trash.svg"
            alt="delete news"
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
        {loggeduser && loggeduser.id === news.idUser ? (
          <img src="/pencil.svg" alt="edit news" className="edit-news" onClick={()=>{
            readNews(news.id);
            navigate(`/news/${news.id}`)
          }}/>
        ) : null}
      </section>
    </>
  );
};
