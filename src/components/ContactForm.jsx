const ContactForm = () => {
  return (
    <section className="contact-form text-center" id="contact" data-aos="fade-up">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <select>
          <option value="">Select a Service</option>
          <option value="finance">Financial Consulting</option>
          <option value="it">IT Infrastructure</option>
          <option value="security">Cybersecurity</option>
        </select>
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit" className="primary">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;