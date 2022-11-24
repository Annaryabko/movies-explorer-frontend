import React from "react";
import Heading from "../Heading/Heading";

function Techs() {

  return (
    <section className="Techs" id="Techs">
        <div className="Techs__content">
            <Heading text="О Технологии"/>
            <h1 className="Techs__header">7 технологий</h1>
            <p className="Techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="Techs__list">
                <li className="Techs__item">HTML</li>
                <li className="Techs__item">CSS</li>
                <li className="Techs__item">JS</li>
                <li className="Techs__item">React</li>
                <li className="Techs__item">Git</li>
                <li className="Techs__item">Express.js</li>
                <li className="Techs__item">mongoDB</li>
            </ul>
        </div>
    </section>
  );
}

export default Techs;