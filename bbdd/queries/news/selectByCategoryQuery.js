"use strict";
const getConnection = require("../../getConnection");

const selectByCategoryQuery = async (category) => {
  let connection;
  try {
    connection = await getConnection();

   
    const [newsByCategory] = await connection.query(
      `SELECT id, feedback, category, idUser, title, summary, body, createdAt FROM news WHERE category = ? ORDER BY createdAt DESC`,
        [category]
    );
    return newsByCategory;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectByCategoryQuery;