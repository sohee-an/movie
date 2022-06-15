import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import {BrowserRouter as Router,
    Switch,Route,Link} from "react-router-dom";

import Home from './routes/Home'
import Detail from './routes/Detail'




function App() { // Switch는 라우터를 찾는기능이다.

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <Detail/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
