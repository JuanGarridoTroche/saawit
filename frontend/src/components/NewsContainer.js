import { Link } from "react-router-dom";

export const NewsContainer = () => {
  return (
    <form>
      <Link to="/register">
        <img
          src="https://styles.redditmedia.com/t5_7vsynl/styles/profileIcon_snoo554f21bd-9947-4aa2-b08f-fe7bc971f0f3-headshot.png?width=256&height=256&crop=256:256,smart&v=enabled&s=6beb7c558557ace5fc5dce39e61bdb15e100204f"
          alt="foto2"
        />
      </Link>
      <Link to="/news">
        <input placeholder="Escribe una nueva noticia" />
        <input type="file" id="image" name="image" multiple />
      </Link>
    </form>
  );
};
