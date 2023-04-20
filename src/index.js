import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {UserStore} from "./store/UserStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null);

root.render(
  <Context.Provider value={{
      user: new UserStore(),
  }}>
    <App />
  </Context.Provider>
);
