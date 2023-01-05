"use strict";
const deletePhotoNewsQuery = require("../../bbdd/queries/news/deletePhotoNewsQuery");
const selectNewsByIdQuery = require("../../bbdd/queries/news/selectNewsByIdQuery");
const { generateError } = require("../../helpers");
const deleteNewsQuery = require("../../bbdd/queries/news/deleteNewsQuery");

const deleteNews = async (req, res, next) => {
  try {
    const { idNews } = req.params;

    //Obtenemos la noticia
    const news = await selectNewsByIdQuery(idNews);

    console.log("Tipo de dato: ", typeof news.idUser,"IdUSer del usuario que creó la noticia: ",  news.idUser);
    console.log("Tipo de dato: ", typeof req.user.id," Id del usuario registrado: ", req.user.id);

    // Comprobamos que somos los propietarios de la news que vamos a borrar
    if (news.idUSer !== req.user.id) {
      throw generateError("No eres propietario de esta noticia, no la puedes eliminar.", 403);
    }

    // Borramos la/s foto/s asociadas a la noticia
    await deletePhotoNewsQuery(idNews);

    // Borramos la noticia
    await deleteNewsQuery(idNews);

    res.send({
      status: "Ok",
      message: "Noticia eliminada",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteNews;
