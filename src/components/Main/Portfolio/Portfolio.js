import React from "react";

function Portfolio() {

  return (
    <section className="Portfolio">
        <div className="portfolio__header">Портфолио</div>
        <div className="Portfolio__content">
            <a target="_blank" rel="noopener noreferrer" className="Portfolio__link" href="https://github.com/Annaryabko/how-to-learn">Статичный сайт<span className="Portfolio__icon">↗</span></a>
            <a target="_blank" rel="noopener noreferrer" className="Portfolio__link" href="https://annaryabko.github.io/russian-travel/index.html">Адаптивный сайт<span className="Portfolio__icon">↗</span></a>
            <a target="_blank" rel="noopener noreferrer" className="Portfolio__link" href="https://anna.nomorepartiesxyz.ru/sign-in">Одностраничное приложение<span className="Portfolio__icon">↗</span></a>

        </div>
    </section>
  );
}

export default Portfolio;