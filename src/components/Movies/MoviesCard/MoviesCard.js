import React, { useState } from "react";
import { BASE_FILMS_URL } from "../../../utils/constants";
import SavedMovies from "../../SavedMovies/SavedMovies";
import {api} from "../../../utils/MainApi";


function MoviesCard(props) {
  const [savedMovieId, setsavedMovieId] = useState(props.savedMovieId);
  const [isLiked, setIsLiked] = useState(!!props.savedMovieId);


  function handleClickChange () {
    if (isLiked) {
      api.deleteMovie(savedMovieId)
        .then(() => { 
          setIsLiked(!isLiked);
        })
        .catch((error) => {
          props.onError(error.message);
        });
    } else {
      api.saveMovie(props.movie)
        .then((res) => { 
          setIsLiked(!isLiked);
          setsavedMovieId(res._id);
        })
        .catch((error) => {
          props.onError(error.message);
        });
    }
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
      <a href={props.movie.trailerLink} target="_blank" className="moviesCard__link">
          <img
            className="moviesCard__picture"
            src={ BASE_FILMS_URL + props.movie.image.formats.thumbnail.url }
            alt={ props.movie.nameRU }
          />
      </a>
      

          <div className="moviesCard__wrapper">
            <h5 className="moviesCard__name">
              { props.movie.nameRU }
            </h5>
            <button
                className= { "moviesCard__like " +  (isLiked ? "moviesCard__like-active " : "") }
                type="button"
                value="Нравится"
                onClick={handleClickChange}
              ></button>
          </div>
          <p className="moviesCard__timing">
              { calculateHours(props.movie.duration) }
          </p>
    </li>
  );
}

export default MoviesCard;