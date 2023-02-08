import { Link } from "react-router-dom";

export const ErrorMessage = ({ message }) => {
  return (
    <>
      <p>{message}</p>
      <Link to="/">Volver a la página principal</Link>
    </>
  );
};
