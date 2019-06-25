import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
      
  <Menu/>
<Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/Contact" component={Contact}/>
  </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
