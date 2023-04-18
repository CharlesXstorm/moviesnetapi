const express = require("express");

const app = express();

const movieRoutes = require("./routes/movieRoutes");

app.use(express.json());

app.use("/moviesnetapi/v1/movies", movieRoutes);

module.exports = app;
