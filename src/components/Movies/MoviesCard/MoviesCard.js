import React from "react";

function MoviesCard({ movie }) {

  return (
    <li className="moviesCard">
        <img
          className="moviesCard__picture"
          src={ movie.link }
          alt={ movie.name }
        />

        <div className="moviesCard__wrapper">
          <h5 className="moviesCard__name">
            { movie.name }
          </h5>
          <button
              className="moviesCard__like"
              type="button"
              value="Нравится"
            ></button>
        </div>
        <p className="moviesCard__timing">
            { movie.timing }
        </p>
    </li>
  );
}

export default MoviesCard;