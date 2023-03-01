"use strict";

const selectNewsByIdQuery = require("../../bbdd/queries/news/selectNewsByIdQuery");
const updateNewsQuery = require("../../bbdd/queries/news/updateNewsQuery");
const { generateError } = require("../../helpers");

const editNews = async (req, res, next) => {
  try {
    const { idNews } = req.params;
    let { title, summary, body, category } = req.body;
    // console.log("Datos recogidos para editar la noticia", idNews, category, title, summary, body);

    // Comprobamos que han introducido un idNews válido
    if (!Number(idNews) || idNews < 1) {
      throw generateError("El id de la noticia no es correcto", 404);
    }

    // Seleccionamos los datos de la noticia a modificar
    const news = await selectNewsByIdQuery(idNews);

    //Comprobamos que la noticia que queremos modificar pertenece al usuario que está logueado
    if (news.idUser !== req.user.id) {
      throw generateError("La noticia no pertenece al usuario logueado", 400);
    }

    // Si category no corresponde a ninguna categoría válida, category = 'general'
    const listOfCategories = [
      "deportes",
      "videojuegos",
      "noticias",
      "programación",
      "viajes",
      "tecnología",
      "música",
      "memes",
      "general",
    ];

    if (category && !listOfCategories.includes(category))
      throw generateError(`La categoría no es correcta. Por favor, introduce una de las siguientes categorías: 
    deportes, videojuegos, noticias, programación, viajes, tecnología, música, memes o general`);

    if (!category) category = news.category;
    if (!title) title = news.title;
    if (!summary) summary = news.summary;
    if (!body) body = news.body;

    // console.log(category, title, summary, body);

    // Modificamos los datos
    await updateNewsQuery(category, title, summary, body, idNews);
    

    res.send({
      status: "Ok",
      message: "Noticia modificada",
      data: {
        category,
        title,
        summary,
        body,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = editNews;
