import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {UserStore} from "./store/UserStore";
import {GenderStore} from "./store/GenderStore";
import {PostStore} from "./store/PostStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null);

root.render(
  <Context.Provider value={{
      user: new UserStore(),
      gender: new GenderStore(),
      post: new PostStore()
  }}>
    <App />
  </Context.Provider>
);
