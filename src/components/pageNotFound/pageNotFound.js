import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {

  return (
    <section className="pageNotFound">
      <div className="pageNotFound__wrapper">
        <h1 className="pageNotFound__title">404</h1>
        <p className="pageNotFound__text">Страница не найдена</p>
      </div>
      <Link className="pageNotFound__backLink">Назад</Link>
  </section>
  );
}

export default PageNotFound;