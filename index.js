import React from 'react';
// React 18
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// React 17
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

