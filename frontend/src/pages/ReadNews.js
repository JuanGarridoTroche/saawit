import '../css/ReadNews.css';
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { newsService } from '../services';



export const ReadNews = async ()=> {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  // const navigate = useNavigate();
  const id = useParams();  
  const method = 'GET';  
 
  await newsService(id.idNews, token, method);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setSending(true);  
      
      await newsService(id, token, 'POST');
      // console.log("datos del formulario: ", data);      
      // e.target.reset();
      // setImage(null);
      // navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };
 

  return (
     <>
      <form className="read-news-form" onSubmit={handleSubmit}>
        <h2>Editar noticia</h2>
        {error ? <label className="error">{error}</label> : null}
        <fieldset className='read-news-container'>
          {/* <label id="category">Categoría: </label> */}
          <select name="category">
            <option value="general" defaultValue>
              Elige una categoría
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
          <input id="title" name="title" placeholder="Título" className='title' required />
          <br />
          <input
            id="summary"
            name="summary"
            placeholder="Entradilla (opcional)"
            className='summary'
          />
          <textarea
            id="body"
            name="body"
            rows="5"
            cols="50"
            placeholder="Texto de la noticia..."
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
              <img
                src={URL.readObjectURL(image)}
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
  )
}