import { FaPiggyBank, FaCloud, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="services text-center">
      <h2 data-aos="fade-up">Our Core Services</h2>
      <div className="grid grid-2">
        <div className="service-card" data-aos="zoom-in">
          <FaPiggyBank size={40} color="#ff6a00" />
          <h3>Financial Consulting</h3>
          <p>Empowering growth through expert strategy.</p>
        </div>
        <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
          <FaCloud size={40} color="#ff6a00" />
          <h3>Cloud IT Infrastructure</h3>
          <p>Scalable, always-on, and secure solutions.</p>
        </div>
        <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
          <FaShieldAlt size={40} color="#ff6a00" />
          <h3>Cybersecurity & Compliance</h3>
          <p>State-of-the-art digital protection.</p>
        </div>
        <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
          <FaChartLine size={40} color="#ff6a00" />
          <h3>Business Intelligence</h3>
          <p>Smart analytics that drive impact.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
