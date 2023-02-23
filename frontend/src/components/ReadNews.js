import "../css/CreateNews.css";
import { useParams } from "react-router-dom";
import { newsService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";

export const ReadNews = (e) => {
  // e.stopPropagation();
  const { idNews } = useParams();
  const { loggeduser, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [news, setNews] = useState([]);
  const [image, setImage] = useState([]);
  const method = "GET";

  useEffect(() => {
    const loadSingleNews = async ({ idNews, token, method }) => {
      try {
        setNews(await newsService({ idNews, token, method }));

        return news;
      } catch (error) {
        setError(error.message);
      }
    };

    loadSingleNews({ idNews, token, method });
  }, [idNews, news, token]);

  const { id, body, category, idUser, photoNews, summary, title } = news;

  const handleSubmit = ()=> {
    
  }


  return (
    <>
      <form className="create-news-form" key={id} onSubmit={handleSubmit}>
        {token && idUser === loggeduser ? (
          <h2>Editar noticia</h2>
        ) : (
          <h2>Ver noticia</h2>
        )}
        <fieldset className="create-news-container">
          <select name="category" id="category" defaultValue={category}>            
            <option value="deportes">deportes</option>
            <option value="videojuegos">videojuegos</option>
            <option value="noticias">noticias</option>
            <option value="programación">programación</option>
            <option value="viajes">viajes</option>
            <option value="tecnología">tecnología</option>
            <option value="música">música</option>
            <option value="memes">memes</option>
            <option value="general">general</option>
          </select>
          <input
            id="title"
            name="title"
            placeholder={title}
            className="title"
            required
          />
          <br />
          <input
            id="summary"
            name="summary"
            placeholder={summary ? summary : "Entradilla (opcional)"}
            className="summary"
          />
          <textarea
            id="body"
            name="body"
            rows="5"
            cols="50"
            value={body}
            required
          />
          <label htmlFor="photos">
            <img
              src="/upload.svg"
              alt="subir imágenes de la noticia"
              className="photos"
            />
          </label>
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
          />
          {image ? (
            <figure>
              <img src="/news" alt="preview" style={{ width: "100px" }} />
            </figure>
          ) : null}
        </fieldset>
        <button>Enviar</button>
      </form>
    </>
  );
};
