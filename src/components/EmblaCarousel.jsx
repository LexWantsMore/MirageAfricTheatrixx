import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
