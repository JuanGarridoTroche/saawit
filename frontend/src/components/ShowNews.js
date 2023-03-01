import "../css/ShowNews.css";
import { useParams } from "react-router-dom";
import { editNewsService, newsService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";

export const ShowNews = () => {
  // e.stopPropagation();
  const { idNews:id } = useParams();
  const { loggeduser, token } = useContext(AuthContext);

  const [news, setNews] = useState({});

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [image_1, setImage_1] = useState();
  const [image_2, setImage_2] = useState();
  const [image_3, setImage_3] = useState();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const method = "GET";

  useEffect(() => {
    const getNewsById = async () => {
      try {        
        const currentNews = await newsService({ id, token, method });

        // console.log(currentNews);

        setNews(currentNews);

        
        setCategory(currentNews.category);
        setTitle(currentNews.title);
        setSummary(currentNews.summary);
        setBody(currentNews.body);
        setImage_1(currentNews.photoNews[0].name);
        setImage_2(currentNews.photoNews[1].name);
        setImage_3(currentNews.photoNews[2].name);
        // console.log(news);
      } catch (err) {
        setError(err.message);
      }
    };

    getNewsById();
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setSending(true);

      const formData = new FormData();

      formData.append("category", category);
      formData.append("title", title);
      formData.append("summary", summary);
      formData.append("body", body);
      formData.append("image_1", image_1);
      formData.append("image_2", image_2);
      formData.append("image_3", image_3);

      const editedValues = await editNewsService(formData, id, token);

      // Modificamos la noticia con la nueva info.
      setNews({
        ...news,
        category: editedValues.category,
        title: editedValues.title,
        summary: editedValues.summary,
        body: editedValues.body,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="edit-news-form" key={news.id} onSubmit={handleSubmit}>      
      {token && news.idUser === loggeduser.id ? (
        <h2>Editar noticia</h2>
      ) : (
        <h2>Ver noticia</h2>
      )}
      <fieldset className="edit-news-container">
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled defaultValue>
            {news.category}
          </option>
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
          placeholder={news.title}
          className="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <input
          id="summary"
          placeholder={news.summary ? news.summary : "Entradilla (opcional)"}
          className="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <textarea
          id="body"
          rows="5"
          cols="50"
          value={body}
          placeholder={news.body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <section className="show-photos">
          {
            image_1 ?
            <img src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${image_1}`} alt="foto"/> :            
            <img src={`${process.env.REACT_APP_BACKEND_HOST}:3000/sin-imagen.webp`} alt="foto"/>
          }
          {
            image_2 ?
            <img src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${image_2}`} alt="foto"/> :            
            <img src={`${process.env.REACT_APP_BACKEND_HOST}:3000/sin-imagen.webp`} alt="foto"/>
          }
          {
            image_3 ?
            <img src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${image_3}`} alt="foto"/> :            
            <img src={`${process.env.REACT_APP_BACKEND_HOST}:3000/sin-imagen.webp`} alt="foto"/>
          }
        </section>
        <section className="photos-news">
        { news.photoNews ?
          <>
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
            onChange={(e) => setImage_1(e.target.files[0])}
            hidden
          />
        </>
       : null }
        <label htmlFor="photo_1">
          <img
            src="/upload.svg"
            alt="subir imágenes de la noticia"
            className="photos"
          />
        </label>
        <input
          type="file"
          id="photo_1"
          onChange={(e) => setImage_2(e.target.files[0])}
          hidden
        />
        <label htmlFor="photo_2">
          <img
            src="/upload.svg"
            alt="subir imágenes de la noticia"
            className="photos"
          />
        </label>
        <input
          type="file"
          id="photos"
          onChange={(e) => setImage_3(e.target.files[0])}
          hidden
        />
        </section>
      </fieldset>
      
      {/* <fieldset>{news.photoNews ? "" : <p>No hay fotos subidas</p>}</fieldset> */}
      <button disabled={sending}>Enviar</button>
    </form>
  );
};
