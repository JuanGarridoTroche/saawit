"use strict";

const selectUserByIdQuery = require("../../bbdd/queries/users/selectUserByIdQuery");

const readProfile = async (req, res, next) => {
  try {
    const { idUSer } = req.params;
    console.log(idUSer);

    // Seleccionamos los datos actuales del usuario
    const user = await selectUserByIdQuery(idUSer);
    
    const {id, username, email, photo, role, active, createdAt} = user;


    res.send({
      status: "Ok",
      message: "perfil de usuario",
      data: {
        id, username, email, photo, role, active, createdAt,
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = readProfile;