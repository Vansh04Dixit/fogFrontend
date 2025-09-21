import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import HomePart from './landingPage/home';
import Navbar from './navbar';
import Fotter from './fotter';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePart />}></Route>
    </Routes>
    <Fotter />
  </BrowserRouter>
);
