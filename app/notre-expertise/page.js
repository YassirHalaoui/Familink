'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Users, Calendar, Smartphone, ArrowRight } from 'lucide-react';

const DigitalIdentityPage = () => {
  const features = [
    { icon: Laptop, text: '100% Digital' },
    { icon: Users, text: 'Suivi personnalisé' },
    { icon: Calendar, text: 'Agenda à la carte' },
    { icon: Smartphone, text: 'Flexibilité' },
  ];

  const steps = [
    {
      title: 'Séance préliminaire',
      description: 'Déterminez votre réputation en ligne',
      content: 'Vous souhaitez contrôler votre réputation en ligne ? Vous cherchez à mettre en œuvre prochain projet ? Laissez-nous vous guider. De simples ajustements suffisent pour toute structure qui souhaite progresser. Mais seuls les plus audacieux parviennent aujourd&apos;hui à s&apos;adapter aux marchés en constante évolution.',
    },
    {
      title: 'Analyse du positionnement',
      description: 'Analysez l&apos;état de votre présence digitale',
      content: 'Notre équipe polyvalente met son expertise à votre service pour vous aider à atteindre vos objectifs. Chez Famalink, nous combinons nos recherches et nos compétences pour redéfinir votre stratégie E-réputation. Nous sommes fiers de pouvoir vous aider à redessiner les contours de votre Marque Personnelle et en améliorer votre positionnement en ligne.',
    },
    {
      title: 'Planification stratégique',
      description: 'Prenez un rendez-vous avec un expert',
      content: 'Dans un monde en constante évolution, nous prenons le temps d&apos;étudier votre réputation en ligne. Nous examinons ensuite les stratégies possibles pour chacun de nos clients, grâce à des ressources et outils performants. Contactez-nous dès aujourd&apos;hui pour découvrir nos services.',
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Maîtrisez votre identité numérique
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-center max-w-3xl mx-auto"
          >
            S&apos;il est aujourd&apos;hui essentiel de savoir analyser et réagir aux conversations autour de votre marque personnelle dans la presse, sur les réseaux sociaux, les forums et les plateformes d&apos;avis, il reste crucial de savoir protéger la réputation de votre marque personnelle en ligne.
          </motion.p>
        </div>
      </header>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <feature.icon className="w-16 h-16 text-blue-500 dark:text-blue-400 mb-4" />
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Accompagnements en E-réputation</h2>
          <p className="text-xl mb-12 text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Protégez la réputation de votre marque personnelle en ligne.
            Analysez et réagissez aux conversations sur votre marque dans la presse, sur les réseaux sociaux, les forums et les plateformes d&apos;avis.
          </p>
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white">Comment nous procédons ?</h3>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg mb-12 text-center">
            <p className="text-xl font-semibold">Accompagnement individuel & professionnel</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{step.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à transformer votre présence en ligne ?</h2>
          <a href="#contact" className="inline-flex items-center bg-white text-blue-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors duration-300">
            Contactez-nous <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default DigitalIdentityPage;