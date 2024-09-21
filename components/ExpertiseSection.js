'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Radio, Monitor, Wifi } from 'lucide-react';

const expertiseAreas = [
  { title: "Conseils d'expert", icon: PhoneCall, description: "Exister dans la vie réelle ne suffit plus. Il faut aussi être présent sur la toile si vous souhaitez vous rendre véritablement visible." },
  { title: "Stratégie éditoriale", icon: Radio, description: "Comprendre que les internautes et les médias en ligne ont une influence réelle sur votre e-réputation, positive autant que négative." },
  { title: "Identité numérique", icon: Monitor, description: "Construire une identité numérique juste, fidèle à vos engagements, vos passions, vos talents et vos valeurs." },
  { title: "Alerte & Surveillance", icon: Wifi, description: "Maîtriser les possibilités que nous offre le digital pour savoir quoi mettre en avant et comment le faire." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Notre expertise</h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            FamaLink™ accompagne les dirigeants, les personnalités et les particuliers dans 
            la valorisation de leur identité numérique et la promotion de leurs activités en ligne.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              className="bg-white/10 p-8 rounded-xl backdrop-filter backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-400 p-3 rounded-full mr-4 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                  <area.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold">{area.title}</h3>
              </div>
              <p className="text-blue-100 group-hover:text-white transition-colors duration-300">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}