"use strict";

const generateError = require("../../../helpers");
const getConnection = require("../../getConnection");

const checkRecoverPasswordQuery = async (recoverPassCode, newPassword) => {
  let connection;
  try {
    connection = await getConnection();

    const [check] = await connection.query(
      `
    SELECT id FROM users WHERE recoverPassCode = ?`,
      [recoverPassCode]
    );
  
    return check[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = checkRecoverPasswordQuery;
