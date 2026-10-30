
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SignatureDish() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.dish-image', {
        scale: 0.85,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.dish-content > *', {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.dish-content',
          start: 'top 75%',
        },
      });

      gsap.to('.dish-decoration', {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-padding relative overflow-hidden bg-[#191714]"
    >
      <div className="container-custom">
        <div className="mb-20 text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-[#c9a66b]">
            The Art of Flavour
          </p>

          <h2 className="font-display text-5xl text-[#f5f0e8] sm:text-7xl">
            Our Signature <span className="italic text-[#c9a66b]">Creation</span>
          </h2>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="dish-image relative mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-4 border border-[#c9a66b]/30" />

            <img
              src="/images/2.png"
              alt="Maison Noir signature Chicken Handi"
              className="relative z-10 h-[430px] w-full object-cover sm:h-[600px]"
            />

            <div className="dish-decoration absolute -right-8 -top-8 z-20 flex h-28 w-28 items-center justify-center rounded-full border border-[#c9a66b]/60 bg-[#191714] text-center sm:h-36 sm:w-36">
              <div>
                <p className="font-display text-3xl italic text-[#c9a66b]">
                  Chef's
                </p>
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/70">
                  Special
                </p>
              </div>
            </div>
          </div>

          <div className="dish-content">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#c9a66b]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a66b]">
                A Culinary Masterpiece
              </span>
            </div>

            <h3 className="font-display text-6xl leading-[1.05] text-[#f5f0e8] sm:text-7xl">
              Royal
              <br />
              <span className="italic text-[#c9a66b]">
                Chicken Handi
              </span>
            </h3>

            <p className="mt-8 max-w-lg text-sm leading-8 text-white/60">
              Experience the rich and comforting flavours of
              Chicken Handi, prepared with tender chicken,
              aromatic spices and a luxurious creamy gravy.
              A celebration of traditional culinary artistry.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 border-y border-white/10 py-8">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#c9a66b]">
                  Flavour
                </p>
                <p className="mt-3 font-display text-2xl text-white">
                  Rich & Aromatic
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#c9a66b]">
                  Preparation
                </p>
                <p className="mt-3 font-display text-2xl text-white">
                  Traditional Handi
                </p>
              </div>
            </div>

            <a
              href="/menu"
              className="group mt-10 inline-flex items-center gap-4 bg-[#c9a66b] px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-[#11100e] transition-all duration-300 hover:bg-[#f5f0e8]"
            >
              Explore Our Menu
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
