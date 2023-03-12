import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm"
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import {api} from "../../utils/MainApi";

function SavedMovies(props) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isShortMovie, setisShortMovie] = useState(false);
  const [savedMovieFiltered, setSavedMovieFiltered ] = useState([]);

  function onFilmDelete() {
    api.getMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch(error => {
        props.onError(error.message);
      });
  }

  useEffect(() => {
    const filteredFilms = savedMovies.filter(film => {
      if (!film.nameRU.toLowerCase().includes(searchValue.toLowerCase())) {
        return false;
      }
      if (isShortMovie && film.duration > 40) {
        return false;
      }
      return true;
    });
    setSavedMovieFiltered(filteredFilms);
  }, [searchValue, isShortMovie, savedMovies]);

  function handleSearchChange(searchValue, isShortMovie) {
    setSearchValue(searchValue);
    setisShortMovie(isShortMovie);
  }

  useEffect(()=> {
    api.getMovies()
      .then((res) => {
        setSavedMovies(res);
        setIsLoading(false);
      })
      .catch(error => {
        props.onError(error.message);
      });
  }, []);

  return (
          <section className="movies">
        <Header 
          navOpen = {props.navOpen}
        />
        <main>
          <SearchForm onChange={handleSearchChange} searchData={{searchValue, isShortMovie}}/>
          {
            !isLoading ? <MoviesCardList
              savedFilms={savedMovieFiltered}
              onFilmDelete={onFilmDelete}
              onError={props.onError}/> : ""
          }
          {
            isLoading ? <Preloader/> : ""
          }
          {
            savedMovies.length === 0 ? <p className="movies__noElems">No movies saved</p> : ""
          }
          {
            (savedMovieFiltered.length === 0) && !(savedMovies.length === 0) ? <p className="movies__noElems">Nothing found</p> : ""
          } 
        </main>
        <Footer />
      </section>
  );
}

export default SavedMovies;