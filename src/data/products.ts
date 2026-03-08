export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string | string[];
  description: string;
  ingredients: string[];
}

export const CATEGORIES = [
  { id: 'sandwich', name: 'Sandwichs', icon: '🥪', count: 6, image: 'https://storage.googleapis.com/novelec_assets/Bravo%20Babette/Sandwich%201.webp?auto=format&fit=crop&w=200&h=200' },
  { id: 'formule', name: 'Formules', icon: '🎁', count: 1, image: 'https://storage.googleapis.com/novelec_assets/Bravo%20Babette/Exemple%201.webp?auto=format&fit=crop&w=200&h=200' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'CHAMPOTE',
    price: 9.00,
    rating: 5,
    category: 'sandwich',
    image: 'https://storage.googleapis.com/novelec_assets/Bravo%20Babette/Sandwich%205.webp',
    description: 'Pain pita garni de butternut rôti aux épices, oignons grillés pipelchuma, carottes rôties au Ras El Hanout, champignons et crème à l\'ail. Un sandwich 100% végétal aux saveurs orientales et fumées.',
    ingredients: ['Butternut rôti', 'Oignons grillés pipelchuma', 'Carottes rôties', 'Ras El Hanout', 'Champignons', 'Crème à l\'ail', 'Pain pita']
  },
  {
    id: '2',
    name: 'FRICASSE',
    price: 9.50,
    rating: 5,
    category: 'sandwich',
    image: 'https://storage.googleapis.com/novelec_assets/Bravo%20Babette/Sandwich%206.webp',
    description: 'Pain bun brioché (Maison Bonnaire) avec du thon pimenté, pommes de terre aux herbes fraîches, sweet sour pickles, œuf, olives kalamata, pickles d\'oignons rouges, sauce piquillos et mayo pipelchuma. Inspiré du fricassé tunisien, généreux et relevé.',
    ingredients: ['Thon pimenté', 'Pommes de terre aux herbes', 'Sweet sour pickles', 'Œuf', 'Olives kalamata', 'Pickles d\'oignons rouges', 'Sauce piquillos', 'Mayo pipelchuma', 'Pain bun brioché']
  },
  {
    id: '3',
    name: 'DOMI',
    price: 10.00,
    rating: 5,
    category: 'sandwich',
    image: 'https://storage.googleapis.com/novelec_assets/Bravo%20Babette/Sandwich%203.webp',
    description: 'Pain bun brioché avec poulet pané Panko, pickles de chou rouge, mayo combava, Tonkatsu Sauce et sweet sour pickles. Un sandwich style japonais, croustillant et savoureux. (+1€ supplément cheddar fumé)',
    ingredients: ['Poulet pané Panko', 'Pickles de chou rouge', 'Mayo combava', 'Tonkatsu Sauce', 'Sweet sour pickles', 'Pain bun brioché']
  },
  {
    id: '4',
    name: 'STRACCIATELOVE',
    price: 11.00,
    rating: 5,
    category: 'sandwich',
    image: 'https://storage.googleapis.com/novelec_assets/Bravo%20Babette/Sandwich%201.webp',
    description: 'Pain bun brioché garni de jambon rôti aux herbes (italien), straciatella, pesto rosso, roquette, piquillos et pesto basilic/pistache. Un sandwich très italien, crémeux et parfumé.',
    ingredients: ['Jambon rôti aux herbes', 'Straciatella', 'Pesto rosso', 'Roquette', 'Piquillos', 'Pesto basilic/pistache', 'Pain bun brioché']
  },
  {
    id: '5',
    name: 'FARCI',
    price: 12.00,
    rating: 5,
    category: 'sandwich',
    image: 'https://storage.googleapis.com/novelec_assets/Bravo%20Babette/Sanfwich%204.webp',
    description: 'Pain pita avec épaule d\'agneau effilochée cuite 8 heures, chou rouge, sauce raïta, grenades, herbes fraîches et pickles d\'oignons rouges. Le plus généreux et fondant de la carte, aux accents du Moyen-Orient.',
    ingredients: ['Épaule d\'agneau effilochée', 'Chou rouge', 'Sauce raïta', 'Grenades', 'Herbes fraîches', 'Pickles d\'oignons rouges', 'Pain pita']
  },
  {
    id: '6',
    name: 'BRAVO',
    price: 12.00,
    rating: 5,
    category: 'sandwich',
    image: 'https://storage.googleapis.com/novelec_assets/Bravo%20Babette/Sandwich%202.webp',
    description: 'Pain bun brioché avec pastrami Will\'s Smoked Meat (Paris), coleslaw, sweet sour pickles et sauce magique. La version New-Yorkaise assumée, charcuterie fumée de qualité. (+1€ supplément cheddar fumé)',
    ingredients: ['Pastrami Will\'s Smoked Meat', 'Coleslaw', 'Sweet sour pickles', 'Sauce magique', 'Pain bun brioché']
  },
  {
    id: 'f1',
    name: 'FORMULE',
    price: 5.00,
    rating: 5,
    category: 'formule',
    image: 'https://storage.googleapis.com/novelec_assets/Bravo%20Babette/Exemple%202.webp',
    description: 'Sandwich + Side ou Dessert + Boisson. (Club Maté / Lemonaid / Vita Coco +1,50€). À ajouter à n\'importe quel sandwich de la carte.',
    ingredients: ['Sandwich au choix', 'Side ou Dessert', 'Boisson']
  }
];
