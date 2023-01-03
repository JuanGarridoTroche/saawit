"use strict";
const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");
const { v4: uuid } = require("uuid");
const {UPLOADS_DIR} = process.env;

const generateError = (msg, status) => {
  const err = new Error(msg);
  err.statusCode = status;
  return err;
};

const savePhoto = async (img, imgType) => {
  const uploadsPath = path.join(__dirname, UPLOADS_DIR);
  try {
    await fs.access(uploadsPath);
  } catch {
    await fs.mkdir(uploadsPath);
  }
  // Creamos un objeto sharp a partir de la imagen que quiere subir el usuario.
  const sharpImg = sharp(img.data);

  // Comprobamos si es foto de perfil o de una noticia
  if (!imgType) {
    // Redimensionamos a 200px
    sharpImg.resize(200);
  } else {
    // Si no, redimensionamos a 600px
    sharpImg.resize(600);
  }

  // Generamos un nuevo nombre a la imagen
  const imgName = `${uuid().jpg}`;

  // Sacamos la ruta completa de la imagen
  const imgPath = path.join(uploadsPath, imgName);

  // Guardamos la imagen en la carpeta uploads
  await sharpImg.toFile(imgPath);

  return imgName;
};


const deletePhoto = async (imgName) => {
  try {
    // Creamos la ruta de la imagen
    const photoPath = path.join(__dirname, imgName)
    
  } catch {
    throw generateError('Error al eleimnar la foto de perfil actual', 401)
  }
}

module.exports = {
  generateError,
  savePhoto,
  deletePhoto,
};
