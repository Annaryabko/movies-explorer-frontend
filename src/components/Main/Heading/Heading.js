import React from "react";

function Heading(props) {

  return (
    <div className="Heading">
        <h3 className="Heading__title">{ props.text }</h3>
        <div className="Heading__line"></div>
    </div>
  );
}

export default Heading;