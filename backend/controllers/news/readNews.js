"use strict";
const selectNewsByIdQuery = require("../../bbdd/queries/news/selectNewsByIdQuery");
const deletePhotoNewsQuery = require("../../bbdd/queries/news/deletePhotoNewsQuery");
const deleteNewsQuery = require("../../bbdd/queries/news/deleteNewsQuery");
const deleteVotesNewsQuery = require('../../bbdd/queries/news/deleteVotesNewsQuery')
const selectPhotoNewsByIdQuery = require('../../bbdd/queries/news/selectPhotoNewsByIdQuery');
const { generateError, deletePhoto } = require("../../helpers");

const readNews = async (req, res, next) => {
  try {
    const { idNews } = req.params;

    //Obtenemos la noticia
    const news = await selectNewsByIdQuery(idNews);
    const {id, category, idUser, title, summary, body, createdAt} = news;
   
    
    // Seleccionamos las imágenes pertenecientes a la noticia (máximo 3) que hay que eliminar
    const photoNews = await selectPhotoNewsByIdQuery(idNews);

    // Mostramos los datos

    res.send({
      status: "Ok",
      id,
      category, idUser, title, summary, body, createdAt,
      photoNews,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = readNews;
