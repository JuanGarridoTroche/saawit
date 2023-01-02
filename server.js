"use strict";
require("dotenv").config();
const express = require("express");

const { PORT } = process.env;

const app = express();

app.get("/users", (req, res, next) => {
  res.send("Petición realizada a través del método GET");
});

app.post("/users", (req, res) => {
  res.status(200).send({
    status: "Ok",
    message: "Método POST Ok",
  });
});

app.put("/users", (req, res, next) => {
  res.send({
    staus: 'Error',
    message: "Error creado al entrar en el método PUT"
  });
  next(err);
});

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
