import { Link } from "react-router-dom";

export const Auth = () => {
  return (
    <ul>
      <li>
        <Link to="/register">Registro</Link>
      </li>
      <li>
        <Link to="/users/login">Login</Link>
      </li>
      {/* <li><Link to="/news/top">Top ranked news</Link></li> */}
    </ul>
  );
};
