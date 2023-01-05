"use strict";

const { generateError } = require("../../../helpers");
const getConnection = require("../../getConnection");

const deletePhotoNewsQuery = async (idNews) => {
  let connection;
  try {
    connection = await getConnection();
    const [news] = await connection.query(
      `SELECT name FROM photoNews WHERE id = ?`,
      [idNews]
    );

    // Comprobamos que existe algún registro
    if(news.length < 1) {
      throw generateError('Foto no encontrada.', 404);
    }

    // Eliminamos la foto del disco
    await connection.query(`
    DELETE FROM photoNews WHERE id = ?`,
    [idNews]
    )
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deletePhotoNewsQuery;
