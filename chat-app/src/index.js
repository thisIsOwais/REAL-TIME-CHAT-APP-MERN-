import React from 'react';
import {createRoot} from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.js'
import {BrowserRouter} from 'react-router-dom'
// import './index.css'
import './App.css'
// import reportWebVitals from './reportWebVitals';
import {ChatProvider} from './Context/ChatProvider.js';

const root = createRoot(document.getElementById('root'));
root.render(
  
  <ChakraProvider>
    <BrowserRouter>
    <ChatProvider>
      <React.StrictMode>
    <App />
  </React.StrictMode>
    </ChatProvider>
    </BrowserRouter>
      </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
