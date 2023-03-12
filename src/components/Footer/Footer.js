import React from "react";

function Footer() {

  return (
    <footer className="Footer">
        <div className="Footer__content">
            <p className="Footer__about">BeatFilm</p>
            <div className="Footer__links">
                <span className="Footer__copyright">© 2022</span>
                <a href="https://github.com/Annaryabko/movies-explorer-frontend" target="_blank" rel="noopener noreferrer" className='Footer__link'>Link</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;