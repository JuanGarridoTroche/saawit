const selectNewsOrderedByDateQuery = require("../../bbdd/queries/news/selectNewsOrderedByDateQuery");

const newsOrderedByDate = async (req, res, next) => {
  try {     
      const news = await selectNewsOrderedByDateQuery();
      // console.log(news);


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

module.exports = newsOrderedByDate;