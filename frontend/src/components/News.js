

export const News =  ({ news }) => {
  
  return (
    <article>
      <figure>
        <img src="/arrow-up.svg" alt="arrow up"/>
        <img src="/arrow-down.svg" alt="arrow down"/>
      </figure>
      <section>
        <p>{news.category} · Publicado por {news.idUser} desde {new Date(news.createdAt).toUTCString} </p>
        <p>{news.title}</p>
        <p>{news.body}</p>
        <figure>
          news.
        </figure>
      </section>
      <p>{news.body}</p>
    </article>
  );
};
