const ContactPage = () => {
  return (
    <section className="contact-form text-center">
      <h2 data-aos="fade-up">Let's Connect</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        We're excited to hear about your business, project, or curiosity.
        Drop us a message, and we’ll get back to you within 24 hours.
      </p>

      <form style={{ marginTop: '2rem' }}>
        <input type="text" placeholder="Your Name" required data-aos="fade-up" data-aos-delay="200" />
        <input type="email" placeholder="Your Email" required data-aos="fade-up" data-aos-delay="250" />
        <select data-aos="fade-up" data-aos-delay="300">
          <option value="">Interested In...</option>
          <option value="accounting">Accounting Services</option>
          <option value="finance">Financial Analysis</option>
          <option value="it">IT Development</option>
        </select>
        <textarea placeholder="Tell us more..." rows="5" required data-aos="fade-up" data-aos-delay="350" />
        <button type="submit" className="primary" data-aos="fade-up" data-aos-delay="400">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;