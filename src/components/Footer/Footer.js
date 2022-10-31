import React from "react";

function Footer() {

  return (
    <section className="Footer">
        <div className="Footer__content">
            <p className="Footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="Footer__links">
                <span className="Footer__copyright">© 2020</span>
                <a href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer" className='Footer__link'>Яндекс.Практикум</a>
                <a href="https://github.com/Annaryabko/" target="_blank" rel="noopener noreferrer" className='Footer__link'>Github</a>
            </div>
        </div>
    </section>
  );
}

export default Footer;