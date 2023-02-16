import { useState } from "react";
import { News } from "./News";

export const NewsList = ({ news, setNews }) => {
  const [order, setOrder] = useState("createdAt");
  const [direction, setDirection] = useState("ASC");

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
    console.log(filteredNews);
    setNews([...filteredNews]);
  };

  return (
    <section className="breaking-news">
      {/* {loggedUser ? <NewsContainer /> : null} */}
      <h2>Últimas noticias</h2>
      <div>
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
      <button onClick={filterNews}>Filtrar</button>
      {news ? (
        <ul className="news-list">
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
