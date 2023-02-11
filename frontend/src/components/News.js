

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
        <a href={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/uploads/${news.name}`}><img src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/uploads/${news.name}`} alt={news.name}/></a>
        <p className="body">{news.body}</p>     
      </section>
    </>
  );
};
