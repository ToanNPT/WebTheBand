import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Common/Header'
import Slider from './Common/Slider';
import Content from './Common/Content'
import Modal from './Common/Modal';
import Contact from './Common/Contact'
import Footer from './Common/Footer';
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Slider />
    <Content />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
