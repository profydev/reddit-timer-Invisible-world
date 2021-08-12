import React from 'react';
import {GlobalStyle} from './GlobalStyle'
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
      <Normalize/>
      <GlobalStyle/>
      <Switch>
          <Route path="/search">Search</Route>
          <Route path="/">Home</Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
