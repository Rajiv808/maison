
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  MoveRight,
} from 'lucide-react';
import { restaurantContact } from '../data/contact';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        delay: 0.3,
        defaults: {
          ease: 'power4.out',
        },
      });

      timeline
        .fromTo(
          '.hero-eyebrow',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
          '.hero-heading-line',
          { opacity: 0, y: 100, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.15,
          },
          '-=0.6'
        )
        .fromTo(
          '.hero-description',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          '.hero-actions',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.5'
        )
        .fromTo(
          '.hero-bottom',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.3'
        );

      gsap.to('.hero-background', {
        scale: 1.12,
        duration: 20,
        ease: 'none',
      });

      gsap.fromTo(
        '.hero-gold-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          delay: 1,
          transformOrigin: 'left',
          ease: 'power3.inOut',
        }
      );

      gsap.to('.hero-orbit', {
        rotate: 360,
        duration: 35,
        repeat: -1,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleReservation = () => {
    const message = encodeURIComponent(
      'Hello Maison Noir! I would like to reserve a table. Please share the available slots.'
    );

    window.open(
      `${restaurantContact.whatsappLink}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex h-screen min-h-[850px] items-center overflow-hidden bg-[#11100e]"
    >
      <div
        className="hero-background absolute inset-0 scale-100 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/1.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#090807]/95 via-[#090807]/65 to-[#090807]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#11100e] via-transparent to-black/40" />

      <div className="absolute right-[-140px] top-[15%] hidden h-[450px] w-[450px] rounded-full border border-[#c9a66b]/10 lg:block">
        <div className="hero-orbit absolute left-0 top-1/2 h-3 w-3 rounded-full bg-[#c9a66b] shadow-[0_0_25px_#c9a66b]" />
      </div>

      <div className="container-custom relative z-10 pb-24 pt-36">
        <div className="max-w-6xl">
          <div className="hero-eyebrow mb-9 flex items-center gap-4">
            <Sparkles size={17} className="text-[#c9a66b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#d8b77e] sm:text-xs">
              Welcome to Maison Noir
            </span>

            <span className="h-px w-12 bg-[#c9a66b]/70" />
          </div>

          <h1 className="font-display text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.82] tracking-[-0.045em] text-[#f5f0e8]">
            <span className="hero-heading-line block">
              Where Taste
            </span>

            <span className="hero-heading-line mt-3 block italic text-[#c9a66b]">
              Becomes
            </span>

            <span className="hero-heading-line mt-3 block">
              An Art<span className="text-[#c9a66b]">.</span>
            </span>
          </h1>

          <div className="hero-gold-line mt-10 h-px w-40 bg-gradient-to-r from-[#c9a66b] to-transparent" />

          <p className="hero-description mt-8 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
            An extraordinary celebration of culinary artistry,
            exceptional flavours and timeless elegance.
            Experience dining beyond the ordinary.
          </p>

          <div className="hero-actions mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="/menu"
              className="group flex min-h-[72px] w-full items-center justify-center gap-8 border-2 border-[#c9a66b] bg-[#c9a66b] px-9 text-sm font-extrabold uppercase tracking-[0.16em] text-[#11100e] shadow-[0_12px_45px_rgba(201,166,107,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f5f0e8] hover:bg-[#f5f0e8] hover:shadow-[0_18px_55px_rgba(201,166,107,0.35)] sm:w-auto sm:min-w-[265px] sm:px-10"
            >
              Explore Our Menu

              <ArrowUpRight
                size={23}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <button
              type="button"
              onClick={handleReservation}
              className="group flex min-h-[72px] w-full items-center justify-center gap-8 border-2 border-[#f5f0e8]/80 bg-[#11100e]/75 px-9 text-sm font-extrabold uppercase tracking-[0.16em] text-[#f5f0e8] shadow-[0_12px_35px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#11100e] sm:w-auto sm:min-w-[265px] sm:px-10"
            >
              Reserve Your Table

              <MoveRight
                size={23}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="hero-bottom absolute bottom-10 left-0 z-10 w-full">
        <div className="container-custom flex items-end justify-between">
          <a
            href="#about"
            className="group flex items-center gap-4 text-white/65 transition-colors duration-300 hover:text-[#c9a66b]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-[#c9a66b]">
              <ArrowDown
                size={19}
                className="text-[#c9a66b] transition-transform duration-300 group-hover:translate-y-1"
              />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
              Discover Our Story
            </span>
          </a>

          <div className="hidden text-right sm:block">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/50">
              Located in
            </p>

            <p className="mt-2 font-display text-2xl italic text-[#c9a66b]">
              Kolkata, India
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c9a66b]/40 to-transparent" />
    </section>
  );
}
