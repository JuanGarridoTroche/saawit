// Servicio que carga las noticias ordenadas desde la más actual a la más antigua
export const loadNewsService = async () => {
  //Extraemos (fetch) desde nuestro Backend la info con el endpoint que necesitemos
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/news`
  );

  const json = await response.json();

  // Si la respuesta no es Ok, generamos un error
  if (!response.ok) {
    throw new Error(json.message);
  }

  // console.log(json.data);
  // console.log(json.data.rankedNews);
  return json.data.news;
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
export const getloggedUserDataService = async ({ token }) => {
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

  return json.data;
};

export const getUserDataService = async ({ idUser }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/users/profile/${idUser}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// Servicio que envía los datos de una nueva noticia
export const createNewsService = async ({ data, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/news`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();
  // console.log(json.data);

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// Servicio que carga las 10 noticias  mejor valoradas (feedback)
export const loadNewsByCategoryService = async (category) => {
  //Extraemos (fetch) desde nuestro Backend la info con el endpoint que necesitemos
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/news/categoria/${category}`
  );

  const json = await response.json();

  // Si la respuesta no es Ok, generamos un error
  if (!response.ok) {
    throw new Error(json.message);
  }

  console.log(json.data);
  return json.data;
};

// Servicio que carga las 10 noticias  mejor valoradas (feedback)
export const loadNewsByFeedbackService = async () => {
  //Extraemos (fetch) desde nuestro Backend la info con el endpoint que necesitemos
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/news/ByFeedback`
  );

  const json = await response.json();

  // Si la respuesta no es Ok, generamos un error
  if (!response.ok) {
    throw new Error(json.message);
  }
  // console.log(json.data.rankedNews);
  return json.data.byFeedback;
};

export const deleteNewsService = async ({ id, token }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/news/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const searchingNewsService = async ({search}) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/news/search/${search}`)
  const json =await response.json();

  console.log(json.data);

  if(!response.ok) {
    throw new Error(json.message)
  }
  console.log(json.data);
  return json.data;
}