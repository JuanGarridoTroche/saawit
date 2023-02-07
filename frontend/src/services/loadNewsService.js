export const loadNewsService = async ()=> {
  //Llamamos a nuestro Backend
  const response = await fetch(`http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}`)
  console.log(response);

  const json = await response.json();
  if(!response.ok) {
    throw new Error(json.message);
  }
  return (json.data.rankednews);
}