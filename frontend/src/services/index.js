export const loadNewsService = async ()=> {
  //Extraemos (fetch) desde nuestro Backend la info con el endpoint que necesitemos
  const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/news/top`)
  
  const json = await response.json();

  // Si la respuesta no es Ok, generamos un error
  if(!response.ok) {
    throw new Error(json.message);
  }
  // console.log(json.data.rankedNews);
  return (json.data.rankedNews);
}

// export const readProfile = async (idUser)=> {
//   const response = await fetch(`${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/users/profile/${idUser}`)
//   const json = await response.json();
//   // Si la respuesta no es Ok, generamos un error
//   if(!response.ok) {
//     throw new Error(json.message);
//   }
//   // console.log(json.data.username);
//   return (json.data);
// }