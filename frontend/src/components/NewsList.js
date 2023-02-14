import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { NewsContainer } from "./NewsContainer";
// import { NewsByCategory } from "./NewsByCategory";
// import { LoadingContent } from "./LoadingContent";
import { News } from "./News";

export const NewsList = ({ news, removeNews }) => {
  const { loggedUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    const loadNewsBySearch = async ()=> {
      try {
        loading(true);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    }
    loadNewsBySearch();
  }, [news, loading])

  return news.length ? (
    <>
      <section className="categories">
        <h2>Categorías</h2>
        {/* <NewsByCategory category="deportes">deportes</NewsByCategory> */}
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
        {loggedUser ? <NewsContainer /> : null}
        <h2>Últimas noticias</h2>
        <ul className="news-list">
          {news.map((singleNews) => {
            return (
              <>
                <li key={news.id} className="single-news">
                  <News news={singleNews} removeNews={removeNews} />
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
