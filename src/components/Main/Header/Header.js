import React from "react";
const url = process.env.REACT_APP_ROUTE_PREFIX || '';

function MainHeader() {

  return (
    <header className="header">
        <a className="header__logo-link" href={`${url}/`}>
          <div className="header__logo"></div>
        </a>
      <div className="header__menu">
          <a href="/signup" className="header__link header__register">Регистрация</a>
          <a href="/signin" className="header__link header__login">Войти</a>
      </div>
    </header>
  );
}

export default MainHeader;