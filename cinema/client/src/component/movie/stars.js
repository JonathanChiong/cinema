import { Fragment } from "react";

export const Stars = (prop) => {
  const fullStar = <i className="fas fa-star ratingstar"></i>;
  const halfStar = <i className="fas fa-star-half-alt ratingstar"></i>;

  const createStar = (num) => {
    let stars = [];
    console.log(num);
    if (num % 1 === 0) {
      for (let i = 0; i < num; i++) {
        stars.push(
          <i className="fas fa-star ratingstar" key={prop.starKey + i}></i>
        );
      }
    } else {
      for (let i = 0; i < num - 1; i++) {
        stars.push(
          <i className="fas fa-star ratingstar" key={prop.starKey + i}></i>
        );
      }
      stars.push(
        <i
          className="fas fa-star-half-alt ratingstar"
          key={prop.starKey + "half"}
        ></i>
      );
    }

    return stars;
  };
  return <Fragment>{createStar(prop.num)}</Fragment>;
};
