import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm"
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { getAllMovies } from "../../utils/MoviesApi";
import Preloader from "./Preloader/Preloader";
import {api} from "../../utils/MainApi";
// import { initialFilms } from "../../utils/constants";



function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState(JSON.parse(localStorage.getItem('initialMovies') || '[]'));
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState(JSON.parse(localStorage.getItem('searchValue') || '""'));
  const [isShortMovie, setisShortMovie] = useState(JSON.parse(localStorage.getItem('isShortMovie') || "false"));
  const [serverError, setServerError] = useState("");

  useEffect(()=> {
    api.getMovies()
      .then((res) => setSavedMovies(res))
      .catch(() => {
        setServerError("Ошибка, попробуйте через неделю еще раз");
      });
  }, []);

  useEffect(()=> {
    if (initialMovies.length === 0) {
      return;
    }
    
    const filteredFilms = initialMovies.filter(film => {
      if (!film.nameRU.toLowerCase().includes(searchValue.toLowerCase())) {
        return false;
      }
      if (isShortMovie && film.duration > 40) {
        return false;
      }

      return true;
    });
    
    setMovies(filteredFilms);
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
    localStorage.setItem('isShortMovie', JSON.stringify(isShortMovie));
  }, [searchValue, isShortMovie, initialMovies]);

  function handleSearchChange(searchValue, isShortMovie) {
    setSearchValue(searchValue);
    setisShortMovie(isShortMovie);

    if (initialMovies.length === 0 && !isLoading) {
      getAllMovies()
        .then((movies) => {
          setIsLoading(false);
          setInitialMovies(movies);
          localStorage.setItem('initialMovies', JSON.stringify(movies));
        })
        .catch(() => {
          setServerError("Ошибка, попробуйте через неделю еще раз");
        });
      
      setIsLoading(true);
    }
  }
  
  return (

      <section className="movies">
        <Header 
          navOpen = {props.navOpen}
        />
        <main>
          <SearchForm onChange={handleSearchChange} searchData={{searchValue, isShortMovie}}/>
          {
            !serverError && searchValue && !isLoading ? <MoviesCardList
              films={movies}
              onError={props.onError}
              savedFilms={savedMovies}/> : ""
          }

          {
            !serverError && !searchValue ? <p className="movies__noElems">Нужно ввести ключевое слово!</p> : ""
          }
          {serverError}
          {
            isLoading && !serverError ? <Preloader/> : ""
          }
        </main>
        <Footer />
      </section>
  );
}

export default Movies;