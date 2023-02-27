const selectAllNewsQuery = require("../../bbdd/queries/news/selectAllNewsQuery");
// const selectAllVotesQuery = require("../../bbdd/queries/news/selectAllVotesQuery");

const listNews = async (req, res, next) => {
  try {     
    // Filtro de todas las noticias ordenado desde la fecha más actual  a la más antigua
    // Filtro por categorías
    // Filtro por feedback
    // Filtro por keyword dentro del cuerpo del mensaje
    let {keyword, category, orderBy, direction} =req.query; 
    // const idUser = 3;
    // console.log(idUser);

    
    const validCategories = ['deportes', 'videojuegos', 'noticias', 'programación', 'viajes', 'tecnología', 'música', 'memes', 'general'];

    keyword = keyword || ''
    category = validCategories.includes(category) ? category : '';
    orderBy = orderBy === 'votes' ? 'votes' : 'createdAt';
    direction = direction === 'ASC' ? 'ASC' : 'DESC';

      const news = await selectAllNewsQuery({keyword, category, orderBy, direction});
      //  console.log(news);
      // const votes = await selectAllVotesQuery({idUser});
      // let voted;
      // console.log("votos: ", votes);
      // const renews = news.map(singleNews => { 
      //   console.log(singleNews);     
      //   voted = votes.filter(e => {
      //     e.idNews === singleNews.id;
      //     singleNews.votedByLoggedUser = voted;
      //   })
      // })
      // console.log("voted: ", voted);
      // console.log("Renews: ", renews);

      res.send({
      status: "Ok",
      message: `Listado de las noticias:`,
      data: {
        news,
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = listNews;