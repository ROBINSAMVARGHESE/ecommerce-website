import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import 'react-loading-skeleton/dist/skeleton.css';

// Create root using `ReactDOM.createRoot`
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);




