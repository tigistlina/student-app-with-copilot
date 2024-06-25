import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import StudentData from './data/StudentData.js';

const dataProvider = new StudentData();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App dataProvider={dataProvider} />
  </React.StrictMode>,
);
