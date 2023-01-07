const createNews = require("./createNews");
const editNews = require("./editNews");
const deleteNews = require("./deleteNews");
const voteNews = require("./voteNews");
const topRankedNews = require('./topRankedNews')
const NewsByDate = require('./NewsByDate')

module.exports = {
  createNews,
  editNews,
  deleteNews,
  voteNews,
  topRankedNews,
  NewsByDate,
};
