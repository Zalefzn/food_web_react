import React, {Component, Fragment} from'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';


class App extends Component{
  render(){
    return(
      <Router>
          <Fragment>
            <Routes>
              <Route path="/" element={<HomePage 
              judul="FastFood"/>
              }></Route>
              <Route path="/Sign" element={<LoginPage />}></Route>
            </Routes>
          </Fragment>
      </Router>
    );
  }
}

export default App;