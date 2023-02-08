'use strict';

const selectTopTenRankedNewsQuery =require('../../bbdd/queries/news/selectTopTenRankedNewsQuery');

const topRankedNews = async (req, res, next) => {
  try {
      const rankedNews = await selectTopTenRankedNewsQuery();

      res.send({
      status: "Ok",
      message: "Listado de las noticias más valoradas",
      data: {
        rankedNews,
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = topRankedNews;