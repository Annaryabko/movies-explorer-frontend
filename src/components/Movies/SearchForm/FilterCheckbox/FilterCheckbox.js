import React from "react";

function FilterCheckox(props) {

  return (
    <section className="filterCheckbox">
        <div className="filterCheckbox__container">
            <div className="filterCheckbox__outer">
                <div className="filterCheckbox__inner"></div>
            </div>
            <p className="filterCheckbox__text">{ props.text }</p>
        </div>
    </section>
  );
}

export default FilterCheckox;