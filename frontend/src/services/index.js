// Servicio que carga las 10 noticias  mejor valoradas (feedback)
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

//  Servicio de registro de nuevo usuario
export const registerUserService = async ({
  username,
  email,
  password,
  bio,
}) => {
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
  if (!response.ok) {
    throw new Error(json.message);
  }
};

// Servicio de login de usuario
export const loginUserService = async ({ email, password }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/users/login`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// Servicio que nos facilita los datos del usuario logueado a partir de su token
export const getLoggedUserDataService = async ({ token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/users`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  
  return json.data
};
