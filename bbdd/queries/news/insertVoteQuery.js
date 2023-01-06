"use strict";

const { generateError } = require("../../../helpers");
const getConnection = require("../../getConnection");

const insertVoteQuery = async (value, idUSer, idNews) => {
  let connection;
  try {
    connection = await getConnection();

    // Comprobamos que el usuario no ha votado ya esta noticia
    const [votes] = await connection.query(
      `SELECT id FROM votes WHERE idUser = ? AND idNews = ?`,
      [idUSer, idNews]
    );
    console.log(votes);
    console.log(votes[0]);

    if(votes[0].length > 1) {
      throw generateError('Ya has votado esta noticia', 403)
    }

    // Insertamos el voto
    await connection.query(`
    INSERT INTO votes (value, idUSer, idNews, createdAt, title)
    VALUES(?, ?, ?, ?, 'título')`,
    [value, idUSer, idNews, new Date()]
    )
    
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertVoteQuery;
