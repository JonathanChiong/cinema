import { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Slider } from "./slider";
import { Top10 } from "./top10";

export const Movie = () => {
  const { movies, loading, error } = useSelector((state) => state.movies);
  const [top10, setTop10] = useState([]);
  const [drama, setDrama] = useState([]);
  const [action, setAction] = useState([]);
  const [adventure, setAdventure] = useState([]);

  useEffect(() => {
    findTop10();
    findDrama();
    findAction();
    findAdventure();
  }, [movies]);

  const findTop10 = () => {
    const result = movies
      .sort((a, b) => a.rating - b.rating)
      .slice(movies.length - 10);
    setTop10(result.reverse());
  };

  const findDrama = () => {
    let dramaList = [];

    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (genre.genre === "Drama") {
          dramaList.push(movie);
        }
      });
    });
    setDrama(dramaList);
  };

  const findAction = () => {
    let actionList = [];
    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (genre.genre === "Action") {
          actionList.push(movie);
        }
      });
    });
    setAction(actionList);
  };
  const findAdventure = () => {
    let adventureList = [];
    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (genre.genre === "Adventure") {
          adventureList.push(movie);
        }
      });
    });
    setAdventure(adventureList);
  };

  return (
    <div className="movieContainer">
      {loading && <Spinner animation="border" />}
      {error ? (
        <h2 className="errormsg">{error}</h2>
      ) : (
        <Fragment>
          <h3> Top 10 movies</h3>
          <Top10 movies={top10} />
          <h3> Drama</h3>
          <Slider movies={drama} />
          <h3> Action</h3>
          <Slider movies={action} />
          <h3> Adventure</h3>
          <Slider movies={adventure} />
          <h3> All movies</h3>
          <Slider movies={movies} />
        </Fragment>
      )}
    </div>
  );
};
