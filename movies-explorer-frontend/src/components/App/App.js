// import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from "../Main/Main";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
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

export default App;
