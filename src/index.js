import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route, BrowserRouter} from "react-router-dom"

import './css/reset.css';
import './css/style.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={ <App /> }> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


