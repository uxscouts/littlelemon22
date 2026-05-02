import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BookingProvider } from './context/BookingContext';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from "./AppRoutes";
import Footer from './components/Footer';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookingProvider>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
          <App />  
      <Footer/>
    </BookingProvider>
  </React.StrictMode>
);


