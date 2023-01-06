'use strict'

const voteNews = async (req, res, next) => {

  try {
    

    res.send({
      status: 'Ok',
      message: 'Voto realizado',
    })
    
  } catch (err) {
    next(err);
  }

}

module.exports = voteNews;