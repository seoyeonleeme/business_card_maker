import React from 'react';
import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';

//console.log(process.env.REACT_APP_FIREBASE_API_KEY);

function App({ FileInput, authService, cardRepository }) {
  return (
    <div class={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
