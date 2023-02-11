const createNews = require("./createNews");
const editNews = require("./editNews");
const deleteNews = require("./deleteNews");
const voteNews = require("./voteNews");
const NewsOrderedByFeedback = require('./newsOrderedByFeedback')
const newsByCategory = require('./newsByCategory')
const readNews = require('./readNews');
const newsOrderedByDate = require ('./newsOrderedByDate')

module.exports = {
  createNews,
  editNews,
  deleteNews,
  voteNews,
  newsByCategory,
  readNews,
  newsOrderedByDate,
  NewsOrderedByFeedback,
};
