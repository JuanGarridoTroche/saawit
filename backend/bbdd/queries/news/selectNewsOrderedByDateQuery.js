"use strict";

const { generateError } = require("../../../helpers");
const getConnection = require("../../getConnection");

const selectNewsOrderedByDateQuery = async () => {
  let connection;
  try {
    connection = await getConnection();
    const [news] = await connection.query(
      `SELECT N.id, N.category, N.feedback, N.idUSer, N.title, N.summary, N.body, N.createdAt, N.modifiedAt, PN.name FROM news N LEFT JOIN photonews PN ON N.id = PN.idNews ORDER BY id DESC`
    );

    if (!news[0]) {
      throw generateError(
        "Actualmente no existen noticias o ha habido un error",
        400
      );
    }
    return news;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectNewsOrderedByDateQuery;
