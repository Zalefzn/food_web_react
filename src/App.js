import React, {Component, Fragment} from'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './App.css';
import ContentPage from './Components/ContentPage/HomePage/ContentHome';
import ProductPage from './Components/ContentPage/ProductPage/ProductPage';
import ServicePage from './Components/ContentPage/ServicesPage/ServicePage';
import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import OrderPage from './Components/OrderPage/OrderPage';
import RegisPage from './Components/RegisterPage/RegisPage';


class App extends Component{
  render(){
    return(
      <Router>
          <Fragment>
            <Routes>
              <Route path="/" element={<HomePage 
              judul="FastFood"
              headerContent="Welcome"
              image="food_order1.png"/>
              }></Route>
              <Route path="/Sign" element={<LoginPage />}></Route>
              <Route path="/Regis" element={<RegisPage />}></Route>
              <Route path="/ContentHome" element={<ContentPage 
              judul="FastFood"
              headerContent="Welcome"
              image="food_order3.png"
              />}></Route>
              <Route path="/Services" element={<ServicePage />}></Route>
              <Route path="/Product" element={<ProductPage />}></Route>
              <Route path="/OrderPage" element={<OrderPage />}></Route>
            </Routes>
          </Fragment>
      </Router>
    );
  }
}

export default App;