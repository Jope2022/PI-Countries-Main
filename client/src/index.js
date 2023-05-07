import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import store from "./Components/redux/store";


ReactDOM.render( // entradad principal de la aplicacion React renderiza App
  <Provider store={store} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
document.getElementById("root") 
);


