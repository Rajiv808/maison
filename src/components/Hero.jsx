
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);

  const handleReservation = () => {
    window.dispatchEvent(new Event('open-reservation'));
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      timeline
        .fromTo(
          '.hero-eyebrow',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(
          '.hero-title',
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.4'
        )
        .fromTo(
          '.hero-description',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          '.hero-actions',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          '.hero-bottom',
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.2'
        );

      gsap.fromTo(
        '.hero-background',
        { scale: 1.12 },
        {
          scale: 1,
          duration: 2.5,
          ease: 'power2.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#11100e]"
    >
      <div
        className="hero-background pointer-events-none absolute inset-0 scale-100 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/1.png')",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-black/45" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#090807]/95 via-[#090807]/65 to-[#090807]/15" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#11100e] via-transparent to-black/40" />

      <div className="container-custom relative z-20 pb-24 pt-36">
        <div className="max-w-5xl">
          <div className="hero-eyebrow mb-8 flex items-center gap-4 opacity-0">
            <span className="h-px w-12 bg-[#c9a66b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c9a66b] sm:text-xs">
              Welcome to Maison Noir
            </span>

            <Sparkles size={15} className="text-[#c9a66b]" />
          </div>

          <h1 className="hero-title max-w-5xl font-display text-6xl font-medium leading-[0.95] tracking-tight text-[#f5f0e8] opacity-0 sm:text-7xl md:text-8xl lg:text-[110px]">
            Where Taste
            <br />
            Becomes <span className="italic text-[#c9a66b]">An Art.</span>
          </h1>

          <p className="hero-description mt-8 max-w-xl text-sm leading-8 text-white/65 opacity-0 sm:text-base">
            Discover an extraordinary dining experience where exquisite
            flavours, refined elegance and unforgettable moments come
            together.
          </p>

          <div className="hero-actions mt-11 flex flex-col gap-4 opacity-0 sm:flex-row sm:items-center">
            <Link
              to="/menu"
              className="group relative z-30 flex min-h-[60px] w-full items-center justify-center gap-5 bg-[#c9a66b] px-8 text-[11px] font-bold uppercase tracking-[0.18em] text-[#11100e] transition-all duration-300 hover:bg-[#f5f0e8] sm:w-auto sm:min-w-[245px]"
            >
              Explore Our Menu

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <button
              type="button"
              onClick={handleReservation}
              className="group relative z-30 flex min-h-[60px] w-full items-center justify-center gap-5 border border-[#c9a66b]/70 bg-black/20 px-8 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f5f0e8] transition-all duration-300 hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#11100e] sm:w-auto sm:min-w-[245px]"
            >
              Reserve Your Table

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="hero-bottom pointer-events-none absolute bottom-10 left-0 z-20 hidden w-full opacity-0 md:block">
        <div className="container-custom flex items-end justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
              An extraordinary dining experience
            </p>

            <p className="mt-2 font-display text-xl italic text-[#c9a66b]">
              Crafted with passion. Served with elegance.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToAbout}
            className="pointer-events-auto group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-[#c9a66b]"
          >
            Discover More

            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#c9a66b] group-hover:bg-[#c9a66b] group-hover:text-[#11100e]">
              <ArrowDown size={17} />
            </span>
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 lg:block">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-[#c9a66b]/50" />

          <span className="text-[9px] uppercase tracking-[0.4em] text-white/35">
            Fine Dining · Kolkata
          </span>
        </div>
      </div>
    </section>
  );
}
