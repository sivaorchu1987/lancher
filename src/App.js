import React, { Component } from 'react';
import PaginationExample from './components/PaginationExample'
import { BrowserRouter,Route } from 'react-router-dom'

import './App.css';

import Home from "./components/Home";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Route exact path='/' component={Home}/>

          </div>
        </BrowserRouter>
    );
  }
}

export default App;
