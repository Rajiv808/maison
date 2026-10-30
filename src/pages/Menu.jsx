
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Leaf,
  Flame,
  ArrowLeft,
  UtensilsCrossed,
  Fish,
  Drumstick,
  Sparkles,
  ChefHat,
  Wheat,
} from 'lucide-react';

const categories = [
  'All',
  'Bengali',
  'Chinese',
  'Continental',
  'Biryani',
  'Vegetarian',
];

const dishes = [
  {
    name: 'Kosha Mangsho',
    description: 'Traditional Bengali mutton slow-cooked with caramelised onions and aromatic spices.',
    category: 'Bengali',
    price: 449,
    type: 'mutton',
    special: true,
    serving: '4 Pieces',
  },
  {
    name: 'Chicken Kosha',
    description: 'Tender chicken pieces cooked in a rich Bengali-style onion and spice gravy.',
    category: 'Bengali',
    price: 369,
    type: 'chicken',
    special: true,
    serving: '4 Pieces',
  },
  {
    name: 'Shorshe Ilish',
    description: 'Traditional hilsa fish prepared in a rich mustard and green chilli gravy.',
    category: 'Bengali',
    price: 599,
    type: 'fish',
    special: true,
    serving: '2 Pieces',
  },
  {
    name: 'Doi Katla',
    description: 'Fresh katla fish simmered in a creamy yoghurt-based Bengali gravy.',
    category: 'Bengali',
    price: 399,
    type: 'fish',
    special: false,
    serving: '2 Pieces',
  },
  {
    name: 'Bhetki Paturi',
    description: 'Bhetki fish wrapped in banana leaf with mustard paste and traditional spices.',
    category: 'Bengali',
    price: 499,
    type: 'fish',
    special: true,
    serving: '2 Pieces',
  },
  {
    name: 'Chingri Malai Curry',
    description: 'Bengali-style prawns cooked in coconut milk and aromatic spices.',
    category: 'Bengali',
    price: 499,
    type: 'fish',
    special: true,
    serving: '6 Pieces',
  },
  {
    name: 'Rui Kalia',
    description: 'Rohu fish cooked in a rich tomato, onion and Bengali spice gravy.',
    category: 'Bengali',
    price: 329,
    type: 'fish',
    special: false,
    serving: '2 Pieces',
  },
  {
    name: 'Chicken Dak Bungalow',
    description: 'Classic Bengali chicken curry with potatoes, eggs and fragrant spices.',
    category: 'Bengali',
    price: 399,
    type: 'chicken',
    special: true,
    serving: '4 Pieces',
  },
  {
    name: 'Mutton Dak Bungalow',
    description: 'Slow-cooked mutton curry with potatoes, eggs and traditional Bengali flavours.',
    category: 'Bengali',
    price: 499,
    type: 'mutton',
    special: true,
    serving: '4 Pieces',
  },
  {
    name: 'Aloo Posto',
    description: 'Bengali potatoes cooked with poppy seed paste and green chillies.',
    category: 'Bengali',
    price: 199,
    type: 'veg',
    special: false,
    serving: '200 g',
  },
  {
    name: 'Shukto',
    description: 'Traditional Bengali mixed vegetable preparation with a delicate bitter-sweet flavour.',
    category: 'Bengali',
    price: 219,
    type: 'veg',
    special: false,
    serving: '200 g',
  },
  {
    name: 'Cholar Dal',
    description: 'Bengal gram lentils cooked with coconut, whole spices and aromatic seasoning.',
    category: 'Bengali',
    price: 189,
    type: 'veg',
    special: false,
    serving: '200 g',
  },
  {
    name: 'Chicken Hakka Noodles',
    description: 'Stir-fried noodles tossed with chicken, vegetables and Chinese sauces.',
    category: 'Chinese',
    price: 279,
    type: 'chicken',
    special: false,
    serving: '250 g',
  },
  {
    name: 'Chicken Fried Rice',
    description: 'Wok-fried rice with tender chicken, vegetables and aromatic seasoning.',
    category: 'Chinese',
    price: 269,
    type: 'chicken',
    special: false,
    serving: '250 g',
  },
  {
    name: 'Chilli Chicken',
    description: 'Crispy chicken tossed with green chillies, peppers and a spicy Chinese sauce.',
    category: 'Chinese',
    price: 329,
    type: 'chicken',
    special: true,
    serving: '6 Pieces',
  },
  {
    name: 'Chicken Manchurian',
    description: 'Juicy chicken pieces coated in a rich, tangy Manchurian sauce.',
    category: 'Chinese',
    price: 319,
    type: 'chicken',
    special: false,
    serving: '6 Pieces',
  },
  {
    name: 'Chicken Lollipop',
    description: 'Crispy chicken wings marinated with Indo-Chinese spices and fried golden.',
    category: 'Chinese',
    price: 349,
    type: 'chicken',
    special: true,
    serving: '6 Pieces',
  },
  {
    name: 'Schezwan Chicken',
    description: 'Chicken tossed in fiery Schezwan sauce with peppers and spring onions.',
    category: 'Chinese',
    price: 339,
    type: 'chicken',
    special: false,
    serving: '6 Pieces',
  },
  {
    name: 'Fish Chilli',
    description: 'Crispy fish pieces tossed with chillies, peppers and savoury Chinese sauce.',
    category: 'Chinese',
    price: 369,
    type: 'fish',
    special: true,
    serving: '6 Pieces',
  },
  {
    name: 'Fish Manchurian',
    description: 'Golden fish pieces coated in a flavourful Manchurian sauce.',
    category: 'Chinese',
    price: 359,
    type: 'fish',
    special: false,
    serving: '6 Pieces',
  },
  {
    name: 'Veg Hakka Noodles',
    description: 'Classic wok-tossed noodles with fresh vegetables and Chinese seasoning.',
    category: 'Chinese',
    price: 219,
    type: 'veg',
    special: false,
    serving: '250 g',
  },
  {
    name: 'Veg Fried Rice',
    description: 'Fragrant fried rice tossed with seasonal vegetables and spring onions.',
    category: 'Chinese',
    price: 209,
    type: 'veg',
    special: false,
    serving: '250 g',
  },
  {
    name: 'Paneer Chilli',
    description: 'Crispy paneer cubes tossed with peppers, onions and spicy Chinese sauce.',
    category: 'Chinese',
    price: 279,
    type: 'veg',
    special: false,
    serving: '200 g',
  },
  {
    name: 'Crispy Chilli Baby Corn',
    description: 'Golden baby corn tossed with garlic, chillies and a tangy sauce.',
    category: 'Chinese',
    price: 249,
    type: 'veg',
    special: false,
    serving: '200 g',
  },
  {
    name: 'Grilled Chicken Steak',
    description: 'Herb-marinated chicken breast grilled and served with sautéed vegetables.',
    category: 'Continental',
    price: 449,
    type: 'chicken',
    special: true,
    serving: '1 Portion',
  },
  {
    name: 'Chicken Stroganoff',
    description: 'Tender chicken in a creamy mushroom sauce served with fragrant rice.',
    category: 'Continental',
    price: 429,
    type: 'chicken',
    special: false,
    serving: '300 g',
  },
  {
    name: 'Chicken Lasagna',
    description: 'Layers of pasta, seasoned chicken, creamy sauce and melted cheese.',
    category: 'Continental',
    price: 399,
    type: 'chicken',
    special: true,
    serving: '300 g',
  },
  {
    name: 'Chicken Alfredo Pasta',
    description: 'Pasta tossed with grilled chicken in a rich and creamy Alfredo sauce.',
    category: 'Continental',
    price: 379,
    type: 'chicken',
    special: false,
    serving: '300 g',
  },
  {
    name: 'Chicken Sizzler',
    description: 'Grilled chicken served on a sizzling platter with rice and vegetables.',
    category: 'Continental',
    price: 499,
    type: 'chicken',
    special: true,
    serving: '1 Portion',
  },
  {
    name: 'Grilled Fish with Lemon Butter',
    description: 'Fresh fish fillet grilled and finished with a delicate lemon butter sauce.',
    category: 'Continental',
    price: 499,
    type: 'fish',
    special: true,
    serving: '1 Fillet',
  },
  {
    name: 'Fish and Chips',
    description: 'Golden battered fish fillet served with crispy potato fries.',
    category: 'Continental',
    price: 429,
    type: 'fish',
    special: false,
    serving: '1 Portion',
  },
  {
    name: 'Mutton Shepherd’s Pie',
    description: 'Seasoned minced mutton baked under a golden mashed potato topping.',
    category: 'Continental',
    price: 469,
    type: 'mutton',
    special: true,
    serving: '300 g',
  },
  {
    name: 'Grilled Vegetable Steak',
    description: 'A hearty grilled vegetable preparation served with creamy herb sauce.',
    category: 'Continental',
    price: 329,
    type: 'veg',
    special: false,
    serving: '1 Portion',
  },
  {
    name: 'Penne Arrabbiata',
    description: 'Penne pasta tossed in a spicy tomato, garlic and herb sauce.',
    category: 'Continental',
    price: 279,
    type: 'veg',
    special: false,
    serving: '300 g',
  },
  {
    name: 'Mushroom Alfredo Pasta',
    description: 'Creamy pasta with mushrooms, herbs and parmesan-style cheese.',
    category: 'Continental',
    price: 329,
    type: 'veg',
    special: false,
    serving: '300 g',
  },
  {
    name: 'Vegetable Au Gratin',
    description: 'Seasonal vegetables baked in a creamy sauce with a golden cheese crust.',
    category: 'Continental',
    price: 319,
    type: 'veg',
    special: false,
    serving: '300 g',
  },
  {
    name: 'Royal Chicken Biryani',
    description: 'Fragrant basmati rice layered with tender chicken, saffron and aromatic spices.',
    category: 'Biryani',
    price: 329,
    type: 'chicken',
    special: true,
    serving: '350 g',
  },
  {
    name: 'Kolkata Chicken Biryani',
    description: 'Authentic Kolkata-style biryani with aromatic rice, chicken and a golden potato.',
    category: 'Biryani',
    price: 349,
    type: 'chicken',
    special: true,
    serving: '350 g',
  },
  {
    name: 'Chicken Dum Biryani',
    description: 'Slow-cooked chicken and fragrant basmati rice sealed and prepared dum style.',
    category: 'Biryani',
    price: 369,
    type: 'chicken',
    special: false,
    serving: '350 g',
  },
  {
    name: 'Royal Mutton Biryani',
    description: 'Tender mutton layered with long-grain basmati rice and traditional spices.',
    category: 'Biryani',
    price: 449,
    type: 'mutton',
    special: true,
    serving: '350 g',
  },
  {
    name: 'Kolkata Mutton Biryani',
    description: 'Classic Kolkata biryani with succulent mutton, fragrant rice and potato.',
    category: 'Biryani',
    price: 469,
    type: 'mutton',
    special: true,
    serving: '350 g',
  },
  {
    name: 'Mutton Dum Biryani',
    description: 'Slow-cooked mutton and aromatic basmati rice prepared in traditional dum style.',
    category: 'Biryani',
    price: 489,
    type: 'mutton',
    special: false,
    serving: '350 g',
  },
  {
    name: 'Vegetable Biryani',
    description: 'Basmati rice cooked with seasonal vegetables, saffron and fragrant spices.',
    category: 'Biryani',
    price: 269,
    type: 'veg',
    special: false,
    serving: '350 g',
  },
  {
    name: 'Paneer Biryani',
    description: 'Aromatic basmati rice layered with spiced paneer and fresh herbs.',
    category: 'Biryani',
    price: 299,
    type: 'veg',
    special: false,
    serving: '350 g',
  },
  {
    name: 'Paneer Lababdar',
    description: 'Soft paneer cubes simmered in a rich tomato, cashew and cream gravy.',
    category: 'Vegetarian',
    price: 329,
    type: 'veg',
    special: true,
    serving: '250 g',
  },
  {
    name: 'Shahi Paneer',
    description: 'Paneer cooked in a luxurious cashew, cream and aromatic spice gravy.',
    category: 'Vegetarian',
    price: 349,
    type: 'veg',
    special: false,
    serving: '250 g',
  },
  {
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils finished with butter, cream and fragrant spices.',
    category: 'Vegetarian',
    price: 269,
    type: 'veg',
    special: true,
    serving: '250 g',
  },
  {
    name: 'Kadai Paneer',
    description: 'Paneer tossed with peppers, onions and freshly ground kadai masala.',
    category: 'Vegetarian',
    price: 319,
    type: 'veg',
    special: false,
    serving: '250 g',
  },
  {
    name: 'Malai Kofta',
    description: 'Soft vegetable and paneer dumplings served in a creamy cashew gravy.',
    category: 'Vegetarian',
    price: 329,
    type: 'veg',
    special: false,
    serving: '250 g',
  },
  {
    name: 'Veg Kofta Curry',
    description: 'Delicate vegetable dumplings simmered in a rich and flavourful gravy.',
    category: 'Vegetarian',
    price: 299,
    type: 'veg',
    special: false,
    serving: '250 g',
  },
  {
    name: 'Mushroom Masala',
    description: 'Fresh mushrooms cooked with tomatoes, onions and aromatic Indian spices.',
    category: 'Vegetarian',
    price: 279,
    type: 'veg',
    special: false,
    serving: '250 g',
  },
  {
    name: 'Mix Vegetable Curry',
    description: 'Seasonal vegetables prepared in a traditional spiced curry.',
    category: 'Vegetarian',
    price: 249,
    type: 'veg',
    special: false,
    serving: '250 g',
  },
  {
    name: 'Palak Paneer',
    description: 'Soft paneer cubes cooked in a smooth spinach and spice gravy.',
    category: 'Vegetarian',
    price: 299,
    type: 'veg',
    special: false,
    serving: '250 g',
  },
  {
    name: 'Chana Masala',
    description: 'Chickpeas cooked with tomatoes, onions and a blend of Indian spices.',
    category: 'Vegetarian',
    price: 229,
    type: 'veg',
    special: false,
    serving: '250 g',
  },
];

