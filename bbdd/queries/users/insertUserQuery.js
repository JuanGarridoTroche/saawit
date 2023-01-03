const generateError = require("../../../helpers");
const getConnection = require("../../getConnection");
const bcrypt = require('bcrypt');

const insertUserQuery = async (username, email, password) => {
  let connection;

  try {
    // Conexión a BBDD
    connection = await getConnection();

    //Intentamos obtener un username con el que nos ha dado el usuario
    const [users] = await connection.query(
      `
      SELECT id FROM users WHERE username = ?`,
      [username]
    );

    if (users.length > 0) {
      throw generateError(
        "El username ya existe en nuestra Base de datos. Por favor, introduce otro username", 403
      );
    }

    const [emailUsers] = await connection.query(
      `
    SELECT id FROM users WHERE email = ?`,
      [email]
    );

    if (emailUsers.length > 0) {
      throw generateError(
        "El email ya existe en nuestra Base de datos. Por favor, introduce otro email correcto", 403
      );
    }

    // Encriptamos la contraseña
    const hashPass = await bcrypt.hash(password, 10);

    await connection.query(
      `INSERT INTO users (username, email, password, active, createdAt)
    VALUES (?, ?, ?, 1, ?)`,
      [username, email, hashPass, new Date()]
    );
  } finally {
    // Cerramos la conexión a BBDD
    if (connection) connection.release();
  }
};

module.exports = insertUserQuery;
