import { useEffect, useState } from 'react';

const defaultAvatar = '/src/assets/avatar-default.svg';

const checkImageExists = (url) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });

const testimonialsData = [
  {
    quote:
      'Chakra helped us scale our tech securely while navigating complex finance laws.',
    client: '– Aarya Solutions, Singapore',
    image: '/fake/path/client1.jpg',
  },
  {
    quote: 'Truly a one-stop shop for digital and financial clarity.',
    client: '– Rahul G., CFO',
    image: '/src/assets/client2.jpg',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [imageSources, setImageSources] = useState([]);

  useEffect(() => {
    const preloadImages = async () => {
      const validated = await Promise.all(
        testimonialsData.map(async (testimonial) => {
          const valid = await checkImageExists(testimonial.image);
          return valid ? testimonial.image : defaultAvatar;
        })
      );
      setImageSources(validated);
    };

    preloadImages();
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="text-center" data-aos="fade-up">
        What Our Clients Say
      </h2>

      {testimonialsData.map((t, index) => {
        const isEven = index % 2 !== 0;
        const layoutClass = isEven ? 'img-right' : 'img-left';

        return (
          <div
            key={index}
            className="testimonial-block"
            data-aos="fade-up"
            data-aos-delay={100 + index * 100}
          >
            <div className={`testimonial-content ${layoutClass}`}>
              {!isEven && imageSources[index] && (
                <img src={imageSources[index]} alt={`Client ${index + 1}`} />
              )}

              <blockquote>
                <p>“{t.quote}”</p>
                <footer>{t.client}</footer>
              </blockquote>

              {isEven && imageSources[index] && (
                <img src={imageSources[index]} alt={`Client ${index + 1}`} />
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Testimonials;
