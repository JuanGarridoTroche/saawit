"use strict";

const getConnection = require("../../getConnection");

const deletePhoto = require('../../../helpers');

const deletePhotoNewsQuery = async (idNews) => {
  let connection;
  try {
    connection = await getConnection();   


    // Eliminamos el registro de la foto de la tabla photoNews correspondiente a la noticia que vamos a eliminar
    await connection.query(`
    DELETE FROM photoNews WHERE idNews = ?`,
    [idNews]
    )
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deletePhotoNewsQuery;
