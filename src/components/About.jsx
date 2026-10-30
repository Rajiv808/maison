
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-image', {
        y: 100,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.about-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding overflow-hidden bg-[#11100e]"
    >
      <div className="container-custom grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

        <div className="about-image relative mx-auto w-full max-w-[520px]">
          <div className="absolute -left-5 -top-5 h-full w-full border border-[#c9a66b]/40" />

          <img
            src="/images/4.png"
            alt="Maison Noir luxury restaurant ambience"
            className="relative z-10 h-[430px] w-full object-cover sm:h-[550px]"
          />

          <div className="absolute -bottom-8 -right-5 z-20 bg-[#c9a66b] px-8 py-6 text-[#11100e]">
            <p className="font-display text-4xl italic">Maison Noir</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.25em]">
              Beyond Dining
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#c9a66b]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a66b]">
              Our Story
            </span>
          </div>

          <h2 className="font-display text-5xl leading-[1.05] text-[#f5f0e8] sm:text-6xl lg:text-7xl">
            More Than
            <br />
            <span className="italic text-[#c9a66b]">
              Just a Meal.
            </span>
            <br />
            It's an Art.
          </h2>

          <p className="mt-8 text-sm leading-8 text-white/60">
            At Maison Noir, dining is more than simply enjoying
            exceptional food. It is about discovering beautiful
            flavours, thoughtful presentation and an atmosphere
            designed to make every moment memorable.
          </p>

          <p className="mt-5 text-sm leading-8 text-white/60">
            From carefully selected ingredients to the final
            details on every plate, we believe that true luxury
            lies in the experience.
          </p>

          <a
            href="#experience"
            className="group mt-10 inline-flex items-center gap-4 border-b border-[#c9a66b] pb-3 text-[10px] uppercase tracking-[0.25em] text-[#c9a66b]"
          >
            Discover Our Experience
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="font-display text-4xl text-[#c9a66b]">
                Crafted
              </p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/50">
                With Passion
              </p>
            </div>

            <div>
              <p className="font-display text-4xl text-[#c9a66b]">
                Inspired
              </p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/50">
                By Flavours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