const dishImages = {
    'Kosha Mangsho': '/images/menu/kosha-mangsho.png',
    'Chicken Kosha': '/images/menu/chicken-kosha.png',
    'Shorshe Ilish': '/images/menu/shorshe-ilish.png',
    'Doi Katla': '/images/menu/doi-katla.png',
    'Bhetki Paturi': '/images/menu/bhetki-paturi.png',
    'Chingri Malai Curry': '/images/menu/chingri-malai-curry.png',
    'Rui Kalia': '/images/menu/rui-kalia.png',
    'Chicken Dak Bungalow': '/images/menu/chicken-dak-bungalow.png',
    'Mutton Dak Bungalow': '/images/menu/mutton-dak-bungalow.png',
  
    'Chicken Hakka Noodles': '/images/menu/chicken-hakka-noodles.png',
    'Chicken Fried Rice': '/images/menu/chicken-fried-rice.png',
    'Chilli Chicken': '/images/menu/chilli-chicken.png',
    'Chicken Manchurian': '/images/menu/chicken-manchurian.png',
    'Chicken Lollipop': '/images/menu/chicken-lollipop.png',
    'Schezwan Chicken': '/images/menu/schezwan-chicken.png',
  };
const typeDetails = {
  chicken: {
    label: 'Chicken',
    dot: 'bg-red-500',
    icon: Drumstick,
  },
  mutton: {
    label: 'Mutton',
    dot: 'bg-orange-500',
    icon: Drumstick,
  },
  fish: {
    label: 'Fish',
    dot: 'bg-sky-400',
    icon: Fish,
  },
  veg: {
    label: 'Vegetarian',
    dot: 'bg-green-500',
    icon: Leaf,
  },
};

