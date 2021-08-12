import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Switch>
          <Route path="/search">Search</Route>
          <Route path="/">Home</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
