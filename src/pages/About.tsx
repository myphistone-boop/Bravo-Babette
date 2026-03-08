import React from 'react';
import { motion } from 'motion/react';
import { Award, Star, ChevronDown } from 'lucide-react';

const About = () => {
  const [storyOpen, setStoryOpen] = React.useState(false);

  return (
    <div className="pt-20 md:pt-28 pb-6 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== MOBILE LAYOUT ===== */}
        <div className="md:hidden">
          {/* Title */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-3 mb-2">
              <div className="h-[1px] w-8 bg-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Notre Histoire</span>
              <div className="h-[1px] w-8 bg-gold" />
            </div>
            <h1 className="text-3xl font-serif italic">L'Esprit <span className="text-primary">Babette</span></h1>
          </div>

          {/* Large portrait image */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-4 aspect-[3/4]">
            <img loading="lazy"
              src="https://storage.googleapis.com/novelec_assets/Bravo%20Babette/Accueil.webp"
              alt="Bravo Babette"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Text content */}
          <h2 className="text-xl font-serif italic mb-3 leading-tight">
            <span className="text-primary">Bravo Babette</span>, la Sandwicherie Créative
          </h2>
          <p className="text-dark text-[15px] leading-relaxed font-serif italic font-semibold mb-3">
            Chez Bravo Babette, chaque sandwich est une création unique. Nous marions les saveurs du monde entier avec des produits frais et de qualité pour offrir une expérience gustative inoubliable.
          </p>

          {storyOpen && (
            <p className="text-dark text-[15px] leading-relaxed font-semibold mb-3">
              Du pastrami fumé new-yorkais à l'agneau effiloché du Moyen-Orient, en passant par le poulet pané japonais, chaque bouchée raconte une histoire. Nos pains sont sélectionnés avec soin chez Maison Bonnaire, nos sauces sont maison, et chaque garniture est pensée pour créer l'accord parfait.
            </p>
          )}
          <button
            onClick={() => setStoryOpen(!storyOpen)}
            className="text-primary text-xs font-bold flex items-center gap-1 mb-4"
          >
            {storyOpen ? 'Réduire' : 'En savoir plus'}
            <ChevronDown size={14} className={`transition-transform ${storyOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Badges */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Award size={18} />
              </div>
              <div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-dark/40">Avis Google</div>
                <div className="font-bold text-xs">4,9/5 (349 avis)</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Star size={18} />
              </div>
              <div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-dark/40">Spécialité</div>
                <div className="font-bold text-xs">Sandwicherie</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden md:block">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Notre Histoire</span>
              <div className="h-[1px] w-12 bg-gold" />
            </div>
            <h1 className="text-6xl font-serif italic mb-6">L'Esprit <span className="text-primary">Babette</span></h1>
            <p className="text-dark max-w-2xl mx-auto text-lg font-serif italic font-semibold">
              "Des sandwichs d'auteur, généreux et créatifs, préparés avec passion au cœur de Montpellier."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-20 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl aspect-video">
                <img loading="lazy"
                  src="https://storage.googleapis.com/novelec_assets/Bravo%20Babette/Accueil.webp"
                  alt="Bravo Babette"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-gold/20 rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif italic mb-8 leading-tight">
                <span className="text-primary">Bravo Babette</span>, la Sandwicherie Créative
              </h2>
              <p className="text-dark text-lg mb-8 leading-relaxed font-serif italic font-semibold">
                Chez Bravo Babette, chaque sandwich est une création unique. Nous marions les saveurs du monde entier avec des produits frais et de qualité pour offrir une expérience gustative inoubliable.
              </p>
              <p className="text-dark text-lg mb-12 leading-relaxed font-semibold">
                Du pastrami fumé new-yorkais à l'agneau effiloché du Moyen-Orient, en passant par le poulet pané japonais, chaque bouchée raconte une histoire. Nos pains sont sélectionnés avec soin chez Maison Bonnaire, nos sauces sont maison, et chaque garniture est pensée pour créer l'accord parfait.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-dark/40">Avis Google</div>
                    <div className="font-bold">4,9/5 (349 avis)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Star size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-dark/40">Spécialité</div>
                    <div className="font-bold">Sandwicherie</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
