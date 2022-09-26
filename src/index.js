import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './auth/auth-provider';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <AuthProvider>
       <App />
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
