'use strict';

const selectNewsByDateQuery = require('../../bbdd/queries/news/selectNewsByDateQuery')

const NewsByDate = async (req, res, next) => {
  try {
      const {date} = req.params;
      console.log(date);
      const [news] = await selectNewsByDateQuery();

      res.send({
      status: "Ok",
      message: `Listado de las noticias del día ${date}`,
      data: {
        news,
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = NewsByDate;