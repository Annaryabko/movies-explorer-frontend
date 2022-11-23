import React from "react";
import { useState } from 'react';

function FilterCheckox(props) {
  const [checkboxValue, setCheckboxValue] = useState(props.value);

  function handleClickCheckbox() {
    const value = !checkboxValue;
    setCheckboxValue(value);
    props.onChange(value);
  }

  return (
    <section className="filterCheckbox">
        <div className="filterCheckbox__container">
            <div onClick={handleClickCheckbox} className={"filterCheckbox__outer " + (checkboxValue ? "" : "filterCheckbox__outer-inactive")}>
                <div className="filterCheckbox__inner"></div>
            </div>
            <p className="filterCheckbox__text">{ props.text }</p>
        </div>
    </section>
  );
}

export default FilterCheckox;