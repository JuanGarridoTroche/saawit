"use strict";

const generateError = require("../../helpers");
const selectUserByEmailQuery = require("../../bbdd/queries/users/selectUserByEmailQuery");
const bcrypt = require("bcrypt");

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //Comprobar que han introducido email y contraseña
    if (!email || !password) {
      throw generateError("Faltan campos", 400);
    }

    //Vamos a comprobar quye existe el email en nuestra base de datos
    const user = await selectUserByEmailQuery(email);

    //Comprobamos que la contraseña es válida
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw generateError("Contraseña incorrecta", 401);
    }

    res.send({
      status: "ok",
      message: "Login realizado con éxito",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = loginUser;
