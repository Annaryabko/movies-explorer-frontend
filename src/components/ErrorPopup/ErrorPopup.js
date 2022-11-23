import React from "react";
import closeIcon from '../../images/close-icon.svg';

function ErrorPupup(props) {

  function navClose() {
    props.onClose();
  }

  return (
      <section className={`errorPupup ${props.isOpen ? "errorPupup_opened" : ""}`}>
          <div className="errorPupup__wrapper">
              <button className="errorPupup__close-icon" onClick={navClose}><img src={closeIcon} alt='close-icon'/></button>
              <h3>Оповещение</h3>
              <p>{props.message || "Непонятная ошибка"}</p>
          </div>
      </section>
  );
}

export default ErrorPupup;