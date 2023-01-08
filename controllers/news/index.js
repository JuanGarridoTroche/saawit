const createNews = require("./createNews");
const editNews = require("./editNews");
const deleteNews = require("./deleteNews");
const voteNews = require("./voteNews");
const topRankedNews = require('./topRankedNews')
const newsByDate = require('./newsByDate')

module.exports = {
  createNews,
  editNews,
  deleteNews,
  voteNews,
  topRankedNews,
  newsByDate,
};
