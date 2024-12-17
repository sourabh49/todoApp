import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'primereact/resources/primereact.min.css';  // Core styles for PrimeReact
import 'primeicons/primeicons.css';  // For PrimeReact Icons (optional but recommended)
import 'primereact/resources/themes/lara-light-cyan/theme.css';  // A theme (change as desired)
// import 'primeflex/primeflex.css';  // For PrimeFlex grid utilities (optional)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
