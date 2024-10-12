import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const cards = [
  {
    title: "Leader",
    subtitle: "Réveillez le leader qui sommeille en vous",
    content: "Il est triste de voir combien de personnes passent à côté de leur destinée, faute de n'être pas parvenues à exprimer leur potentiel. Celles et ceux qui réussissent dans la vie, et que l'on appelle les leaders, se distinguent par une profonde connaissance d'eux-mêmes en tant qu'individus. Ils savent quelles sont leurs forces, leurs ressources et leurs faiblesses. C'est ce qui les rend capables de développer un management aligné à leurs valeurs.",
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Confiance",
    subtitle: "Avancez avec sérénité",
    content: "« Avant de pouvoir diriger les autres, il faut savoir se diriger soi-même ». C'est bien connu : ce qui fait un bon manager va bien au-delà de ses seules compétences techniques. Il s'agit d'être avant tout un leader inspirant, c'est-à-dire une personne capable de porter ses équipes par des idées fortes et une communication adéquate. Malheureusement, cette qualité n'est pas aussi répandue que cela.",
    color: "from-green-600 to-green-400"
  },
  {
    title: "Équilibre",
    subtitle: "Vie privée et succès professionnel",
    content: "L'épanouissement personnel est une intime combinaison entre une vie privée réussie et une vie professionnelle accomplie. Aussi est-il important d'accorder à chacun de ces deux aspects une attention particulière. Disposés à vous aider à trouver le point d'équilibre, nous vous offrons un accompagnement qui vise à mieux aménager votre vie, en fonction de vos attentes, de vos exigences et de vos objectifs.",
    color: "from-purple-600 to-purple-400"
  }
];

export default function LeadershipSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  const prevCard = () => setActiveIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Pour aller plus loin
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${cards[activeIndex].color} rounded-lg shadow-2xl overflow-hidden`}
            >
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-2">{cards[activeIndex].title}</h3>
                <h4 className="text-xl font-semibold mb-6 text-gray-200">{cards[activeIndex].subtitle}</h4>
                <p className="text-lg leading-relaxed">{cards[activeIndex].content}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div 
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={prevCard}
              className="bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
          </motion.div>
          <motion.div 
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={nextCard}
              className="bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>
        <div className="flex justify-center mt-8">
          {cards.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full mx-2 ${
                index === activeIndex ? 'bg-white' : 'bg-gray-500'
              }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}