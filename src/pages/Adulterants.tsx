import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Beaker, X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface Adulterant {
  id: number;
  name: string;
  category: string;
  image: string;
  adulterants: string[];
  tests: string[];
}

export function Adulterants() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<Adulterant | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const adulterants: Adulterant[] = [
    {
      id: 1,
      name: 'Milk',
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1621458472871-d8b6a409aba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrJTIwZGFpcnklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NTk3NDI1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      adulterants: ['Water', 'Starch', 'Urea', 'Detergent', 'Neutralizers', 'Formalin', 'Glucose', 'Salt'],
      tests: [
        'Water Test: Put a drop of milk on a polished slanted surface. Pure milk flows slowly leaving a white trail. Watered milk flows faster.',
        'Starch Test: Add a few drops of iodine solution to 2-3 ml of milk. Blue color indicates starch presence.',
        'Detergent Test: Take 10 ml milk and add equal amount of water. Shake vigorously. Dense lather indicates detergent.',
        'Urea Test: Take 5ml milk in a test tube, add small amount of soybean or arhar powder. Dip red litmus paper. If turns blue, urea is present.',
        'Formalin Test: Take 10ml milk + 2-3 drops of sulphuric acid. Violet or blue ring indicates formalin.',
      ],
    },
    {
      id: 2,
      name: 'Turmeric Powder',
      category: 'Seasonings',
      image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc768?w=1080&q=80',
      adulterants: ['Lead chromate', 'Metanil yellow', 'Chalk powder', 'Starch', 'Yellow soapstone'],
      tests: [
        'Acid Test: Add few drops of concentrated HCl to turmeric powder. Pink color indicates presence of metanil yellow dye.',
        'Water Test: Sprinkle powder on water. Pure turmeric will slowly sink, adulterants may float or dissolve quickly.',
        'Visual Test: Rub between fingers - pure turmeric will stain yellow, artificial colors wash off easily.',
        'Lead Chromate Test: Mix turmeric in water. Add few drops of HCl. Pink/magenta color confirms metanil yellow.',
      ],
    },
    {
      id: 3,
      name: 'Chili Powder',
      category: 'Seasonings',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1080&q=80',
      adulterants: ['Brick powder', 'Sawdust', 'Artificial colors', 'Red lead', 'Salt'],
      tests: [
        'Water Test: Sprinkle chili powder on water surface. Pure chili floats and doesn\'t color water immediately. Artificial colors release quickly.',
        'Visual Test: Check for uniform texture. Presence of stones, sand particles visible to naked eye.',
        'Acetone Test: Add acetone to sample. Artificial color will separate.',
        'Alcohol Test: Mix in alcohol. Pure chili releases natural color slowly, synthetic dyes dissolve rapidly.',
      ],
    },
    {
      id: 4,
      name: 'Honey',
      category: 'Sweeteners',
      image: 'https://images.unsplash.com/photo-1655169947079-5b2a38815147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGphciUyMG5hdHVyYWx8ZW58MXx8fHwxNzU5NzYzMDI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      adulterants: ['Sugar syrup', 'Jaggery syrup', 'Glucose', 'High fructose corn syrup', 'Invert sugar', 'Corn syrup'],
      tests: [
        'Water Test: Drop honey in water. Pure honey settles at bottom and doesn\'t dissolve quickly. Adulterated honey dissolves easily.',
        'Flame Test: Dip matchstick in honey and strike. Pure honey lights easily and burns. Adulterated honey won\'t light due to moisture.',
        'Paper Test: Put a drop on blotting paper. Pure honey won\'t be absorbed or leave wet mark. Fake honey spreads and wets paper.',
        'Thumb Test: Put a drop on thumb. Pure honey won\'t spread. Adulterated honey spreads around.',
        'Vinegar Test: Mix honey with water and 2-3 drops of vinegar. Foaming indicates adulterants.',
      ],
    },
    {
      id: 5,
      name: 'Tea',
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1668587877964-16488273b0ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBsZWF2ZXMlMjBjdXB8ZW58MXx8fHwxNzU5ODA3ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      adulterants: ['Used tea leaves', 'Coal tar dyes', 'Iron filings', 'Sawdust', 'Exhausted tea', 'Artificial colors'],
      tests: [
        'Paper Test: Sprinkle tea on wet blotting paper. Artificial colors will stain the paper immediately.',
        'Water Test: Sprinkle tea on water. Tea leaves float while adulterants like sand, iron sink.',
        'Magnet Test: Move a magnet through tea. Iron filings will stick to magnet.',
        'White Paper Test: Place tea leaves on moist white paper. Pure tea won\'t stain, dyed tea leaves color immediately.',
        'Burn Test: Burn dry tea leaves. Pure tea burns completely. Adulterants leave residue.',
      ],
    },
    {
      id: 6,
      name: 'Cooking Oil',
      category: 'Oils',
      image: 'https://images.unsplash.com/photo-1662058595162-10e024b1a907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlc3xlbnwxfHx8fDE3NTk4MDc4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      adulterants: ['Argemone oil', 'Mineral oil', 'Cheaper oils', 'Castor oil', 'Animal fat', 'Rancid oil'],
      tests: [
        'Freezer Test: Put oil in refrigerator for 2 hours. Pure oil remains clear, adulterated oil turns cloudy or solidifies partially.',
        'Nitric Acid Test: Take 2ml oil + 2ml nitric acid. Shake well. Red or brown layer indicates argemone oil presence.',
        'Visual Test: Hold oil bottle against light. Pure oil is clear without sediments. Cloudiness indicates adulteration.',
        'Paper Test: Put a drop on paper. Leave overnight. Pure oil doesn\'t leave translucent mark. Mineral oil leaves greasy stain.',
      ],
    },
    {
      id: 7,
      name: 'Coffee',
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1080&q=80',
      adulterants: ['Chicory', 'Tamarind seeds', 'Roasted cereals', 'Date seeds', 'Caramel', 'Burnt sugar'],
      tests: [
        'Water Test: Sprinkle coffee on water surface. Pure coffee floats, chicory sinks rapidly and colors water orange-brown.',
        'Visual Test: Look for uniform brown color. Presence of black particles or uneven coloring indicates adulteration.',
        'Smell Test: Pure coffee has characteristic aroma. Adulterants have different, often earthy smell.',
        'Glass Test: Add coffee to cold water in glass. Coffee stays on surface, chicory starts to settle forming streak.',
      ],
    },
    {
      id: 8,
      name: 'Ghee (Clarified Butter)',
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1630409489107-1f0c1d3b78f2?w=1080&q=80',
      adulterants: ['Vanaspati (hydrogenated oil)', 'Mashed potato', 'Starch', 'Coconut oil', 'Palm oil'],
      tests: [
        'HCl + Sugar Test: Melt ghee. Add equal HCl + pinch of sugar. Shake 1 min. Red color in lower layer indicates vanaspati.',
        'Iodine Test: Melt 2ml ghee + 2ml HCl + pinch iodine crystals. Pink color confirms vegetable oil/vanaspati.',
        'Heat Test: Heat a spoon of ghee. Pure ghee melts uniformly. Adulterated ghee may produce bubbles.',
        'Hand Test: Rub ghee between palms. Pure ghee melts completely. Adulterants leave granular texture.',
      ],
    },
    {
      id: 9,
      name: 'Paneer (Cottage Cheese)',
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=1080&q=80',
      adulterants: ['Starch', 'Urea', 'Detergent', 'Cheaper fats'],
      tests: [
        'Iodine Test: Place small piece in water + few drops iodine. Blue color indicates starch adulteration.',
        'Cooking Test: Heat paneer piece. Pure paneer becomes soft. Adulterated paneer turns rubbery or hard.',
        'Texture Test: Pure paneer is soft and crumbles easily. Adulterated is hard and doesn\'t break cleanly.',
        'Taste Test: Pure paneer has mild sweet taste. Adulterated paneer may taste soapy or bitter.',
      ],
    },
    {
      id: 10,
      name: 'Black Pepper',
      category: 'Seasonings',
      image: 'https://images.unsplash.com/photo-1599021692398-2f99dadbe672?w=1080&q=80',
      adulterants: ['Papaya seeds', 'Dried berries', 'Mineral oil coating', 'Light weight material'],
      tests: [
        'Water Test: Place pepper in water. Pure pepper sinks. Papaya seeds and light adulterants float.',
        'Visual Test: Cut open corns. Pure pepper has cream colored interior. Papaya seeds are whitish/hollow.',
        'Pinch Test: Pure pepper when pinched is hard. Papaya seeds are soft and flatten easily.',
        'Alcohol Test: Soak in alcohol. Pure pepper releases piperine (white deposit). Adulterants don\'t.',
      ],
    },
    {
      id: 11,
      name: 'Sugar',
      category: 'Sweeteners',
      image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=1080&q=80',
      adulterants: ['Chalk powder', 'Washing soda', 'Urea', 'White sand'],
      tests: [
        'Water Test: Dissolve sugar in water. Pure sugar dissolves completely. Adulterants settle at bottom.',
        'Visual Inspection: Pure sugar crystals are uniform. Check for white powder or gritty particles.',
        'Taste Test: Pure sugar is sweet without aftertaste. Chalk/urea leave bitter or chemical taste.',
        'HCl Test: Add dilute HCl to sugar solution. Chalk powder produces effervescence (bubbles).',
      ],
    },
    {
      id: 12,
      name: 'Rice',
      category: 'Grains',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1080&q=80',
      adulterants: ['Plastic rice', 'Polished with talc', 'Coated with mineral oil', 'Broken rice mixed'],
      tests: [
        'Water Test: Take some rice in bowl of water. Plastic rice floats, real rice sinks.',
        'Fire Test: Burn few grains. Real rice burns with husk smell. Plastic rice smells chemical and melts.',
        'Mortar Test: Pound rice in mortar. Real rice breaks into pieces. Plastic rice becomes sticky/rubbery.',
        'Boil Test: Boil rice. Real rice becomes soft. Plastic rice remains hard or becomes very sticky mass.',
      ],
    },
    {
      id: 13,
      name: 'Wheat Flour',
      category: 'Grains',
      image: 'https://images.unsplash.com/photo-1628705936145-e1c31d17cf9d?w=1080&q=80',
      adulterants: ['Chalk powder', 'Marble chips powder', 'Talc powder', 'White sand', 'Boric acid'],
      tests: [
        'Hydrochloric Acid Test: Add HCl to flour. Effervescence indicates chalk/marble powder.',
        'Iodine Test: Mix flour with water. Add iodine drops. Blue-black color confirms starch (good). No color indicates adulterants.',
        'Visual Test: Pure flour when rubbed feels soft. Adulterants feel gritty.',
        'Water Test: Mix flour in water. Flour settles slowly. Heavy adulterants settle quickly at bottom.',
      ],
    },
    {
      id: 14,
      name: 'Pulses & Lentils',
      category: 'Grains',
      image: 'https://images.unsplash.com/photo-1607623488235-1e48e2b88955?w=1080&q=80',
      adulterants: ['Artificial colors', 'Kesari dal (toxic)', 'Metanil yellow', 'Lead chromate', 'Mineral oil'],
      tests: [
        'Water Test: Soak dal in water. Artificial colors dissolve and color water. Natural dal doesn\'t color water.',
        'HCl Test: Add few drops of HCl to dal. If color changes to pink/purple, metanil yellow is present.',
        'Visual Test: Check for uniform size, color and texture. Look for foreign materials.',
        'Kesari Test: Kesari dal has squared edges, appears glossy. Regular dal has rounded edges.',
      ],
    },
    {
      id: 15,
      name: 'Butter',
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=1080&q=80',
      adulterants: ['Vanaspati', 'Mashed potato', 'Starch', 'Margarine', 'Cheaper fats'],
      tests: [
        'Iodine Test: Melt butter, add HCl and iodine crystals. Violet color indicates vanaspati/starch.',
        'Smell Test: Heat small amount. Pure butter has pleasant aroma. Margarine smells different.',
        'Melting Test: Pure butter melts uniformly at low temp. Adulterated butter has higher melting point.',
        'Texture Test: Pure butter is smooth. Presence of starch/potato makes it grainy.',
      ],
    },
  ];

  const categories = ['All', ...Array.from(new Set(adulterants.map((item) => item.category)))];

  const filteredAdulterants = adulterants.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="mb-4">Common Food Adulterants</h1>
          <p className="text-lg text-[#243119]/80 max-w-3xl mx-auto">
            Learn to identify adulterants in common foods and perform simple home tests to check food purity
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#629460]" />
            <input
              type="text"
              placeholder="Search for food items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[#96be8c] rounded-lg focus:outline-none focus:border-[#629460] transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-[#629460] text-white shadow-md scale-105'
                  : 'bg-white text-[#243119] border-2 border-[#96be8c] hover:bg-[#aceda1] hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Adulterants Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredAdulterants.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(98, 148, 96, 0.2)' }}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-xl overflow-hidden border-2 border-[#96be8c] cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white px-4 py-2 bg-[#629460] rounded-full">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3>{item.name}</h3>
                    <span className="px-3 py-1 bg-[#aceda1] text-[#243119] rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[#243119]/70 text-sm mb-3">
                    {item.adulterants.length} common adulterants identified
                  </p>
                  <div className="flex items-center text-[#629460]">
                    <Beaker className="w-4 h-4 mr-2" />
                    <span className="text-sm">{item.tests.length} home tests available</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAdulterants.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-[#243119]/60">No food items found matching your search.</p>
          </motion.div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-[#96be8c] p-6 flex items-center justify-between">
                <div>
                  <h2 className="mb-1">{selectedItem.name}</h2>
                  <span className="px-3 py-1 bg-[#aceda1] text-[#243119] rounded-full text-sm">
                    {selectedItem.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-10 h-10 bg-[#96be8c]/20 rounded-full flex items-center justify-center hover:bg-[#629460] hover:text-white transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <ImageWithFallback
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>

                <div className="mb-6">
                  <h3 className="mb-4">Common Adulterants</h3>
                  <ul className="space-y-2">
                    {selectedItem.adulterants.map((adulterant, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-[#629460] rounded-full"></span>
                        <span className="text-[#243119]/80">{adulterant}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4">Simple Home Tests</h3>
                  <div className="space-y-4">
                    {selectedItem.tests.map((test, index) => (
                      <div
                        key={index}
                        className="bg-[#c9f2c7] border-l-4 border-[#629460] p-4 rounded-r-lg"
                      >
                        <p className="text-[#243119]">{test}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
