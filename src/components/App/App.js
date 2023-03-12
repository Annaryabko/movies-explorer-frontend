import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import Main from "../Main/Main";
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Navigation from '../Navigation/Navigation';
import PageNotFound from '../pageNotFound/pageNotFound';
import { useState } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import ErrorPupup from '../ErrorPopup/ErrorPopup';
import { api } from '../../utils/MainApi';
import {login} from '../../utils/Auth';

function App({history}) {
  const [ isErrorOpened, setErrorOpened ] = useState(false);
  const [ isNavOpened, setNavOpened ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState({});
  const [errorMessage, setErrorMessage] = React.useState('');
  const [ loggedIn, setLoggedIn ] = useState(localStorage.getItem('loggedIn') === 'true');
  const [serverError, setServerError] = useState("");
  const url = process.env.REACT_APP_ROUTE_PREFIX || '';

  useEffect(() => {
    if (!loggedIn) {
      return;
    }
    api.getUser()
    .then((user) => setCurrentUser(user))
    .catch(() => {
      setLoggedIn(false);
    });
  }, [loggedIn]);

  function onProfileUpdated() {
    api.getUser()
    .then((user) => {
      setCurrentUser(user);
      onError("Data saved successfully");
    })
    .catch(() => {
      setLoggedIn(false);
    });
  }

  function onNavClose() {
    setNavOpened(false);
  }

  function onNavOpen() {
    setNavOpened(true);
  }

  function onErrorClose() {
    setErrorOpened(false);
  }

  function onError(message) {
    setErrorMessage(message || "Error");
    setErrorOpened(true);
  }

  function logout() {
    setLoggedIn(false);
    localStorage.setItem('loggedIn', false);
    history.push(`${url}/`);
  }

  function onLoginSuccess() {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', true);
    history.push(`${url}/movies`);
  }

  function onRegisterSuccess(email, password) {

    login(email, password)
      .then((token) => {
        onLoginSuccess();
      })
      .catch((error) => {
        setServerError(error.message);
        onError(serverError);
      });
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path={`${url}/`}>
          {
            loggedIn ? 
              <Redirect to={`${url}/movies`} /> : 
              <Login
              onSuccess={onLoginSuccess}
              onError={onError}
              />
          }

          {/* <Main
            loggedIn={loggedIn}
            navOpen={onNavOpen}
          
          /> */}
        </Route>
        
        <Route exact path={`${url}/signup`}>
          {
            loggedIn ? 
              <Redirect to={`${url}/`} /> : 
              <Register
                onSuccess={onRegisterSuccess}
                onError={onError}
              />
          }
        </Route>


        <Route exact path={`${url}/signin`}>
          {
          loggedIn ? 
          <Redirect to={`${url}/movies`} /> : 
          <Login 
            onSuccess={onLoginSuccess}
            onError={onError}
          />
          }
        </Route>
        <ProtectedRoute
          path={`${url}/movies`}
          loggedIn={loggedIn}
          component={Movies}
          navOpen={onNavOpen}
          onError={onError}
          >
        </ProtectedRoute>
        <ProtectedRoute 
          path={`${url}/saved-movies`}
          loggedIn={loggedIn}
          component={SavedMovies}
          navOpen = {onNavOpen}
          onError={onError}
          >
        </ProtectedRoute>
        <ProtectedRoute
          path={`${url}/profile`}
          loggedIn={loggedIn}
          component={Profile}
          navOpen = {onNavOpen}
          onSuccess = {onProfileUpdated}
          onLogout = {logout}
          onError = {onError}
          >
        </ProtectedRoute>
        <Route path='*'>
          <PageNotFound/>
        </Route>
      </Switch>
      <Navigation
          isOpen= {isNavOpened}
          onClose= {onNavClose}
      />
      {isErrorOpened ?
      <ErrorPupup
        message={errorMessage}
        isOpen= {isErrorOpened}
        onClose= {onErrorClose}
      /> : ""}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
