

export const News =  ({ news }) => {
  // Me faltaría traer los datos del usuario
  
  return (
    <>
      <figure>
        <img src="/arrow-up.svg" alt="arrow up" className="arrow-up"/>
        <p>{news.feedback}</p>
        <img src="/arrow-down.svg" alt="arrow down" className="arrow-down"/>
      </figure>
      <section key={news.id}>
        <p>{news.category} · Publicado por {news.idUser} el {new Date(news.createdAt).toLocaleString()} </p>
        <p className="title">{news.title}</p>
        <p className="summary">{news.summary}</p>
        <p className="body">{news.body}</p>      
      </section>
    </>
  );
};
