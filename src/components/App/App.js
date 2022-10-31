import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from "../Main/Main";
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';



function App() {
  const [ isNavOpened, setNavOpened ] = useState(false);

  function onNavClose() {
    setNavOpened(false);
  }

  function onNavOpen() {
    setNavOpened(true);
  }

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/movies">
          <Navigation 
            isOpen= {isNavOpened}
            onClose= {onNavClose}
          />
          <Movies 
            navOpen = {onNavOpen}
          />
        </Route>
        <Route path="/saved-movies">
          <Navigation
            isOpen= {isNavOpened}
            onClose= {onNavClose}
          />
          <SavedMovies 
            navOpen = {onNavOpen}
          />
        </Route>
        <Route path="/profile">
          <Navigation
            isOpen= {isNavOpened}
            onClose= {onNavClose}
          />
          <Profile 
            navOpen = {onNavOpen}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
