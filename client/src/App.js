import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Temperature from './components/Temperature';
import Home from './components/Home';
import Humidity from './components/Humidity';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/temperature'>
              <Temperature />
            </Route>
            <Route path='/humidity'>
              <Humidity />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
