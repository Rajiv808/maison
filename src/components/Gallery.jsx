
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    image: '/images/1.png',
    title: 'The Atmosphere',
    category: 'Our Restaurant',
    size: 'large',
  },
  {
    image: '/images/2.png',
    title: 'Culinary Art',
    category: 'Signature Cuisine',
    size: 'small',
  },
  {
    image: '/images/3.png',
    title: 'The Craft',
    category: 'Our Kitchen',
    size: 'small',
  },
  {
    image: '/images/4.png',
    title: 'Elegant Moments',
    category: 'Fine Dining',
    size: 'large',
  },
];

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-heading > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery-heading',
          start: 'top 80%',
        },
      });

      gsap.from('.gallery-card', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gallery-grid',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="section-padding overflow-hidden bg-[#191714]"
    >
      <div className="container-custom">
        <div className="gallery-heading mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#c9a66b]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a66b]">
                Visual Stories
              </span>
            </div>

            <h2 className="font-display text-5xl text-[#f5f0e8] sm:text-7xl">
              Moments of <span className="italic text-[#c9a66b]">Maison.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-8 text-white/50">
            Discover the atmosphere, craftsmanship and culinary
            artistry that make every visit memorable.
          </p>
        </div>

        <div className="gallery-grid grid grid-cols-1 gap-5 md:grid-cols-2">
          {galleryImages.map((item, index) => (
            <div
              key={item.title}
              className={`gallery-card group relative overflow-hidden ${
                item.size === 'large'
                  ? 'h-[350px] sm:h-[480px]'
                  : 'h-[350px] sm:h-[400px]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-7 sm:p-9">
                <div>
                  <p className="mb-3 text-[9px] uppercase tracking-[0.3em] text-[#c9a66b]">
                    {item.category}
                  </p>

                  <h3 className="font-display text-3xl text-white sm:text-4xl">
                    {item.title}
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-500 group-hover:border-[#c9a66b] group-hover:bg-[#c9a66b] group-hover:text-black">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              <div className="absolute left-6 top-6 text-xs tracking-[0.2em] text-white/70">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
