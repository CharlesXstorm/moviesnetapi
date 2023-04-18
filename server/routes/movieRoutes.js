const express = require("express");

const Router = express.Router();

const {
  getAllMovies,
  createMovie
} = require("../controllers/moviesController");

Router.route("/").get(getAllMovies).post(createMovie);

module.exports = Router;
