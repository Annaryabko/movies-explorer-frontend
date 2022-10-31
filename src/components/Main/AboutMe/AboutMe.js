import React from "react";
import Heading from "../Heading/Heading";

function AboutMe() {

  return (
    <section className="AboutMe" id="AboutMe">
        <Heading text="Студент"/>
        <div className="AboutMe__content">
            <div className="AboutMe__texts">
                <h1 className="AboutMe__header">Анна</h1>
                <span className="AboutMe__title">Фронтенд-разработчик, 33 года</span>
                <p className="AboutMe__descr">Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a href="https://github.com/Annaryabko/" target="_blank" rel="noopener noreferrer" className='AboutMe__link'>Github</a>
            </div>
            <div className="AboutMe__picture"></div>
        </div>
    </section>
  );
}

export default AboutMe;