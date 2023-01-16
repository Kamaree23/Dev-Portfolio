import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Nav from './Nav';
import Kamaree from './Kamaree';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

    <Nav/>

    <Routes>
      <Route path ='/' element={<App/>}/>
      <Route path ='/Kamaree' element={<Kamaree/>}/>
    </Routes>
 

  </Router>

);

