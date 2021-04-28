import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Config} from './pages/config';
import {Home} from './pages/home';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/config">
            <Config/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
