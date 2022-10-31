import React from "react";
import { initialFilms } from "../../../utils/constants";
import MoviesCardFavourite from "../../SavedMovies/MoviesCardFavourite/MoviesCardFavourite";

function MoviesCardList() {

  return (
  <section className="moviesCardList">
    <ul className="MoviesCardList__wrapper">
      {initialFilms.map((movie) => {
        return (
          <MoviesCardFavourite
            movie={movie}
          ></MoviesCardFavourite>
        );
      })}
    </ul>
    <button 
      className="moviesCardList__button"
      value="Ещё"
    >Ещё</button>
  </section>
  );
}

export default MoviesCardList;