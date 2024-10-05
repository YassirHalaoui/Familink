'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserPlus, Target, Award, BarChart, Book, Users, Briefcase, ArrowRight, Mail, Linkedin } from 'lucide-react';
import PersonalBrandingSection from '@/components/PersonalBrandingSection';

export default function PersonalBrandingPage() {
  const strategies = [
    { icon: UserPlus, title: "Identité unique", description: "Définissez votre signature professionnelle distinctive." },
    { icon: Target, title: "Positionnement ciblé", description: "Identifiez votre niche et votre audience idéale." },
    { icon: Award, title: "Expertise reconnue", description: "Établissez-vous comme un leader d'opinion dans votre domaine." },
    { icon: BarChart, title: "Visibilité amplifiée", description: "Augmentez votre présence en ligne et hors ligne." },
  ];

  const frenchTouchBenefits = [
    { icon: Book, title: "Méthode innovante", description: "Une approche unique qui allie authenticité et efficacité." },
    { icon: Users, title: "Réseau puissant", description: "Accédez à une communauté de professionnels certifiés." },
    { icon: Briefcase, title: "Opportunités accrues", description: "Attirez de meilleures opportunités professionnelles." },
  ];

  const experts = [
    {
      name: "Nathalie Baron",
      role: "Stratégiste en développement professionnel et en Personal Branding",
      description: "Nathalie propose le fruit de plus de 15 ans de pérégrinations, d'expériences et d'interventions dans le monde des entreprises et de la gestion de carrière.",
      image: "/images/Nathalie.jpg"
    },
    {
      name: "Jérôme Panciera",
      role: "Stratégiste et formateur",
      description: "Les périples professionnels de Jérôme sont autant de voyages à travers différentes cultures, que d'expériences humaines et de quêtes spirituelles. Son approche du métier de stratégiste et de formation ? Proposer une révolution consciente.",
      image: "/images/Jerome.jpg"
    },
    {
      name: "Christine Delacroix",
      role: "Accompagnatrice professionnelle",
      description: "Ce qui stimule Christine, c'est d'accompagner des professionnels vers un épanouissement réparateur pour leur donner les moyens de remodeler leurs envies et devenir acteurs de leur projet de vie.",
      image: "/images/Christine.jpg"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 via-blue-100 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 min-h-screen">
      <PersonalBrandingSection/>
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative" style={{ height: '400px' }}>
              <Image 
                src="/images/personalB.jpg"
                alt="Personal Branding Illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white">La méthode French Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Notre approche unique allie l&apos;élégance française à des stratégies de Personal Branding innovantes. Développez une identité professionnelle authentique et impactante.
              </p>
              <ul className="space-y-4">
                {frenchTouchBenefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <benefit.icon className="w-6 h-6 text-blue-500 mr-2" />
                    <span><strong>{benefit.title}:</strong> {benefit.description}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Prêt à transformer votre image professionnelle ?</h2>
          <motion.a
            href="https://calendly.com/famalink/45min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition-colors duration-300"
          >
            Réserver votre formation
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800 dark:text-white">Découvrez-les, rencontrez-les !</h2>
          <h3 className="text-2xl font-semibold text-center mb-12 text-gray-700 dark:text-gray-200">Ils seront ravis de vous en dire plus</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <motion.div 
                key={expert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image 
                    src={expert.image}
                    alt={expert.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{expert.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{expert.role}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{expert.description}</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <Mail size={20} />
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}