import React from "react";
import Heading from "../Heading/Heading";

function AboutProject() {

  return (
    <section className="AboutProject" id="AboutProject">
        <Heading text="О проекте"/>
        <div className="AboutProject__content">
            <div className="AboutProject__descr">
                <h4 className="AboutProject__header">Дипломный проект включал 5 этапов</h4>
                <p className="AboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="AboutProject__descr">
                <h4 className="AboutProject__header">На выполнение диплома ушло 5 недель</h4>
                <p className="AboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
        <div className="AboutProject__progress">
            <div className="AboutProject__progressBackend">
                <div className="AboutProject__projectText AboutProject__projectText-backend">1 неделя</div>
                <div className="AboutProject__projectText">Back-end</div>
            </div>
            <div className="AboutProject__progressFrontend">
            <div className="AboutProject__projectText AboutProject__projectText-frontend">4 недели</div>
                <div className="AboutProject__projectText">Front-end</div>
            </div>

        </div>
    </section>
  );
}

export default AboutProject;