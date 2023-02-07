import { News } from "./News";

export const NewsList = ({ news }) => {
  return news.length ? (
    <ul className="news-list">{news.map(singleNews => {
      return (
        <li key={singleNews.id} className="single-news">
          <News news={singleNews} />
        </li>
      )
    })}</ul>
  ) : (
    <p>No hay noticias disponibles</p>
  );
  
};
