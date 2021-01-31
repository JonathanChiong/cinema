import { Fragment, useState, useEffect, useRef } from "react";
import btnicon from "../../public/siteicons/next.png";
import { MovieCard } from "./movieCard";

export const Slider = (props) => {
  const [x, setX] = useState(0);
  const sliderWidth = useRef(0);
  const [width, setWidth] = useState(0);

  //Get width of slider div
  useEffect(() => {
    const handleResize = () => setWidth(sliderWidth.current.offsetWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  //Handle slideshow
  const slideLeft = () => {
    x === 0 ? setX(0) : setX(x + 200);
  };
  const slideRight = () => {
    if (Math.abs(x) > 200 * props.movies.length - width) {
      setX(0);
    } else {
      setX(x - 200);
    }
  };

  return (
    <Fragment>
      <div className="slider" ref={sliderWidth}>
        {props.movies.map((movie, i) => {
          return <MovieCard movie={movie} key={i} x={x}></MovieCard>;
        })}

        {x < 0 && (
          <button className="btnleft" onClick={slideLeft}>
            <i className="fas fa-angle-left btnicon"></i>
          </button>
        )}

        {width / 250 < props.movies.length && (
          <button className="btnright" onClick={slideRight}>
            <i className="fas fa-angle-right btnicon"></i>
          </button>
        )}
      </div>
    </Fragment>
  );
};
