const axios = require('axios');
require('dotenv').config();

const api = {
  FEATURED_API: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.KEY}&page=1`,
  SEARCH_API: `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.KEY}&query=`,
}

const getFeatured = async function (req, resp) {
  let result;
  try {
    result = await axios.get(`${api.FEATURED_API}`);
    resp.json(result.data);
  } catch (err) {
    console.error(`failed imdb fetch due to ${err.message}`)
  }
}

const getSearch = async function (req, resp) {
  const movie = req.query.movie;
  let result;
  try {
    result = await axios.get(`${api.SEARCH_API}${movie}`);
    resp.json(result.data);
  } catch (err) {
    console.error(`failed imdb fetch due to ${err.message}`)
  }
}

module.exports = {
  getFeatured,
  getSearch
}
