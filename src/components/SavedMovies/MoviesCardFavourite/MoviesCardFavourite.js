import React from "react";
import {api} from "../../../utils/MainApi";

function MoviesCardFavourite({ movie, onFilmDelete, ...props}) {
  function handleClickDelete() {
    api.deleteMovie(movie._id)
    .then(() => {
      onFilmDelete();
    })
    .catch(error => {
      props.onError(error.message);
    });
  }
  function calculateHours(minutes) {
    if (minutes > 60 ) {
      const hours = Math.floor(minutes/60);
      const lastMinutes = minutes - (hours*60);
      return `${hours} h ${lastMinutes} min`;

    } else {
      return `${minutes} min`;
    }
  }

  return (
    <li className="moviesCard">
      <a href={movie.trailerLink} target="_blank" className="moviesCard__link">
          <img
            className="moviesCard__picture"
            src= { movie.thumbnail }
            alt={ movie.nameRU }
          />
      </a>

          <div className="moviesCard__wrapper">
            <h5 className="moviesCard__name">
              { movie.nameRU }
            </h5>
            <button
                className="moviesCard__delete"
                type="button"
                value="Удалить"
                onClick={handleClickDelete}
              ></button>
          </div>
          <p className="moviesCard__timing">
          { calculateHours(movie.duration) }
          </p>
    </li>
  );
}

export default MoviesCardFavourite;