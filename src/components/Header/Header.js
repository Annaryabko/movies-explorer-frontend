import React from "react";

function HeaderLoggedIn(props) {
  return (
    <header className="headerLoggedIn">
        <a className="headerLoggedIn__logo-link" href="/">
          <div className="headerLoggedIn__logo"></div>
        </a>
      <div className="headerLoggedIn__hamburger" onClick={props.navOpen}></div>
      <nav className="headerLoggedIn__menu">
          <a className="headerLoggedIn__elem headerLoggedIn__elem-active header__films" href="/movies">Фильмы</a>
          <a className="headerLoggedIn__elem header__saved-films" href="/saved-movies">Сохранённые фильмы</a>
          <div className="headerLoggedIn__account-wrapper">
            <a className="headerLoggedIn__elem header__account" href="/profile">Аккаунт</a>
            <div className="headerLoggedIn__account-icon"></div>
          </div>

      </nav>
    </header>
  );
}

export default HeaderLoggedIn;