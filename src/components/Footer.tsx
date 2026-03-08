import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
                B
              </div>
              <span className="text-2xl font-serif italic font-bold tracking-tight">Bravo Babette</span>
            </Link>
            <p className="text-white/60 leading-relaxed font-serif italic">
              "Des sandwichs créatifs et généreux, préparés avec des produits de qualité au cœur de Montpellier."
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif italic mb-6 text-primary">Liens Rapides</h4>
            <ul className="space-y-4 text-white/60 font-serif italic">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition-colors">Notre Menu</Link></li>
              <li><Link to="/a-propos" className="hover:text-primary transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-serif italic mb-6 text-primary">Horaires</h4>
            <ul className="space-y-4 text-white/60 font-serif italic">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mardi - Samedi</span>
                <span className="text-white">11:30 - 14:30</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Dimanche</span>
                <span className="text-white">Fermé</span>
              </li>
              <li className="flex justify-between">
                <span>Lundi</span>
                <span className="text-white">Fermé</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contactez-nous</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3">
                <MapPin size={20} className="text-primary shrink-0" />
                <span>31 Rue Jean Jacques Rousseau, 34000 Montpellier</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span>04 67 12 58 15</span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span>contact@bravobabette.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Bravo Babette. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
