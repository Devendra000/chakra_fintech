import { useState } from 'react';
import { FaFileInvoice, FaChartBar, FaCode } from 'react-icons/fa';
import services from '../data/services.json';
import './Services.css';

const iconMap = {
  FaFileInvoice: <FaFileInvoice size={60} className="service-icon" />,
  FaChartBar: <FaChartBar size={60} className="service-icon" />,
  FaCode: <FaCode size={60} className="service-icon" />
};

const ServicesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="services-section">
      <h2 className="services-title" data-aos="fade-up" data-aos-duration="800">Our Premium Services</h2>
      <div className="services-grid">
        {services.map(service => {
          const features = service.packages.Basic.features;
          const isExpanded = expandedCards[service.id];

          return (
            <div key={service.id} className="service-card" data-aos="zoom-in" data-aos-duration="800" data-aos-easing="ease-out">
              <div className="service-icon-wrapper">{iconMap[service.icon]}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtext">{service.subtext}</p>
              <div className="feature-container">
                <ul className="feature-list">
                  {(isExpanded ? features : features.slice(0, 2)).map((item, i) => (
                    <li key={i} className="feature-item">
                      <span className="feature-check">✓</span> {item}
                    </li>
                  ))}
                </ul>
                {features.length > 2 && (
                  <button className="toggle-btn" onClick={() => toggleExpand(service.id)}>
                    {isExpanded ? 'Show Less' : 'Show More'}
                  </button>
                )}
              </div>
              <div className="highlights">
                {service.highlights.map((tag, i) => (
                  <span key={i} className={`highlight-tag ${tag.replace(/\s+/g, '-').toLowerCase()}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <button className="cta-btn" onClick={() => openModal(service)}>
                Explore Plans
              </button>
            </div>
          );
        })}
      </div>

      {modalOpen && selectedService && (
        <div className="modal-overlay" data-aos="fade-in" data-aos-duration="600">
          <div className="modal-content" onClick={e => e.stopPropagation()} data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out">
            <button className="modal-close" onClick={closeModal}>×</button>
            <h3 className="modal-title">{selectedService.title}</h3>
            <p className="modal-subtext">{selectedService.subtext}</p>
            <div className="modal-packages">
              {Object.entries(selectedService.packages).map(([tier, details]) => (
                <div
                  key={tier}
                  className={`package-card ${tier.toLowerCase()} ${details.recommended ? 'recommended' : ''}`}
                >
                  {details.recommended && <div className="recommended-badge">Recommended</div>}
                  <h4 className="package-tier">{tier}</h4>
                  <div className={`package-price ${tier.toLowerCase()}-price`}>{details.price}</div>
                  <ul className="package-features">
                    {details.features.map((feat, i) => (
                      <li key={i} className="feature-item">
                        <span className="feature-check">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                  <button className="package-btn">Select Plan</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesPage;