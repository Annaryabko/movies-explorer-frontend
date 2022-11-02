import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm"
import MoviesCardList from "./MoviesCardList/MoviesCardList";


function SavedMovies(props) {

  return (
    <section className="movies">
      <Header 
        navOpen = {props.navOpen}
      />
      <main>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;