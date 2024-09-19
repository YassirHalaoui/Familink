'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import { SITE_CONTENT } from '@/lib/constant';

export default function HeroSection() {
  const { hero } = SITE_CONTENT;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 w-full">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full opacity-10 dark:opacity-30"
        >
          <source src="/videos/digital-network.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
          >
            {hero.title.split(' ').map((word, index) => (
              <span key={index} className={index === 2 ? "text-blue-600 dark:text-blue-400" : ""}>{word} </span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {[
            { icon: Shield, title: "Protection de l'image", description: "Sécurisez votre réputation en ligne" },
            { icon: TrendingUp, title: "Amélioration de la visibilité", description: "Augmentez votre présence numérique" },
            { icon: Users, title: "Gestion de communauté", description: "Engagez votre audience efficacement" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white dark:bg-white dark:bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <item.icon className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <p className="text-gray-800 dark:text-white text-lg mb-4">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png'].map((logo, index) => (
              <img key={index} src={`/images/${logo}`} alt={`Client Logo ${index + 1}`} className="h-8 sm:h-12 opacity-50 dark:opacity-70 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}