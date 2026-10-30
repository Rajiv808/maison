
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { restaurantContact } from '../data/contact';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Gallery', href: '#gallery' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isMenuPage = location.pathname === '/menu';

  const getLink = (href) => {
    if (href.startsWith('#') && isMenuPage) {
      return `/${href}`;
    }

    return href;
  };

  const handleReservation = () => {
    const message = encodeURIComponent(
      'Hello Maison Noir! I would like to reserve a table. Please share the available slots.'
    );

    window.open(
      `${restaurantContact.whatsappLink}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );

    setOpen(false);
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.08] bg-[#11100e]/85 shadow-[0_8px_40px_rgba(0,0,0,0.15)] backdrop-blur-2xl">
      <nav className="container-custom flex h-[82px] items-center justify-between">

        <Link
          to="/"
          onClick={closeMenu}
          className="group flex flex-col leading-none"
        >
          <span className="font-display text-[28px] tracking-[0.16em] text-[#f5f0e8] transition-colors duration-300 group-hover:text-[#c9a66b] sm:text-[32px]">
            MAISON
          </span>

          <span className="mt-1 font-display text-[19px] italic tracking-[0.38em] text-[#c9a66b]">
            NOIR.
          </span>
        </Link>

        <div className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={getLink(link.href)}
              className="group relative py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 transition-colors duration-300 hover:text-[#c9a66b]"
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#c9a66b] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}

          <Link
            to="/menu"
            className={`group relative flex min-h-12 items-center gap-3 border px-6 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
              isMenuPage
                ? 'border-[#c9a66b] bg-[#c9a66b] text-[#11100e]'
                : 'border-[#c9a66b]/50 text-[#c9a66b] hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#11100e]'
            }`}
          >
            <Sparkles size={15} />
            Explore Menu
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <button
            onClick={handleReservation}
            className="group relative flex min-h-12 items-center gap-4 overflow-hidden bg-[#c9a66b] px-7 text-[10px] font-bold uppercase tracking-[0.18em] text-[#11100e] transition-all duration-500 hover:bg-[#f5f0e8]"
          >
            <span className="relative z-10">
              Reserve a Table
            </span>

            <ArrowUpRight
              size={17}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center border border-[#c9a66b]/40 text-[#c9a66b] transition-all duration-300 hover:bg-[#c9a66b] hover:text-[#11100e] xl:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-b border-[#c9a66b]/20 bg-[#11100e] shadow-2xl transition-all duration-500 xl:hidden ${
          open
            ? 'max-h-[550px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom flex flex-col gap-2 py-7">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={getLink(link.href)}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-white/[0.07] py-4 text-sm uppercase tracking-[0.18em] text-white/75 transition-all duration-300 hover:pl-3 hover:text-[#c9a66b]"
            >
              <span>{link.name}</span>
              <ArrowUpRight size={16} className="text-[#c9a66b]" />
            </a>
          ))}

          <Link
            to="/menu"
            onClick={closeMenu}
            className="mt-4 flex min-h-14 items-center justify-center gap-3 border border-[#c9a66b]/60 px-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a66b] transition-all duration-300 hover:bg-[#c9a66b] hover:text-[#11100e]"
          >
            <Sparkles size={17} />
            Explore Our Menu
            <ArrowUpRight size={17} />
          </Link>

          <button
            onClick={handleReservation}
            className="mt-3 flex min-h-14 items-center justify-center gap-4 bg-[#c9a66b] px-6 text-xs font-bold uppercase tracking-[0.2em] text-[#11100e] transition-all duration-300 hover:bg-[#f5f0e8]"
          >
            Reserve Your Table
            <ArrowUpRight size={18} />
          </button>

          <p className="mt-5 text-center text-[9px] uppercase tracking-[0.3em] text-white/30">
            An Extraordinary Dining Experience
          </p>
        </div>
      </div>
    </header>
  );
}
