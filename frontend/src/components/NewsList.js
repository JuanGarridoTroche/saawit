import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { News } from "./News";
import { NewsContainer } from "./NewsContainer";

export const NewsList = ({ news, setNews }) => {
  const [order, setOrder] = useState("createdAt");
  const [direction, setDirection] = useState("ASC");
  const { loggedUser } = useContext(AuthContext);

  const filterNews = (e) => {
    e.stopPropagation();

    let filteredNews;

    if (order === "votes" && direction === "ASC") {
      filteredNews = news.sort((a, b) => a.totalVotes - b.totalVotes);
    } else if (order === "votes" && direction === "DESC") {
      filteredNews = news.sort((a, b) => b.totalVotes - a.totalVotes);
    } else if (order === "createdAt" && direction === "ASC") {
      filteredNews = news.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else {
      filteredNews = news.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
    // console.log(filteredNews);
    setNews([...filteredNews]);
  };

  const filterNewsBestVote = (e) => {
    const todayNews = news.filter((e) => {
      const day = new Date().toISOString().slice(0, 10);
      return e.createdAt >= day;
    });

    console.log(todayNews);

    todayNews.sort((a, b) => b.totalVotes - a.totalVotes);


    setNews([...todayNews]);
  };

  return (
    <section className="breaking-news" id="up">
      {loggedUser ? <NewsContainer /> : null}
      <h2>Últimas noticias</h2>
      <div className="filter-container">
        <label
          className="best-vote"
          onClick={() => {
            filterNewsBestVote();
          }}
        >
          <img src="/rocket-best-vote.svg" alt="noticias más votadas hoy" />
          <p>TOP</p>
        </label>
        <label htmlFor="order">Filtrar por:</label>
        <select
          id="order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="createdAt">Fecha</option>
          <option value="votes">Valoración</option>
        </select>
        <label htmlFor="direction">Orden:</label>
        <select
          id="direction"
          value={direction}
          onChange={(e) => setDirection(e.target.value)}
        >
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>
      </div>
      <button onClick={filterNews} className="filter">
        Filtrar
      </button>
      <button
        id="up"
        onClick={() => {
          // Para Chrome, Firefox, IE y Opera
          document.documentElement.scrollTop = 0;

          // Para Safari
          document.body.scrollTop = 0;
        }}
      >
        Volver arriba
      </button>
      {news ? (
        <ul className="news-list filter">
          {news.map((singleNews) => {
            return (
              <li key={singleNews.id} className="single-news">
                <News news={singleNews} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No hay noticias disponibles</p>
      )}
    </section>
  );
};
