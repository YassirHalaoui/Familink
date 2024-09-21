'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Headset, Users, Building } from 'lucide-react';

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "En ligne",
      icon: Headset,
      price: "200 MAD",
      period: "Par Heure",
      description: "Idéal pour les particuliers et les entrepreneurs indépendants.",
      features: [
        "Audit de votre présence en ligne",
        "Recommandations personnalisées",
        "Rapport détaillé",
        "Support par email"
      ],
      color: "bg-blue-100 dark:bg-blue-900",
      buttonColor: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "Individuel",
      icon: Users,
      price: "300 MAD",
      period: "Par Heure",
      description: "Pour ceux qui ont besoin d'un accompagnement personnalisé.",
      features: [
        "Tout du plan En ligne",
        "Stratégie de personal branding",
        "Séance de coaching individuelle",
        "Support prioritaire"
      ],
      color: "bg-purple-100 dark:bg-purple-900",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      featured: true
    },
    {
      title: "Professionnel",
      icon: Building,
      price: "500 MAD",
      period: "Par Heure",
      description: "Parfait pour les personnalités publiques et les professionnels.",
      features: [
        "Tout du plan Individuel",
        "Gestion de crise",
        "Surveillance de réputation 24/7",
        "Assistance personnalisée"
      ],
      color: "bg-green-100 dark:bg-green-900",
      buttonColor: "bg-green-500 hover:bg-green-600"
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Nos offres
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg shadow-lg overflow-hidden flex flex-col ${plan.featured ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}
            >
              <div className={`p-8 ${plan.color} flex-grow flex flex-col`}>
                <div className="mb-8">
                  {plan.icon && <plan.icon className="w-12 h-12 mb-4 text-gray-800 dark:text-white" />}
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{plan.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 h-12">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{plan.price}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{plan.period}</div>
                </div>
                <ul className="mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
                      <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/famalink/45min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors duration-200 ${plan.buttonColor} text-center`}
                >
                  Je prends un rendez-vous
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;