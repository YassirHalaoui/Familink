'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Check, BookOpen, Headphones, ArrowRight } from 'lucide-react';

const products = [
  {
    title: "FORMULE SOLO (Code PSCPBS)",
    description: "Obtenez des informations anonymes sur votre profil, vos talents, votre rôle en équipe, vos atouts et vos défis.",
    icon: <Check className="w-6 h-6" />,
    bgColor: "from-orange-400 to-orange-600",
    emailSubject: "Demande d'information - FORMULE SOLO",
    emailBody: "Bonjour, je souhaite obtenir plus d'informations sur la FORMULE SOLO (Code PSCPBS)."
  },
  {
    title: "FORMULE DUO (Code PDCPBS)",
    description: "Lancez votre sondage avec le soutien d'un 360BRAND Coach certifié pour optimiser votre marque personnelle.",
    icon: <Check className="w-6 h-6" />,
    bgColor: "from-purple-400 to-purple-600",
    emailSubject: "Demande d'information - FORMULE DUO",
    emailBody: "Bonjour, je souhaite obtenir plus d'informations sur la FORMULE DUO (Code PDCPBS)."
  },
  {
    title: "FORMATION CERTIFIANTE (Code FCCPBS)",
    description: "Devenez 360BRAND Coach et rejoignez notre réseau professionnel pour coacher vos clients et équipes.",
    icon: <Check className="w-6 h-6" />,
    bgColor: "from-blue-400 to-blue-600",
    emailSubject: "Demande d'information - FORMATION CERTIFIANTE",
    emailBody: "Bonjour, je souhaite obtenir plus d'informations sur la FORMATION CERTIFIANTE (Code FCCPBS)."
  },
];

const resources = [
  {
    title: "EBOOK GRATUIT (Code EGCPBS)",
    description: "Découvrez notre e-book gratuit sur le Personal Branding et donnez vie à votre marque personnelle.",
    icon: <BookOpen className="w-6 h-6" />,
    bgColor: "from-green-400 to-green-600",
    emailSubject: "Demande - EBOOK GRATUIT",
    emailBody: "Bonjour, je souhaite recevoir l'EBOOK GRATUIT sur le Personal Branding (Code EGCPBS)."
  },
  {
    title: "Ma marque perso dans 5 ans (Code MCPPBS)",
    description: "Visualisez l'évolution de votre marque personnelle sur 5 ans avec notre guide audio créatif.",
    icon: <Headphones className="w-6 h-6" />,
    bgColor: "from-pink-400 to-pink-600",
    emailSubject: "Demande - Ma marque perso dans 5 ans",
    emailBody: "Bonjour, je souhaite obtenir plus d'informations sur le guide 'Ma marque perso dans 5 ans' (Code MCPPBS)."
  },
];

const Card = ({ title, description, icon, bgColor, emailSubject, emailBody }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${bgColor} text-white overflow-hidden relative`}
  >
    <div className="absolute inset-0 bg-grainy opacity-10"></div>
    <div className="relative z-10">
      <div className="flex items-center mb-4">
        <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mb-4">{description}</p>
    </div>
    <a
      href={`mailto:contact@famalink.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
      className="mt-6 bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors flex items-center justify-center group relative z-10"
    >
      Contactez Nous
      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
    </a>
  </motion.div>
);

export default function ProductsResourcesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grainy opacity-5"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-center text-shadow">Branding Reputation™</h2>
          <p className="text-lg text-center max-w-4xl mx-auto">
            Nous vous proposons un ensemble d&apos;outils pour faire décoller votre marque.
            Bilan de visibilité pour définir les contours stratégiques de votre marque personnelle ; 360 Brand pour savoir ce que vos relations professionnelles et personnelles pensent de vous ; Guide de visualisation pour préparer votre marque personnelle dans 5 ans ; Brand Social pour mieux positionner votre marque personnelle sur les réseaux sociaux ; ou encore coaching personnalisé… Choisissez l&apos;outil qui vous ressemble pour démarrer votre programme sur-mesure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-shadow">Nos Produits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} {...product} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-shadow">Ressources & outils</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} {...resource} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}