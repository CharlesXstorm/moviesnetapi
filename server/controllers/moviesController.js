const moviesModel = require("../models/moviesModel");

exports.getAllMovies = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    const moviesDoc = await moviesModel.find();
    res.status(200).json({
      response: "success",
      result: moviesDoc.length,
      data: moviesDoc
    });
  } catch (err) {
    res.status(404).json({
      response: "failed",
      message: err
    });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const moviesDoc = await moviesModel.create(req.body);
    res.status(201).json({
      response: "success",
      message: "successfully created",
      data: moviesDoc
    });
  } catch (err) {
    res.status(400).json({
      response: "failed",
      message: err
    });
  }
};
