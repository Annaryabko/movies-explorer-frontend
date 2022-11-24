import React from "react";
import FilterCheckox from "./FilterCheckbox/FilterCheckbox";
import { useState } from 'react';


function SearchForm(props) {
  const [searchValue, setSearchValue] = useState(props.searchData.searchValue);
  const [isShortMovie, setIsShortMovie] = useState(props.searchData.isShortMovie);

  function handleSearchValue(e) {
    setSearchValue(e.target.value);
    // props.onChange(e.target.value, isShortMovie);
  }

  function handleisShortMovieValue(value) {
    setIsShortMovie(value);
    // props.onChange(searchValue, value);
  }

  function onSubmit(e) {
    e.preventDefault();
    props.onChange(searchValue, isShortMovie);
  }


  return (
    <section className="searchForm">
        <form className="searchForm__form" onSubmit={onSubmit}>
            <div className="searchForm__icon"></div>
            <input type="text" className="searchForm__input" onChange={handleSearchValue} placeholder="Фильм" value={searchValue}/>
            <button className="searchForm__button">Найти</button>
        </form>
        <FilterCheckox text="Короткометражки" onChange={handleisShortMovieValue} value={isShortMovie}/>
    </section>
  );
}

export default SearchForm;