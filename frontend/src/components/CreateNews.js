import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createNewsService } from "../services";

export const CreateNews = () => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setSending(true);

      const data = new FormData(e.target);
      // console.log("datos del formulario: ", data);
      await createNewsService({ data, token });      
      // e.target.reset();
      // setImage(null);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <form className="create-news-form" onSubmit={handleSubmit}>
        <h2>Crear una nueva noticia</h2>
        {error ? <label>{error}</label> : null}
        <fieldset>
          <label id="category">Categorías: </label>
          <select name="category">
            <option value="general" defaultValue>
              General
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
          <br />
          <input id="title" name="title" placeholder="Título" required />
          <br />
          <input
            id="summary"
            name="summary"
            placeholder="clickbait (opcional)"
          />
          <br />
          <textarea
            id="body"
            name="body"
            rows="5"
            cols="50"
            placeholder="Texto de la noticia..."
            required
          />
          <input
            type="file"
            id="photos"
            name="photos"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image ? (
            <figure>
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                style={{ width: "100px" }}
              />
            </figure>
          ) : null}
        </fieldset>
        <button>Enviar</button>
      </form>
      {sending ? <label>Enviando la noticia...</label> : null}
    </>
  );
};
