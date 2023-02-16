import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { NewsContainer } from "./NewsContainer";
// import { NewsByCategory } from "./NewsByCategory";
// import { LoadingContent } from "./LoadingContent";
import { News } from "./News";
import { Aside } from "./Aside";

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
      <Aside />

      <section className="breaking-news">
        {loggedUser ? <NewsContainer /> : null}
        <h2>Últimas noticias</h2>
        <ul className="news-list">
          {news.map((singleNews) => {
            return (
                <li key={singleNews.id} className="single-news">
                  <News news={singleNews} removeNews={removeNews} />
                </li>              
            );
          })}
        </ul>
      </section>
    </>
  ) : (
    <p>No hay noticias disponibles</p>
  );
};
