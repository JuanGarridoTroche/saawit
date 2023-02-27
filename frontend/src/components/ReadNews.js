import "../css/CreateNews.css";
import { useParams } from "react-router-dom";
import { editNewsService, newsService } from "../services";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";

export const ReadNews = () => {
  // e.stopPropagation();
  const { idNews } = useParams();
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
        const currentNews = await newsService({ idNews, token, method });

        setNews(currentNews);

        setCategory(currentNews.category);
        setTitle(currentNews.title);
        setSummary(currentNews.summary);
        setBody(currentNews.body);
      } catch (err) {
        setError(err.message);
      }
    };

    getNewsById();
  }, [idNews, token]);

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

      const editedValues = await editNewsService(formData, idNews, token);

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
    <form className="create-news-form" key={news.id} onSubmit={handleSubmit}>
      {token && news.idUser === loggeduser ? (
        <h2>Editar noticia</h2>
      ) : (
        <h2>Ver noticia</h2>
      )}
      <fieldset className="create-news-container">
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
          onChange={(e) => setImage_3(e.target.files[0])}
          hidden
        />
        {/* {news.images[0] ? (
          <figure>
            <img
              src={`/${image.name}.jpg`}
              alt={image.name}
              style={{ width: "100px" }}
            />
          </figure>
        ) : null} */}
      </fieldset>
      {/* <fieldset>{news.photoNews ? "" : <p>No hay fotos subidas</p>}</fieldset> */}
      <button disabled={sending}>Enviar</button>
    </form>
  );
};
