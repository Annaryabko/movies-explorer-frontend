import React from "react";
import { initialFilms } from "../../../utils/constants";
import MoviesCardFavourite from "../../SavedMovies/MoviesCardFavourite/MoviesCardFavourite";

function MoviesCardList(props) {

  return (
  <section className="moviesCardList">
    <ul className="MoviesCardList__wrapper">
      {props.savedFilms.map((movie) => {
        return (
          <MoviesCardFavourite
            key={movie._id}
            movie={movie}
            onFilmDelete={props.onFilmDelete}
            onError={props.onError}
          ></MoviesCardFavourite>
        );
      })}
    </ul>
  </section>
  );
}

export default MoviesCardList;