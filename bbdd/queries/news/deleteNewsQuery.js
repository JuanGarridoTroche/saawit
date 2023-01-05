"use strict";

const { generateError } = require("../../../helpers");
const getConnection = require("../../getConnection");

const deleteNewsQuery = async (idNews) => {
  let connection;
  try {
    connection = await getConnection();
    const [news] = await connection.query(
      `SELECT title FROM news WHERE id = ?`,
      [idNews]
    );

    // Comprobamos que existe algún registro
    if(news.length < 1) {
      throw generateError('Foto no encontrada.', 404);
    }

    // Eliminamos la foto del disco
    await connection.query(`
    DELETE FROM news WHERE id = ?`,
    [idNews]
    )
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteNewsQuery;
