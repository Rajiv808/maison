
import {
  ArrowUpRight,
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { restaurantContact } from '../data/contact';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Menu', href: '/menu' },
  { label: 'Reservations', href: '#reservation' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="relative overflow-hidden bg-[#0b0a09]">

      <div className="container-custom border-b border-white/10 py-24">
        <div className="relative mb-24 overflow-hidden border border-[#c9a66b]/30 bg-[#15130f] px-7 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,166,107,0.12),transparent_65%)]" />

          <div className="relative z-10">
            <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#c9a66b]">
              An Evening Worth Remembering
            </p>

            <h2 className="font-display text-5xl leading-tight text-[#f5f0e8] sm:text-7xl">
              Your Table
              <br />
              <span className="italic text-[#c9a66b]">
                Awaits You.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-8 text-white/50">
              Make your next dining experience extraordinary.
              Join us for exceptional cuisine and unforgettable moments.
            </p>

            <button
              onClick={handleReservation}
              className="mt-10 inline-flex min-h-14 items-center justify-center gap-5 bg-[#c9a66b] px-9 py-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#11100e] transition-all duration-500 hover:bg-[#f5f0e8] sm:px-12"
            >
              Reserve Your Experience
              <ArrowUpRight size={19} />
            </button>
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-block font-display text-5xl tracking-[0.12em] text-[#f5f0e8] sm:text-6xl"
            >
              MAISON
              <br />
              <span className="italic text-[#c9a66b]">
                NOIR.
              </span>
            </a>

            <p className="mt-8 max-w-sm text-sm leading-8 text-white/50">
              Where culinary artistry meets timeless elegance.
              Discover exceptional flavours, thoughtful craftsmanship
              and the beauty of unforgettable dining.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={restaurantContact.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-3 border border-[#c9a66b]/50 px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-[#c9a66b] transition-all duration-300 hover:bg-[#c9a66b] hover:text-[#11100e]"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

              <a
                href={restaurantContact.mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-3 border border-white/15 px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-[#c9a66b] hover:text-[#c9a66b]"
              >
                <MapPin size={17} />
                Find Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-9 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
              Explore
            </h3>

            <div className="flex flex-col gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-3 text-sm text-white/55 transition-colors duration-300 hover:text-[#c9a66b]"
                >
                  <span className="h-px w-0 bg-[#c9a66b] transition-all duration-300 group-hover:w-5" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-9 text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
              Contact
            </h3>

            <div className="space-y-7">
              <a
                href={restaurantContact.mapLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4"
              >
                <MapPin size={20} className="mt-1 shrink-0 text-[#c9a66b]" />
                <span className="text-sm leading-7 text-white/55 transition-colors group-hover:text-[#c9a66b]">
                  {restaurantContact.address}
                </span>
              </a>

              <a
                href={`tel:${restaurantContact.phone.replaceAll(' ', '')}`}
                className="group flex items-center gap-4"
              >
                <Phone size={19} className="shrink-0 text-[#c9a66b]" />
                <span className="text-sm text-white/55 transition-colors group-hover:text-[#c9a66b]">
                  {restaurantContact.phone}
                </span>
              </a>

              <a
                href={`mailto:${restaurantContact.email}`}
                className="group flex items-start gap-4"
              >
                <Mail size={19} className="mt-0.5 shrink-0 text-[#c9a66b]" />
                <span className="break-all text-sm text-white/55 transition-colors group-hover:text-[#c9a66b]">
                  {restaurantContact.email}
                </span>
              </a>

              
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <p className="text-center text-[10px] tracking-[0.12em] text-white/35">
          © {currentYear} MAISON NOIR. ALL RIGHTS RESERVED.
        </p>

        <p className="font-display text-xl italic text-[#c9a66b]">
          A Taste Beyond Ordinary.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex min-h-11 items-center gap-4 border border-white/15 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-white/65 transition-all duration-300 hover:border-[#c9a66b] hover:text-[#c9a66b]"
        >
          Back to Top
          <ArrowUp size={16} className="transition-transform group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
