import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ScrollToTop from './components/scrollToTop';

// Initialize AOS scroll animations
AOS.init({
  duration: 600,
  easing: 'ease-out',
  once: false,
  offset: 100,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
