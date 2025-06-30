const MetricsPage = () => {
  return (
    <section className="metrics text-center">
      <h2 data-aos="fade-up">Our Impact by the Numbers</h2>

      <div className="grid grid-3">
        <div data-aos="flip-up" data-aos-delay="100">
          <strong style={{ color: '#ff6a00' }}>120+</strong>
          <p>Small businesses digitized since 2025</p>
        </div>
        <div data-aos="flip-up" data-aos-delay="200">
          <strong style={{ color: '#ff6a00' }}>350K+</strong>
          <p>Financial records processed securely</p>
        </div>
        <div data-aos="flip-up" data-aos-delay="300">
          <strong style={{ color: '#ff6a00' }}>99.99%</strong>
          <p>Cloud uptime for hosted financial tools</p>
        </div>
      </div>

      <p style={{ marginTop: '2rem' }} data-aos="fade-up">
        We believe the best way to measure value is by the confidence we help create.
        Whether you're a startup, NGO, or independent consultant—we build systems you can trust.
      </p>
    </section>
  );
};

export default MetricsPage;