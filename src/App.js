import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import ReactPage from './pages/reactpage/reactpage.component';
import { Menu } from './components/menu/menu.component'
import { Footer } from './components/footer/footer.componet';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {}
  }
  render(){
    return (
      <Router>
        <div className="App">
          <Menu/>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/react" component={ReactPage} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
