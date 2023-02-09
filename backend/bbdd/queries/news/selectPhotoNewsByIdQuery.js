'use strict';

const getConnection = require('../../getConnection');


const selectPhotoNewsByIdQuery = async (idNews) => {
  let connection;
  try {
    connection = await getConnection();
    const [news] = await connection.query(
      `SELECT id, name FROM photoNews WHERE idNews = ?`,
      [idNews]
    )
      // console.log(news);
    return news;
  } finally {
    if(connection) connection.release();
  }
}

module.exports = selectPhotoNewsByIdQuery;