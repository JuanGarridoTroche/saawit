import { Link } from "react-router-dom";
import { News } from "./News";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NewsContainer } from "./NewsContainer";

export const NewsList = ({ news }) => {
  const { loggedUser } = useContext(AuthContext);
  return news.length ? (
    <>
      <section className="categories">
        <h2>Categorías</h2>
        <Link to="/filter?category=deportes">deportes</Link>
        <Link to="/filter?category=videojuegos">videojuegos</Link>
        <Link to="/filter?category=noticias">noticias</Link>
        <Link to="/filter?category=programación">programación</Link>
        <Link to="/filter?category=viajes">viajes</Link>
        <Link to="/filter?category=tecnología">tecnología</Link>
        <Link to="/filter?category=música">música</Link>
        <Link to="/filter?category=memes">memes</Link>
        <Link to="/filter?category=general">general</Link>
      </section>
      <section className="breaking-news">
        <h2>Últimas noticias</h2>
        {loggedUser ? <NewsContainer /> : null}
        <ul className="news-list">
          {news.map((singleNews) => {
            return (
              <>
                <li key={news.id} className="single-news">
                  <News news={singleNews} />
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
