const selectCharactersInBodyQuery = require("../../bbdd/queries/news/selectCharactersInBodyQuery");


const searchingNews = async (req, res, next) => {
  try {
    const { characters } = req.params;

    //Obtenemos la noticia
    const news = await selectCharactersInBodyQuery(characters);
    
    const {id, category, idUser, title, summary, body, createdAt} = news;

    // Mostramos los datos
    res.send({
      status: "Ok",
      data: news,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = searchingNews;