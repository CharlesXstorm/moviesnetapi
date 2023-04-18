const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A movie must have a name"],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    require: [true, "A movie must have a description"]
  },
  category: {
    type: String,
    require: [true, "A movie must have a category"]
  },
  imageurl: {
    type: String,
    require: [true, "Image url must be given"],
    trim: true
  },
  ratingQuantity: {
    type: Number,
    default: 0,
    trim: true
  },
  ratingAverage: {
    type: Number,
    trim: true,
    default: 10
  }
});

const moviesModel = mongoose.model("movies", moviesSchema);

module.exports = moviesModel;
