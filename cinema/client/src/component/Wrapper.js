import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Movie } from "./movie/movie";
import { useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import { fetchMovie } from "../redux/movie/movieActions";

function Wrapper() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

  return (
    <Fragment>
      <div className="app">
        <Header />
        <Movie />
      </div>
      <Footer />
    </Fragment>
  );
}

export default Wrapper;
