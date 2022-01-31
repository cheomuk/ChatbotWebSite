import React from 'react';
import ReactDOM from 'react-dom';
import { IoProvider } from 'socket.io-react-hook';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <IoProvider>
      <App />
    </IoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
