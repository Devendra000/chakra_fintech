import { FaFileInvoice, FaChartBar, FaCode } from 'react-icons/fa';

const ServicesPage = () => {
  return (
    <section className="services text-center">
      <h2 data-aos="fade-up">Our Services</h2>

      <div className="grid grid-2">

        {/* Accounting */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <FaFileInvoice size={40} color="#ff6a00" />
          <h3>Accounting</h3>
          <ul>
            <li>Bookkeeping</li>
            <li>Tax Filing & Preparation</li>
            <li>Financial Statement Generation</li>
            <li>Ledger Reconciliation</li>
          </ul>
        </div>

        {/* Financial Analysis */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <FaChartBar size={40} color="#ff6a00" />
          <h3>Finance & Insights</h3>
          <ul>
            <li>Ratio & Trend Analysis</li>
            <li>Data Interpretation & Reporting</li>
            <li>Budget & Forecasting Tools</li>
            <li>KPI Dashboards</li>
          </ul>
        </div>

        {/* IT Solutions */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <FaCode size={40} color="#ff6a00" />
          <h3>IT Development</h3>
          <ul>
            <li>Custom Website Development</li>
            <li>Cloud & API Integration</li>
            <li>CRM/ERP Setup & Support</li>
            <li>Progressive Web Applications</li>
          </ul>
        </div>

        {/* Expandable Add-on */}
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <FaCode size={40} color="#ff6a00" />
          <h3>Additional Offerings</h3>
          <ul>
            <li>Invoice Automation Tools</li>
            <li>Data Migration & Backup Systems</li>
            <li>Mobile App Prototyping</li>
            <li>AI-Powered Document Categorization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
