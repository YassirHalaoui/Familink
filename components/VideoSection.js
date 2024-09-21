'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          L&apos;importance du Personal Branding
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300"
        >
          Découvrez pourquoi le Personal Branding est crucial pour votre succès professionnel
        </motion.p>
        <div className="relative aspect-video max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <motion.img
            src="https://img.youtube.com/vi/wsJFtsFWMcA/maxresdefault.jpg"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-16 h-16 text-white" />
          </motion.button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-xl"
            >
              Fermer
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wsJFtsFWMcA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;