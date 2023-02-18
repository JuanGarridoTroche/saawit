import "../css/LoggedUserContainer.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const NewsContainer = () => {
  const { loggedUser } = useContext(AuthContext);
  return (
    <form className="user-post">
      <Link to="/register">
        {loggedUser.photo ? (
          <img
            // src="https://styles.redditmedia.com/t5_7vsynl/styles/profileIcon_snoo554f21bd-9947-4aa2-b08f-fe7bc971f0f3-headshot.png?width=256&height=256&crop=256:256,smart&v=enabled&s=6beb7c558557ace5fc5dce39e61bdb15e100204f"
            src={`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/${loggedUser.photo}`}
            alt="foto2"
            className="avatar-user"
          />
        ) : null}
      </Link>
      <Link to="/news" className="insert-news">
        <input
          placeholder="Escribe una nueva noticia"
          className="write-new-story"
        />
        <label htmlFor="image">
          <img
            src="/upload-image.svg"
            alt="añade una nueva noticia"
            className="image-upload"
          />
        </label>
        <input type="file" id="image" name="image" multiple />
      </Link>
    </form>
  );
};
