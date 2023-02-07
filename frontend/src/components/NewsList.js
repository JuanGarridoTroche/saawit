import { News } from "./News";

export const NewsList = ({ news }) => {
  return news.length ? (
    <ul>{news.map(singleNews => {
      return (
        <li key={singleNews.id}>
          <News news={singleNews} />
        </li>
      )
    })}</ul>
  ) : (
    <p>No hay noticias disponibles</p>
  );
  
};
