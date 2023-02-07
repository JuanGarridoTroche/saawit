const { generateError } = require("../../helpers");
const selectUserByEmailQuery = require("../../bbdd/queries/users/selectUserByEmailQuery");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validamos el correo electrónico
    // Para ello vamos a utilizar la dependecia de validadción de datos joi
    const schema = joi
      .string()
      .email()
      .required()
      .error(new Error("Introduzca una cuenta de correo válida", 400));
    const validation = schema.validate(email);

    if (validation.error || validation === null) {
      throw generateError(validation.error.message);
    }

    // Comprobamos que existe ese usuario en nuestra BBDD registrado.
    const user = await selectUserByEmailQuery(email);
    

    //Comprobar que han introducido email y contraseña
    if (!email || !password) {
      throw generateError("Faltan campos", 400);
    }
  
    //Comprobamos que la contraseña es válida
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw generateError("Email y/o contraseña inválidos", 401);
    }

    //Comprobamos que el usuario está activo
    if (!user.active) {
      throw generateError("El usuario no está activo", 401);
    }

    // Creamos el objeto con los datos que queremos guardar dentro del token
    const tokenIfo = {
      id: user.id,
      role: user.role,
    };

    // Creamos el token
    const token = jwt.sign(tokenIfo, process.env.SECRET);

    res.send({
      status: "ok",
      message: "Login realizado con éxito",
      data: {
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = loginUser;
