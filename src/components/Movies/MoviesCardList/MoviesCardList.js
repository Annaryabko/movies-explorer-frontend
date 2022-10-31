import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { initialFilms } from "../../../utils/constants";


function MoviesCardList() {

  return (
  <section className="moviesCardList">
    <ul className="MoviesCardList__wrapper">
      {initialFilms.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
          ></MoviesCard>
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