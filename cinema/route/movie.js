const router = require("express").Router();
let Movie = require("../model/movieModel");

router.route("/").get(async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.route("/add").post(async (req, res) => {
  const { name, rating, casts, director, genres, imgURL, store } = req.body;
  const newMovie = new Movie({
    name,
    rating,
    casts,
    director,
    genres,
    imgURL,
    store,
  });

  try {
    await newMovie.save();
    res.status(200).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
