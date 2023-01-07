"use strict";
const getConnection = require("../../getConnection");

const selectNewsByDateQuery = async (date) => {
  let connection;
  try {
    connection = await getConnection();
    const [newsByDate] = await connection.query(
      `SELECT id, feedback, category, idUser, title, summary, body, createdAt 
        FROM news 
        WHERE createdAt 
        BETWEEN '${date} 00:00:00' AND '${date} 23:59:59';`
    );
    return newsByDate;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectNewsByDateQuery;
