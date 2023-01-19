import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App';
import filterReducer from './reducers/filterReducer';
import emailReducer from './reducers/emailReducer';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    email: emailReducer
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
    
  
);
