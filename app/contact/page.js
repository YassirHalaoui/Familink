'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const CombinedContactAboutSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact from FamaLink Website');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:contact@famalink.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-primary-800 dark:text-primary-200 text-center"
        >
          Prêt à transformer votre présence en ligne ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-12 text-secondary-600 dark:text-secondary-300 text-center"
        >
          Contactez-nous dès aujourd&apos;hui pour une consultation gratuite.
        </motion.p>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-800 dark:text-primary-200">À propos de nous</h3>
              <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                Cabinet de conseil et de stratégie dédié à la réputation en ligne, Famalink est né de cette croyance-là. Que l&apos;identité numérique est clé, si ce n&apos;est déterminante, dans la réussite de votre carrière professionnelle.
              </p>
              <ul className="list-disc list-inside text-secondary-600 dark:text-secondary-300">
                <li>Renforcer votre identité numérique et la rendre plus résistante face à de possible attaques en ligne.</li>
                <li>Donner de la cohérence et de l&apos;authenticité par rapport à votre marque personnelle.</li>
                <li>Développer votre notoriété de la vie réelle auprès de votre réseau en ligne.</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-800 dark:text-primary-200">Notre philosophie</h3>
              <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                FAMALINK, c&apos;est aussi et surtout une équipe d&apos;experts à votre écoute qui vous donne des conseils simples et efficaces pour vous aider à garder durablement le contrôle de votre identité numérique. Et qui sait, vous donner le goût du digital !
              </p>
              <h4 className="text-xl font-semibold mb-2 text-primary-700 dark:text-primary-300">Notre vision</h4>
              <p className="text-secondary-600 dark:text-secondary-300 mb-4">
                Être une référence incontournable dans le service et le conseil: permettre aux entreprises et aux individus d&apos;optimiser leurs performances et assurer un haut niveau de prestation et de satisfaction grâce à nos méthodes et notre savoir-faire.
              </p>
              <h4 className="text-xl font-semibold mb-2 text-primary-700 dark:text-primary-300">Notre mission</h4>
              <p className="text-secondary-600 dark:text-secondary-300">
                Identifier, évaluer et accroître votre réputation en ligne pour faire rayonner votre marque personnelle. Quel que soit votre projet personnel ou professionnel, nos conseillers s&apos;engagent à vous accompagner pour reprendre le contrôle et accroître la notoriété de votre identité numérique.
              </p>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 px-4">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                Nous contacter
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-800 dark:text-primary-200">Nos partenaires</h3>
              <div className="flex flex-wrap justify-around items-center">
              <PartnerLogo 
                name="Personal Branding" 
                description="Coaching en Marque personnelle" 
                src="/images/personal-branding-logo.png"
                />
                <PartnerLogo 
                name="Ruben PEREZ" 
                description="Coaching en Prise de Parole" 
                src="/images/ruben-perez-logo.png"
                />
                <PartnerLogo 
                name="Digital Road Agency" 
                description="Agence de Marketing et Communication" 
                src="/images/digital-road-agency-logo.png"
                />
                        </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerLogo = ({ name, description, src }) => (
    <div className="text-center mb-4">
      <div className="w-20 h-20 relative mb-2 mx-auto">
        <Image
          src={src}
          alt={`${name} logo`}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h4 className="font-semibold text-primary-700 dark:text-primary-300">{name}</h4>
      <p className="text-sm text-secondary-600 dark:text-secondary-300">{description}</p>
    </div>
  );

export default CombinedContactAboutSection;