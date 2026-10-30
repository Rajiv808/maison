
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Sparkles,
  Award,
  ChefHat,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Chef() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.chef-visual', {
        x: -80,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });

      gsap.from('.chef-content > *', {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.chef-content',
          start: 'top 80%',
        },
      });

      gsap.to('.chef-photo', {
        yPercent: -7,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.chef-number', {
        y: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="chef"
      className="section-padding relative overflow-hidden bg-[#11100e]"
    >
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#c9a66b]/5 blur-[120px]" />

      <div className="container-custom relative z-10 grid items-center gap-20 lg:grid-cols-2 lg:gap-28">

        <div className="chef-visual relative mx-auto w-full max-w-[580px]">

          <div className="absolute -left-5 -top-5 z-0 h-full w-full border border-[#c9a66b]/35" />

          <div className="relative z-10 h-[480px] overflow-hidden sm:h-[650px]">
            <img
              src="/images/3.png"
              alt="Professional chef preparing gourmet cuisine at Maison Noir"
              loading="lazy"
              className="chef-photo h-[115%] w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#d8b77e]">
                Craftsmanship & Passion
              </p>

              <p className="mt-2 font-display text-3xl italic text-white">
                The Heart of Our Kitchen
              </p>
            </div>
          </div>

          <div className="absolute -bottom-9 -right-5 z-20 flex h-32 w-32 flex-col items-center justify-center border border-[#c9a66b]/50 bg-[#191714] text-center sm:h-40 sm:w-40">
            <ChefHat size={25} className="mb-2 text-[#c9a66b]" />

            <p className="font-display text-3xl italic text-[#f5f0e8]">
              Made
            </p>

            <p className="text-[8px] uppercase tracking-[0.25em] text-[#c9a66b]">
              With Passion
            </p>
          </div>

          <div className="chef-number pointer-events-none absolute -bottom-20 -left-5 z-0 font-display text-[130px] leading-none text-white/[0.035] sm:text-[190px]">
            01
          </div>
        </div>

        <div className="chef-content relative">

          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#c9a66b]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#c9a66b]">
              The Culinary Philosophy
            </span>
          </div>

          <h2 className="font-display text-6xl font-medium leading-[0.95] tracking-tight text-[#f5f0e8] sm:text-7xl lg:text-[82px]">
            The Art of
            <br />
            <span className="italic text-[#c9a66b]">
              Creating
            </span>
            <br />
            Memories.
          </h2>

          <div className="mt-9 h-px w-24 bg-[#c9a66b]" />

          <p className="mt-9 text-sm leading-8 text-white/60 sm:text-base">
            Exceptional dining begins long before a dish reaches
            the table. It begins with imagination, dedication
            and an uncompromising passion for flavour.
          </p>

          <p className="mt-5 text-sm leading-8 text-white/60 sm:text-base">
            At Maison Noir, every creation reflects a thoughtful
            balance of ingredients, technique and presentation.
            Our philosophy is simple: transform every meal into
            an experience worth remembering.
          </p>

          <div className="mt-11 grid grid-cols-2 gap-7 border-y border-white/10 py-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Sparkles size={19} className="text-[#c9a66b]" />

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                  Our Approach
                </span>
              </div>

              <p className="font-display text-2xl text-[#f5f0e8] sm:text-3xl">
                Artistic
                <br />
                Presentation
              </p>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <Award size={19} className="text-[#c9a66b]" />

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                  Our Promise
                </span>
              </div>

              <p className="font-display text-2xl text-[#f5f0e8] sm:text-3xl">
                Thoughtful
                <br />
                Hospitality
              </p>
            </div>
          </div>

          <div className="mt-10 border-l-2 border-[#c9a66b] pl-7">
            <p className="font-display text-3xl italic leading-snug text-[#c9a66b] sm:text-4xl">
              "Every plate tells a story."
            </p>

            <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-white/40">
              The Maison Noir Philosophy
            </p>
          </div>

          <a
            href="/menu"
            className="group mt-12 inline-flex min-h-14 items-center gap-6 bg-[#c9a66b] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#11100e] transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5f0e8]"
          >
            Discover Our Cuisine

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>
      </div>
    </section>
  );
}
