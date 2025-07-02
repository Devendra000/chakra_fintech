import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer-new';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import MetricsPage from './pages/MetricsPage';
import ContactPage from './pages/ContactPage';
import BackToTopButton from './components/BackToTopButton';

const App = () => {
  return (
    <>
      < div className="top" />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/metrics" element={<MetricsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default App;
