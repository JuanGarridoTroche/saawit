
const getConnection = require("../../getConnection");

const selectUserByEmailQuery = async (email) => {
  let connection;

  try {
    connection = await getConnection();
    const [users] = await connection.query(
      `
    SELECT id, username, password, role, active FROM users WHERE email = ?`,
      [email]
    );

    return users[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectUserByEmailQuery;
