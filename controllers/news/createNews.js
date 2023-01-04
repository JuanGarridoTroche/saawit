'use strict'

const createNews = async (req, res, next) => {

  try {
    const {title, body, category, summary, photo} = req.body; 

    // Comprobar que los campos requeridos tengan algún valor (title y body)

    // Insertar la noticia en la BBDD con el id del usuario registrado
    
  } catch (err) {
    next(err);
  }

}

module.exports = createNews;