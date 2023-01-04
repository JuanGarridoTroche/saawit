"use strict";

const getConnection = require("../../getConnection");

const updateUserPasswordQuery = async (password, idUser) => {
  let connection;
  try {
    connection = await getConnection();
    await connection.query(
      `
    UPDATE users SET password = ?, modifiedAt = ? WHERE id = ?`,
      [password, new Date(), idUser]
    );
  } finally {
    if (connection) connection.release();
  }
};

module.exports = updateUserPasswordQuery;
