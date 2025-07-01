import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" data-aos="slide-up">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Chakra Financial and IT Solution</h3>
          <p>
            Blending financial strategy and technology to empower better decisions.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/metrics">Metrics</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:info@chakrabeaconfinances.com">info@chakrabeaconfinances.com</a></p>
          <p>Phone: <a href="tel:+97798000000">+977-9866223309</a></p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Chakra Financial and IT Solution. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
