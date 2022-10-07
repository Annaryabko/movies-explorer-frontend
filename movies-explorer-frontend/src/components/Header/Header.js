import React from "react";
import { Route, Switch, Link  } from 'react-router-dom';

function Header() {
  // const url = props.pathname;
  // function logout(e) {
  //   e.preventDefault();
  //   props.onLogout();
  // }

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__login">
        {/* <Switch> */}
        {/* <Route path="/sign-in"> */}
            <div className="header__register">
            <Link className="header__link" to="/sign-up">Регистрация</Link>
            </div>
          {/* </Route> */}
          {/* <Route path="/sign-up"> */}
            <div className="header__login">
              <Link className="header__link" to="/sign-in">Войти</Link>
            </div>
          {/* </Route> */}
          {/* <Route path={`${url}/`}>
            <div className="header__logout">
              {props.email} <a className="header__link" onClick={logout}> Выход</a>
            </div>
          </Route> */}
        {/* </Switch> */}
      </div>
    </header>
  );
}

export default Header;