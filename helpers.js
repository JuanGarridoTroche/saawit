'use strict'

const generateError =(msg, status) => {
  const err = new Error(msg);
  err.statusCode = status;
  return err;
}

module.exports = generateError;