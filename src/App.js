import React from 'react';
import { Router, Switch, Route } from './routing';
import Home from './Fapp';
import Result from './Result';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={props => ( <Home/> )}/>
          <Route path="/result" render={props => ( <Result/> )}/>
        </Switch>
      </Router>
    );
  }
}
