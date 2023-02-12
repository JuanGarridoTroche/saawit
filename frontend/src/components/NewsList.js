import { Link } from "react-router-dom";
import { News } from "./News";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NewsContainer } from "./NewsContainer";

export const NewsList = ({ news, removeNews }) => {
  const { loggedUser } = useContext(AuthContext);
  return news.length ? (
    <>
      <section className="categories">
        <h2>Categorías</h2>
        <Link to="/news/categoria/deportes">deportes</Link>
        <Link to="/news/categoria/videojuegos">videojuegos</Link>
        <Link to="/news/categoria/noticias">noticias</Link>
        <Link to="/news/categoria/programación">programación</Link>
        <Link to="/news/categoria/viajes">viajes</Link>
        <Link to="/news/categoria/tecnología">tecnología</Link>
        <Link to="/news/categoria/música">música</Link>
        <Link to="/news/categoria/memes">memes</Link>
        <Link to="/news/categoria/general">general</Link>
      </section>
      <section className="breaking-news">
        <h2>Últimas noticias</h2>
        {loggedUser ? <NewsContainer /> : null}
        <ul className="news-list">
          {news.map((singleNews) => {
            return (
              <>
                <li key={news.id} className="single-news">
                  <News news={singleNews} removeNews={removeNews}/>
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </>
  ) : (
    <p>No hay noticias disponibles</p>
  );
};
