import React from "react";
const url = process.env.REACT_APP_ROUTE_PREFIX || '';

function HeaderLoggedIn(props) {
  return (
    <header className="headerLoggedIn">
      <div className="headerLoggedIn-content">
          <a className="headerLoggedIn__logo-link" href={`${url}/`}>
            <div className="headerLoggedIn__logo"></div>
          </a>
        <div className="headerLoggedIn__hamburger" onClick={props.navOpen}></div>
        <nav className="headerLoggedIn__menu">
            <a className="headerLoggedIn__elem headerLoggedIn__elem-active header__films" href="/movies">Movies</a>
            <a className="headerLoggedIn__elem header__saved-films" href="/saved-movies">Saved movies</a>
            <div className="headerLoggedIn__account-wrapper">
              <a className="headerLoggedIn__elem header__account" href="/profile">Account</a>
              <div className="headerLoggedIn__account-icon"></div>
            </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderLoggedIn;