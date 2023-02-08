const loginUser = require("./loginUser");
const newUser = require("./newUser");
const editPhoto = require("./editPhoto");
const editPassword = require("./editPassword");
const sendRecoverPassword = require("./sendRecoverPassword");
const recoverPassword = require("./recoverPassword");
const editProfile = require("./editProfile");
const readProfile = require("./readProfile");
const readLoggedProfile = require("./readLoggedProfile");

module.exports = {
  loginUser,
  newUser,
  editPhoto,
  editPassword,
  sendRecoverPassword,
  recoverPassword,
  editProfile,
  readProfile,
  readLoggedProfile,
};
