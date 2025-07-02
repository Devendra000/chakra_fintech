import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import logoSrc from '../assets/logo-footer.png'; // statically imported
import './Footer.css';

const Footer = () => {
  const [logoError, setLogoError] = useState(false);
  const showLogo = logoSrc && !logoError;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          {showLogo ? (
            <img
              src={logoSrc}
              alt="Chakra Financial & IT Logo"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="logo-fallback">Chakra Financial & IT</div>
          )}
          <p>Empowering insight through divine clarity.</p>
        </div>

        <div className="footer-sections">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/team">Team</NavLink></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/faq">FAQs</NavLink></li>
              <li><NavLink to="/resources">Resources</NavLink></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
              <li><NavLink to="/cookies">Cookie Settings</NavLink></li>
            </ul>
          </div>

          <div className="footer-column contact">
            <h4>Connect</h4>
            <p>hello@chakrafit.com</p>
            <p>+977-9812345678</p>
            <div className="footer-social">
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaGithub /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Chakra Financial & IT Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
