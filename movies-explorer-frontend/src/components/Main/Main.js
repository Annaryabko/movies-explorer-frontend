import './Main.css';
import { Route, Switch, useRouteMatch, BrowserRouter, Redirect } from 'react-router-dom';
import Header from "../Header/Header";
import Promo from "../Main/Promo/Promo"
import NavTab from './NavTab/NavTab';

function Main() {
  return (
    <div className="Main">
      <Header/>
      <Promo/>
      <NavTab/>
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default Main;
