
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  X,
  CalendarDays,
  Clock,
  Users,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import { restaurantContact } from '../data/contact';

export default function Reservation() {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });

  useEffect(() => {
    const handleOpenReservation = () => {
      setIsOpen(true);
    };

    window.addEventListener('open-reservation', handleOpenReservation);

    return () => {
      window.removeEventListener('open-reservation', handleOpenReservation);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const today = new Date();

  const minimumDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  ).toISOString().split('T')[0];

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      'Hello Maison Noir!',
      '',
      'I would like to request a table reservation.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Guests: ${form.guests}`,
      '',
      'Please confirm my reservation. Thank you!',
    ].join('\n');

    const whatsappUrl = `${restaurantContact.whatsappLink}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsOpen(false);
  };

  const closeReservation = () => {
    setIsOpen(false);
  };

  const inputClass =
    'h-[58px] w-full border border-white/15 bg-[#191714] px-5 text-base text-white outline-none transition-all duration-300 placeholder:text-white/30 hover:border-white/30 focus:border-[#c9a66b] [color-scheme:dark]';

  const labelClass =
    'mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-white/65';

  return (
    <>
      <section
        id="reservation"
        className="relative overflow-hidden bg-[#15130f] px-5 py-28 text-center sm:py-36"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,166,107,0.12),transparent_65%)]" />

        <div className="container-custom relative z-10">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.45em] text-[#c9a66b]">
            An Evening Worth Remembering
          </p>

          <h2 className="font-display text-6xl leading-tight text-[#f5f0e8] sm:text-8xl">
            Your Table
            <br />
            <span className="italic text-[#c9a66b]">
              Awaits You.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-base leading-8 text-white/55">
            Make your evening special. Reserve your table
            and experience the art of fine dining.
          </p>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group mt-12 inline-flex min-h-[76px] items-center justify-center gap-7 bg-[#c9a66b] px-14 text-sm font-extrabold uppercase tracking-[0.2em] text-[#11100e] shadow-[0_12px_40px_rgba(201,166,107,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#f5f0e8] hover:shadow-[0_18px_50px_rgba(201,166,107,0.25)] sm:px-20"
          >
            Book a Table

            <ArrowUpRight
              size={23}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeReservation();
              }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/85 px-4 py-6 backdrop-blur-md sm:px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="reservation-title"
              className="relative my-auto w-full max-w-[620px] border border-[#c9a66b]/35 bg-[#11100e] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:p-12 lg:p-14"
            >
              <button
                type="button"
                onClick={closeReservation}
                aria-label="Close reservation form"
                className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-all hover:border-[#c9a66b] hover:bg-[#c9a66b] hover:text-[#11100e]"
              >
                <X size={22} />
              </button>

              <div className="mb-10 border-b border-white/10 pb-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#c9a66b]">
                  Maison Noir
                </p>

                <h3
                  id="reservation-title"
                  className="font-display text-5xl leading-tight text-[#f5f0e8] sm:text-6xl"
                >
                  Reserve Your
                  <span className="block italic text-[#c9a66b]">
                    Table.
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  Complete the details below to request your reservation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label htmlFor="reservation-name" className={labelClass}>
                    Full Name
                  </label>

                  <input
                    id="reservation-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="reservation-phone" className={labelClass}>
                    Phone Number
                  </label>

                  <input
                    id="reservation-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    pattern="[+]?[0-9 ()-]{8,18}"
                    className={inputClass}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="reservation-date" className={labelClass}>
                      <span className="flex items-center gap-2">
                        <CalendarDays size={16} className="text-[#c9a66b]" />
                        Reservation Date
                      </span>
                    </label>

                    <input
                      id="reservation-date"
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={minimumDate}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="reservation-time" className={labelClass}>
                      <span className="flex items-center gap-2">
                        <Clock size={16} className="text-[#c9a66b]" />
                        Preferred Time
                      </span>
                    </label>

                    <input
                      id="reservation-time"
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reservation-guests" className={labelClass}>
                    <span className="flex items-center gap-2">
                      <Users size={16} className="text-[#c9a66b]" />
                      Number of Guests
                    </span>
                  </label>

                  <select
                    id="reservation-guests"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                      <option key={number} value={number}>
                        {number} {number === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="group flex min-h-[68px] w-full items-center justify-center gap-4 bg-[#c9a66b] px-6 text-sm font-extrabold uppercase tracking-[0.16em] text-[#11100e] transition-all duration-300 hover:bg-[#f5f0e8]"
                >
                  <MessageCircle size={21} />
                  Send Reservation Request

                  <ArrowUpRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <p className="text-center text-xs leading-6 text-white/35">
                  Your request opens in WhatsApp. Your table is confirmed
                  only after our team responds.
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
