"use strict";
require("dotenv").config();
const express = require("express");

const { PORT } = process.env;



const app = express();


app.use(express.json());

/*
 * ###########################
 * ## Middleware de /users  ##
 * ###########################
 */
const loginUser = require('./controllers/users/loginUser.js');

app.post('/users/login', loginUser);




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
