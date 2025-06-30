const AboutPage = () => {
  return (
    <section className="about text-center" data-aos="fade-up">
      <h2>Our Story</h2>
      <p>
        Founded in 2025, Chakra Financial and IT Solutions is a Nepal-based startup with one mission:
        to blend deep financial insight with cutting-edge digital solutions. We believe that every business—
        big or small—deserves access to reliable, intelligent tools that fuel smarter decision-making.
      </p>

      <h3 style={{ marginTop: '3rem' }}>Timeline of Our Journey</h3>
      <ul className="timeline">
        <li><strong>2025</strong> – Chakra was founded with a dual-focus mission: finance & tech for impact.</li>
        <li><strong>2026</strong> – Launched full-suite accounting and reporting platform.</li>
        <li><strong>2027</strong> – Introduced automated ratio + data visualization dashboard for SMEs.</li>
        <li><strong>2028</strong> – Expanded IT services including cross-platform app development.</li>
      </ul>
    </section>
  );
};

export default AboutPage;
