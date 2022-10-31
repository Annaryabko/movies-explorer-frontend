import React from "react";
import { NavLink } from 'react-router-dom';
import closeIcon from '../../images/close-icon.svg';

function Navigation(props) {
  function navClose() {
    props.onClose();
  }

  return (
      <section className={`navigation ${props.isOpen ? "navigation_opened" : ""}`}>
          <div className="navigation__wrapper">
              <button className="navigation__close-icon" onClick={navClose}><img src={closeIcon} alt='close-icon'/></button>
              <nav className="navigation__elems">
                  <NavLink exact to="/" className="navigation__elem" activeClassName="navigation__elem-active">Главная</NavLink>
                  <NavLink to="/movies" className="navigation__elem" activeClassName="navigation__elem-active">Фильмы</NavLink>
                  <NavLink to="/saved-movies" className="navigation__elem" activeClassName="navigation__elem-active">Сохранённые фильмы</NavLink>
                  <div className="navigation__elem-profileWrapper">
                    <NavLink to="/profile" className="navigation__elem navigation__elem-profile" activeClassName="navigation__elem-active">Аккаунт</NavLink>
                    <div className="navigation__elem-profileIcon"></div>
                  </div>
              </nav>
          </div>
      </section>
  );
}

export default Navigation;