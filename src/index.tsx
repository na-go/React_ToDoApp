import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from './auth0/login'
import LogoutButton from './auth0/logout';
import Profile from './auth0/profile'

ReactDOM.render(
  <Auth0Provider
    domain="dev-27sodn25.us.auth0.com"
    clientId="Y2BWGAzhg1QAezXcAKJbd21JB5tmQqEx"
    redirectUri={window.location.origin}
  >
    <LoginButton/>
    <LogoutButton/>
    <Profile />
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
