'use strict'
const getConnection = require("../../getConnection");

const insertNewQuery = async (title, body, category, IdUser) => {
  let connection;
  try {
    connection = await getConnection();

    


    const [news] = await connection.query(`
    INSERT INTO news (title, body, category, IdUser, createdAt) 
    VALUES (?, ?, ?, ?, ? )`,
    [title, body, category, IdUser, new Date()]
    )    
    
  } finally {
    if (connection) connection.release();
  }

}

module.exports = insertNewQuery;