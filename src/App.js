// ./src/App.js
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import LandingPage from './pages/LandingPage'
import ThankYou from './pages/ThankYou'
import PageShell from './components/PageShell'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={PageShell(LandingPage)}></Route>
        <Route path="/spanish" exact component={PageShell(ThankYou)}></Route>
      </div>
    );
  }
}
export default App;
