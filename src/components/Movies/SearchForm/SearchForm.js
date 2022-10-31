import React from "react";
import FilterCheckox from "./FilterCheckbox/FilterCheckbox";


function SearchForm() {

  return (
    <section className="searchForm">
        <form className="searchForm__form">
            <div className="searchForm__icon"></div>
            <input type="text" className="searchForm__input" placeholder="Фильм"/>
            <button className="searchForm__button">Найти</button>
        </form>
        <FilterCheckox text="Короткометражки"/>
    </section>
  );
}

export default SearchForm;