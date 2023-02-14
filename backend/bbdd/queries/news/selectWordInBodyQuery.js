'use strict';

const getConnection = require('../../getConnection');


const selectWordInBodyQuery = async (search) => {
  let connection;
  try {
    connection = await getConnection();
    const [searchBody] = await connection.query(
      `SELECT N.id,  N.feedback, N.category, N.idUser, N.title, N.summary, N.body, N.createdAt, PN.name as photoName
      FROM news N
      LEFT JOIN photoNews PN ON N.id = PN.idNews
      WHERE N.body LIKE '%?%'
      ORDER BY N.id DESC;`,
        [search]
    )
      // console.log(news);
    return searchBody;
  } finally {
    if(connection) connection.release();
  }
}

module.exports = selectWordInBodyQuery;