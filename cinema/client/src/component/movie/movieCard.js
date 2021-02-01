import { Fragment, useState } from "react";
import { Stars } from "./stars";

export const MovieCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div
        className="movie"
        style={{ transform: `translateX(${props.x}%)` }}
        onClick={() => setShowModal(!showModal)}
        data-content={props.data}
      >
        <img src={props.movie.imgURL} className="movieImg"></img>
      </div>
      {showModal && (
        <div className="bgmodal" onClick={() => setShowModal(!showModal)}>
          <h2 className="cardTitle">{props.movie.name}</h2>
          <div className="modalContent">
            <div className="cardRow">
              <div className="desc">
                <p>Rating </p>
              </div>
              <div className="descVal">
                <Stars num={props.movie.rating} starKey={props.movie._id} />
              </div>
            </div>
            <div className="cardRow">
              <div className="desc">
                <p>Director </p>
              </div>
              <div className="descVal">
                <p>{props.movie.director}</p>
              </div>
            </div>

            <div className="cardRow">
              <div className="desc">
                <p>Casts: </p>
              </div>
              <div className="descVal">
                {props.movie.casts.map((item, index) => {
                  return (
                    <p key={index + "cast"}>
                      {item.f_name} {item.l_name},
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="cardRow">
              <div className="desc">
                <p>Genre: </p>
              </div>
              <div className="descVal">
                {props.movie.genres.map((item, index) => {
                  return <p key={index + "genre"}>{item.genre}</p>;
                })}
              </div>
            </div>
            <div className="cardRow">
              <div className="desc">
                <button className="btnBuy">
                  <a href={props.movie.store}>Buy</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
