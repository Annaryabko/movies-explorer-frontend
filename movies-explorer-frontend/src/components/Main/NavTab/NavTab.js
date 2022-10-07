import React from "react";
import { Link } from 'react-router-dom';

function NavTab() {

  return (
    <section className="navtab">
      <Link className="navtab__link" to="#">О проекте</Link>
      <Link className="navtab__link" to="#">Технологии</Link>
      <Link className="navtab__link" to="#">Студент</Link>
    </section>
  );
}

export default NavTab;
