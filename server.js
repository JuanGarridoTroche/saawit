"use strict";
require("dotenv").config();
const express = require("express");
const isAuth = require("./middlewares/isAuth");
const fileupload = require("express-fileupload");
const isImg = require("./middlewares/isImg");

const { PORT } = process.env;
const app = express();

// Deserializa el body con formato JSON
app.use(express.json());

// Deserializa el body con formato form-data
app.use(fileupload());

/*
 * ###########################
 * ## Middleware de /users  ##
 * ###########################
 */

const {loginUser, newUser, editPhoto, editPassword} = require("./controllers/users");
// Login de usuario

app.post("/users/login", loginUser);

// Nuevo usuario
app.post("/users", newUser);

//Editar mi Foto del usuario
app.put("/users/photo", isAuth, isImg, editPhoto);

//Editar password del usuario
app.put("/users/password", isAuth, editPassword);

/*
 * ##########################
 * ## Middleware de /news  ##
 * ##########################
 */
const { createNews, editNews, deleteNews, voteNews, topRankedNews, newsByDate, newsByCategory } = require("./controllers/news");

// Crear una noticia
app.post("/news", isAuth, createNews);

// Editar una noticia ya creada
app.put("/news/:idNews", isAuth, editNews);

// Eliminar una noticia
app.delete("/news/:idNews", isAuth, deleteNews);

// Lista de las últimas noticias del día ordenadas por valoración
app.get('/news/top', topRankedNews);

// Noticias de días anteriores
app.get('/news', newsByDate);

// Noticias filtradas por categoría
app.get('/news/filter', newsByCategory);

// Vota una noticia publicada (de otro usuario registrado)
app.post("/news/:idNews/votes", isAuth, voteNews);

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
