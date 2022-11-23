import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function PageNotFound({history}) {

    function handlerGoBack() {
      history.goBack();
    }

  return (
    <section className="pageNotFound">
      <div className="pageNotFound__wrapper">
        <h1 className="pageNotFound__title">404</h1>
        <p className="pageNotFound__text">Страница не найдена</p>
      </div>
      <a className="pageNotFound__backLink" onClick={handlerGoBack}>Назад</a>
  </section>
  );
}

export default withRouter(PageNotFound);