const categoryStyles = {
  Bengali: {
    background: 'from-[#493321] via-[#211b15] to-[#11100e]',
    accent: '#d5a66c',
    icon: 'BENGAL',
  },
  Chinese: {
    background: 'from-[#54251e] via-[#241714] to-[#11100e]',
    accent: '#e18b62',
    icon: 'ASIAN',
  },
  Continental: {
    background: 'from-[#303c39] via-[#1c2521] to-[#11100e]',
    accent: '#a6b99d',
    icon: 'CLASSIC',
  },
  Biryani: {
    background: 'from-[#534020] via-[#282014] to-[#11100e]',
    accent: '#d9b66f',
    icon: 'ROYAL',
  },
  Vegetarian: {
    background: 'from-[#293e2b] via-[#192319] to-[#11100e]',
    accent: '#9dbb85',
    icon: 'FRESH',
  },
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeType, setActiveType] = useState('All');

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const categoryMatch =
        activeCategory === 'All' ||
        dish.category === activeCategory;

      const typeMatch =
        activeType === 'All' ||
        dish.type === activeType;

      return categoryMatch && typeMatch;
    });
  }, [activeCategory, activeType]);

  return (
    <div className="min-h-screen bg-[#11100e] pt-28">
      <section className="relative overflow-hidden border-b border-white/10 py-20 text-center sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.14),transparent_60%)]" />

        <div className="container-custom relative z-10">
          <a
            href="/"
            className="mb-12 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/55 transition-colors hover:text-[#c9a66b]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>

          <div className="mb-7 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#c9a66b]/70" />
            <Sparkles size={15} className="text-[#c9a66b]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#c9a66b]">
              Crafted with Passion
            </p>
            <span className="h-px w-10 bg-[#c9a66b]/70" />
          </div>

          <h1 className="font-display text-6xl font-medium tracking-tight text-[#f5f0e8] sm:text-8xl">
            The <span className="italic text-[#c9a66b]">Menu.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/55 sm:text-base">
            Discover the flavours of Bengal, the excitement of Chinese
            cuisine, continental favourites and our signature biryanis.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-7 sm:gap-10">
            {Object.entries(typeDetails).map(([type, details]) => (
              <div key={type} className="flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${details.dot}`} />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/55">
                  {details.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`min-h-12 border px-6 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeCategory === category
                    ? 'border-[#c9a66b] bg-[#c9a66b] text-[#11100e]'
                    : 'border-white/15 bg-white/[0.02] text-white/65 hover:border-[#c9a66b] hover:text-[#c9a66b]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-10 flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-7">
            <div className="flex items-center gap-4">
              <UtensilsCrossed size={22} className="text-[#c9a66b]" />
              <div>
                <h2 className="font-display text-3xl text-[#f5f0e8]">
                  {activeCategory === 'All' ? 'Our Selection' : activeCategory}
                </h2>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Carefully selected dishes
                </p>
              </div>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              {filteredDishes.length} Dishes
            </p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-2 sm:justify-start">
            {[
              { label: 'All Types', value: 'All' },
              { label: 'Chicken', value: 'chicken' },
              { label: 'Mutton', value: 'mutton' },
              { label: 'Fish', value: 'fish' },
              { label: 'Vegetarian', value: 'veg' },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveType(filter.value)}
                className={`min-h-11 border px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] transition-all ${
                  activeType === filter.value
                    ? 'border-[#c9a66b]/70 bg-[#c9a66b]/10 text-[#c9a66b]'
                    : 'border-white/10 text-white/45 hover:border-white/30 hover:text-white/75'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredDishes.map((dish, index) => {
                const details = typeDetails[dish.type];
                const image = dishImages[dish.name];
                const style = categoryStyles[dish.category];
                const TypeIcon = details.icon;

                return (
                  <motion.article
                    layout
                    key={dish.name}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{
                      duration: 0.4,
                      delay: index < 10 ? index * 0.025 : 0,
                    }}
                    className="group overflow-hidden border border-white/10 bg-[#181612] transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a66b]/50 hover:shadow-[0_20px_55px_rgba(0,0,0,0.35)]"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden bg-[#211e18]">
                      {image ? (
                        <img
                          src={image}
                          alt={dish.name}
                          loading={index < 6 ? 'eager' : 'lazy'}
                          onError={(event) => {
                            event.currentTarget.style.display = 'none';
                            event.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : null}

                      <div
                        style={{ display: image ? 'none' : 'flex' }}
                        className={`absolute inset-0 flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${style.background}`}
                      >
                        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#c9a66b]/15" />
                        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#c9a66b]/15" />
                        <div className="absolute -bottom-20 -left-16 h-60 w-60 rounded-full border border-[#c9a66b]/10" />

                        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#c9a66b]/40 bg-black/20 shadow-[0_0_45px_rgba(201,166,107,0.12)]">
                          <TypeIcon
                            size={38}
                            strokeWidth={1.1}
                            style={{ color: style.accent }}
                          />
                        </div>

                        <span
                          className="relative z-10 mt-5 text-[9px] font-semibold uppercase tracking-[0.5em]"
                          style={{ color: style.accent }}
                        >
                          {style.icon} COLLECTION
                        </span>

                        <h3 className="relative z-10 mt-3 max-w-[85%] text-center font-display text-3xl text-[#f5f0e8]">
                          {dish.name}
                        </h3>

                        <span className="relative z-10 mt-3 h-px w-12 bg-[#c9a66b]/70" />

                        <span className="relative z-10 mt-3 text-[8px] uppercase tracking-[0.35em] text-white/45">
                          MAISON NOIR
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10 pointer-events-none" />

                      <div className="absolute left-5 top-5 flex items-center gap-2">
                        <span className={`h-3 w-3 rounded-full ${details.dot}`} />
                        <span className="bg-black/65 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                          {details.label}
                        </span>
                      </div>

                      {dish.special && (
                        <div className="absolute right-5 top-5 flex items-center gap-2 border border-[#c9a66b]/50 bg-[#11100e]/85 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#e2c18a] backdrop-blur-md">
                          <Flame size={13} />
                          Chef's Special
                        </div>
                      )}

                      <div className="absolute bottom-5 left-5">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#e0bd80]">
                          {dish.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-3xl leading-tight text-[#f5f0e8] transition-colors duration-300 group-hover:text-[#d7b477]">
                          {dish.name}
                        </h3>

                        <span className="shrink-0 pt-1 font-display text-2xl font-semibold text-[#c9a66b]">
                          ₹{dish.price}
                        </span>
                      </div>

                      <p className="mt-4 min-h-[66px] text-xs leading-7 text-white/50">
                        {dish.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-5">
                        <UtensilsCrossed
                          size={14}
                          className="text-[#c9a66b]"
                        />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c9a66b]">
                          {dish.serving}
                        </span>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/35">
                          Maison Noir Selection
                        </span>
                        <span className="h-px w-10 bg-[#c9a66b]/70 transition-all duration-500 group-hover:w-16" />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredDishes.length === 0 && (
            <div className="py-20 text-center">
              <UtensilsCrossed
                className="mx-auto mb-5 text-[#c9a66b]"
                size={30}
              />
              <h3 className="font-display text-3xl text-[#f5f0e8]">
                No dishes found
              </h3>
              <p className="mt-3 text-sm text-white/45">
                Try selecting another category or food type.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setActiveType('All');
                }}
                className="mt-7 border border-[#c9a66b]/50 px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c9a66b] transition-all hover:bg-[#c9a66b] hover:text-[#11100e]"
              >
                Reset Filters
              </button>
            </div>
          )}

          <div className="mt-20 border border-[#c9a66b]/30 bg-[#15130f] p-8 text-center sm:p-12">
            <ChefHat
              className="mx-auto mb-5 text-[#c9a66b]"
              size={28}
            />

            <h3 className="font-display text-3xl text-[#f5f0e8]">
              A Note About Our Menu
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-xs leading-7 text-white/45">
              Please inform our team about any allergies or dietary
              requirements before ordering. Menu availability, serving
              quantities and prices may change. All dishes and serving
              sizes shown are sample menu entries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
