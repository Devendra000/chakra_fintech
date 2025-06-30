import heroImg from '../assets/hero-background.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      data-aos="zoom-in"
      className="hero"
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ),
          url(${heroImg}) center/cover no-repeat
        `,
        color: 'white',
        textAlign: 'center',
        padding: '8rem 2rem',
      }}
    >
      <div data-aos="zoom-out">
        <h1>Transforming Finance Through Innovation</h1>
        <p>Smart IT and financial solutions for a digital world.</p>
        <div className="hero-buttons">
          <Link to="/services">
            <button className="primary">Discover Our Services</button>
          </Link>
          <Link to="/contact">
            <button className="secondary">Talk to Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
