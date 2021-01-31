const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cast = new Schema({
  f_name: {
    type: String,
    required: true,
  },
  l_name: {
    type: String,
    required: true,
  },
});
const genre = new Schema({
  genre: {
    type: String,
  },
});

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  casts: [cast],
  director: {
    type: String,
  },
  genres: [genre],
  imgURL: {
    type: String,
  },
  store: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
