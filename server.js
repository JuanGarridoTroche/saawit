"use strict";
require("dotenv").config();
const express = require("express");
const isAuth = require("./middlewares/isAuth");
const fileUpload = require("express-fileupload");
const isImg = require("./middlewares/isImg");

const { PORT } = process.env;
const app = express();

// Deserializa el body con formato JSON
app.use(express.json());

// Deserializa el body con formato form-data
app.use(fileUpload());

/*
 * ###########################
 * ## Middleware de /users  ##
 * ###########################
 */

// Login de usuario
const loginUser = require("./controllers/users/loginUser.js");

app.post("/users/login", loginUser);

// Nuevo usuario
const newUser = require("./controllers/users/newUser");
app.post("/users", newUser);

//Editar mi Foto del usuario
const editPhoto = require("./controllers/users/editPhoto");
app.put("/users/photo", isAuth, isImg, editPhoto);

//Editar password del usuario
const editPassword = require('./controllers/users/editPassword');
app.put('/users/password', isAuth, editPassword);



/*
 * ##########################
 * ## Middleware de /news  ##
 * ##########################
 */
const createNews = require('./controllers/news/createNews')
app.post('/news', isAuth, createNews)

/*
 * ##########################################
 * ## Middleware de Error y 404 NOT FOUND  ##
 * ##########################################
 */

// Middleware de Error:
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    status: "error",
    message: err.message,
  });
});

// Middleware 404 NOT FOUND
app.use((req, res) => {
  res.status(404).send({
    status: "Error",
    message: "Ruta no encontrada 😿",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
