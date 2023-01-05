'use strict';

const getConnection = require('../../getConnection');


const selectNewsByIdQuery = async (idNews) => {
  let connection;
  try {
    connection = await getConnection();
    const [news] = await connection.query(
      `SELECT id, category, idUser, title, summary, body, createdAt FROM news WHERE id = ?`,
      [idNews]
    )
    
    return news[0];
  } finally {
    if(connection) connection.release();
  }
}

module.exports = selectNewsByIdQuery;