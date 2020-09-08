import React,{useEffect,useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Temperature from './components/Temperature';
import Home from './components/Home';
import Humidity from './components/Humidity';
import socketIOClient from "socket.io-client";

function App() {
 const [value,setValue] = useState(0);
 useEffect(()=>{
const socket = socketIOClient('http://localhost:8080');

socket.on('touch',data=>{
console.log(JSON.stringify(data))
setValue()
});

},[]);
  return (
    <div className='App'>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path='/'>
              <Home value= {value}/>
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
