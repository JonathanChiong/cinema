import axios from "axios";
import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCESS,
  FETCH_MOVIES_FAIL,
} from "./movieTypes";

export const fetchMovie = () => {
  return (dispatch) => {
    dispatch(fetchMovieBegin());
    axios
      .get("/api/movie")
      .then((movies) => dispatch(fetchMovieSucess(movies.data)))
      .catch((error) => dispatch(fetchMovieFail(error.message)));
  };
};

const fetchMovieBegin = () => ({
  type: FETCH_MOVIES_BEGIN,
});

const fetchMovieSucess = (movies) => ({
  type: FETCH_MOVIES_SUCESS,
  payload: movies,
});

const fetchMovieFail = (error) => ({
  type: FETCH_MOVIES_FAIL,
  payload: error,
});
