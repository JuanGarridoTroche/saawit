'use strict';

const getConnection = require('../../getConnection');


const insertPhotoQuery = async (photo, idNews) => {
  let connection;
  try {
    connection = await getConnection();
    await connection.query(
      `INSERT INTO news`
    )
  } finally {
    if(connection) connection.release();
  }
}