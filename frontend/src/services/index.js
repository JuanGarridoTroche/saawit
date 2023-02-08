export const loadNewsService = async () => {
  //Extraemos (fetch) desde nuestro Backend la info con el endpoint que necesitemos
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/news/top`
  );

  const json = await response.json();

  // Si la respuesta no es Ok, generamos un error
  if (!response.ok) {
    throw new Error(json.message);
  }
  // console.log(json.data.rankedNews);
  return json.data.rankedNews;
};

export const registerUserService = async ({ username, email, password, bio }) => {
  //Extraemos (fetch) desde nuestro Backend la info con el endpoint que necesitemos
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/users`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, email, password, bio }),
    }
  );

  const json = await response.json();
  if(!response.ok) {
    throw new Error(json.message);
  }
  return "Registro con éxito"
};
