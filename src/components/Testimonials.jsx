
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Food Enthusiast',
    review:
      'An extraordinary dining experience. The flavours were incredible, the presentation was beautiful and the ambience was simply unforgettable.',
  },
  {
    name: 'Priya Mehta',
    role: 'Regular Guest',
    review:
      'Every detail felt special. From the welcoming atmosphere to the delicious food, this is definitely a place worth visiting again.',
  },
  {
    name: 'Rohan Kapoor',
    role: 'Dining Guest',
    review:
      'The perfect combination of elegant ambience, exceptional hospitality and wonderful cuisine. A truly memorable evening.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function Testimonials() {
  return (
    <section className="section-padding overflow-hidden bg-[#11100e]">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#c9a66b]">
            Words That Matter
          </p>

          <h2 className="font-display text-5xl text-[#f5f0e8] sm:text-7xl">
            Guest <span className="italic text-[#c9a66b]">Experiences.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-8 text-white/50">
            Every visit creates a story. Here is what our guests
            have to say about their experience.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group border border-white/10 bg-[#191714] p-8 transition-colors duration-500 hover:border-[#c9a66b]/50 sm:p-10"
            >
              <Quote
                size={34}
                strokeWidth={1}
                className="mb-8 text-[#c9a66b]"
              />

              <div className="mb-7 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    fill="#c9a66b"
                    stroke="#c9a66b"
                  />
                ))}
              </div>

              <p className="min-h-[145px] font-display text-2xl leading-relaxed text-[#f5f0e8]">
                "{item.review}"
              </p>

              <div className="mt-10 border-t border-white/10 pt-6">
                <h3 className="text-sm font-medium tracking-wide text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#c9a66b]">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
