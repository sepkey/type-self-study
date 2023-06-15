import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { Routes } from './Routes';//Router-chapter
// import App from './form/App'; //Form-chapter
// import App from './stateManagement/App'; //State management-chapter
import App from './rest/App'; //rest API chapter

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <Routes /> */}
    <App />
  </React.StrictMode>,
);

