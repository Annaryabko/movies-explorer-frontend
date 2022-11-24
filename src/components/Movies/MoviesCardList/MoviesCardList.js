import React, { useState, useRef } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList(props) {
  const [moviesToShow, setMoviesToShow] = useState(getInitialMoviesToShow());
  const timer = useRef();

  function onResize() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setMoviesToShow(getInitialMoviesToShow());
    }, 1000);
  };

  React.useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  function getInitialMoviesToShow() {
    if (window.innerWidth >= 1280) {
      return 12;
    } else if (window.innerWidth >= 768) {
      return 8;
    } else {
      return 5;
    }
  }

  function addMoviesToShow() {
    if (window.innerWidth >= 1280) {
      setMoviesToShow(moviesToShow + 3);
    } else {
      setMoviesToShow(moviesToShow + 2);
    }
  }


  return (
  <section className="moviesCardList">
    <ul className="MoviesCardList__wrapper">
    {
      props.films.length === 0 ? <p>Ничего не найдено :((</p> : ""
    }

      { props.films.slice(0, moviesToShow).map((movie) => {
        const savedMovie = props.savedFilms.find(savedFilm => savedFilm.movieId === movie.id);
        const savedMovieId = savedMovie ? savedMovie._id : "";
        
        return (
          <MoviesCard
            key={movie.id + savedMovieId}
            movie={movie}
            savedMovieId={savedMovieId}
            onError={props.onError}
          ></MoviesCard>
        );
      })}
    </ul>
    {
      props.films.length > moviesToShow ? <button onClick={addMoviesToShow} className="moviesCardList__button" value="Ещё">Ещё</button> : ""
    }
  </section>
  );
}

export default MoviesCardList;