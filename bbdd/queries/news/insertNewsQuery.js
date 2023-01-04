'use strict'
const getConnection = require("../../getConnection");

const insertNewsQuery = async (title, body, category, IdUser) => {
  let connection;
  try {
    connection = await getConnection();

    


    const [news] = await connection.query(`
    INSERT INTO news (title, body, category, IdUser, createdAt) 
    VALUES (?, ?, ?, ?, ? )`,
    [title, body, category, IdUser, new Date()]
    )    

    // Devolvemos el id del nuevo registro que le hemos asignado a nuestra nueva noticia
    return news.insertId;
    
  } finally {
    if (connection) connection.release();
  }

}

module.exports = insertNewsQuery;