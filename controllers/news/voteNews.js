'use strict'

const selectNewsByIdQuery = require("../../bbdd/queries/news/selectNewsByIdQuery");
const insertVoteQuery = require('../../bbdd/queries/news/insertVoteQuery')
const { generateError } = require("../../helpers");

const voteNews = async (req, res, next) => {

  try {
    const {idNews} = req.params;

    const {like} = req.body;

    //Obtenemos la noticia
    const news = await selectNewsByIdQuery(idNews);

    // Si somos los dueños de la noticia no la podemos votar
    if(news.idUser === req.user.id) {
      throw generateError('No puedes votar tus propias noticias', 403)
    }

    // Comprobamos si es un voto true o false
    console.log(like);
    if(like) {
      const value = true
    } else {
      const value = false
    }

    console.log(value);
    // Insertamos el voto
    await insertVoteQuery(value, req.user.id, idNews);

    res.send({
      status: 'Ok',
      message: 'Voto enviado',
    })
    
  } catch (err) {
    next(err);
  }

}

module.exports = voteNews;