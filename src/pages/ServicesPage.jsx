import { FaFileInvoice, FaChartBar, FaCode } from 'react-icons/fa';
import ExpandableList from '../components/ExpandableList.jsx';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaFileInvoice size={40} color="#ff6a00" />,
      title: 'Accounting',
      items: [
        'Bookkeeping',
        'Tax Filing & Preparation',
        'Financial Statement Generation',
        'Ledger Reconciliation',
      ],
    },
    {
      icon: <FaChartBar size={40} color="#ff6a00" />,
      title: 'Finance & Insights',
      items: [
        'Ratio & Trend Analysis',
        'Data Interpretation & Reporting',
        'Budget & Forecasting Tools',
        'KPI Dashboards',
      ],
    },
    {
      icon: <FaCode size={40} color="#ff6a00" />,
      title: 'IT Development',
      items: [
        'Custom Website Development',
        'Cloud & API Integration',
        'CRM/ERP Setup & Support',
        'Progressive Web Applications',
      ],
    },
    {
      icon: <FaCode size={40} color="#ff6a00" />,
      title: 'Additional Offerings',
      items: [
        'Invoice Automation Tools',
        'Data Migration & Backup Systems',
        'Mobile App Prototyping',
        'AI-Powered Document Categorization',
        'Bespoke Workflow Scripting',
      ],
    },
  ];

  return (
    <section className="services text-center">
      <h2 data-aos="fade-up">Our Services</h2>
      <div className="grid grid-2">
        {services.map((service, index) => (
          <div className="service-card" data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={index}>
            {service.icon}
            <h3>{service.title}</h3>
            <ExpandableList items={service.items} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
