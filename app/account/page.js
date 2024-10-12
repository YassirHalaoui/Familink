'use client'

import React, { useState, useEffect } from 'react';
import { User, Calendar, Award, FileText, Coffee, X } from 'lucide-react';
import Image from 'next/image';
import TeaserLoginPage from '@/components/login';

const AccountDashboard = () => {
  const [showLoginModal, setShowLoginModal] = useState(true);

  useEffect(() => {
    // Show login modal on first access
    const hasVisited = localStorage.getItem('hasVisitedAccount');
    if (!hasVisited) {
      setShowLoginModal(true);
      localStorage.setItem('hasVisitedAccount', 'true');
    }
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-6">
            Votre espace personnel
          </h1>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            Laissez-nous vous aider à développer votre stratégie et bâtissez une image de marque personnelle impactante !
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            Utilisez votre présence en ligne pour atteindre des sommets professionnels et personnels, que vous êtes capable d&apos;atteindre.
          </p>
          
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            icon={Calendar}
            title="Séance de coaching gratuite"
            description="Prenez rendez-vous pour votre séance de coaching gratuite et sans engagement."
            cta="Choisir une date"
            primary={true}
          />
          <DashboardCard
            icon={Coffee}
            title="Coaching à distance"
            description="Vivez pleinement votre séance de coaching à distance."
          />
          <DashboardCard
            icon={User}
            title="Votre Marque Personnelle"
            description="Découvrez une nouvelle facette de votre Marque Personnelle."
          />
          <DashboardCard
            icon={Award}
            title="100% gratuit"
            description="100% gratuitement et 100% à distance."
          />
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Comment se déroule l&apos;appel découverte ?</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            <ProcessCard
              icon={User}
              title="Pendant ce premier entretien"
              items={[
                "Nous échangeons sur votre situation actuelle et vos objectifs.",
                "Je réponds à toutes vos questions et vous présente la démarche de coaching.",
                "Puis, nous déterminons ensemble si le coaching est adapté ou non pour vous."
              ]}
            />
            <ProcessCard
              icon={FileText}
              title="Informations pratiques"
              items={[
                "Durée : 45 minutes",
                "Lieu : en visio",
                "Prix : gratuit",
                "Sans engagement"
              ]}
            />
            <ProcessCard
              icon={Award}
              title="Et après ?"
              items={[
                "À la suite de ce rendez-vous, vous confirmez si vous souhaitez vous lancer dans un coaching ou non.",
                "Si oui, je vous envoie une convention de coaching avec les modalités et un lien vers mon agenda pour prendre rendez-vous pour les premières séances."
              ]}
            />
          </div>
        </div>
      </main>

      {showLoginModal && (
        <div className="">
          <div className="relative">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={24} />
            </button>
            <TeaserLoginPage />
          </div>
        </div>
      )}
    </div>
  );
};

const DashboardCard = ({ icon: Icon, title, description, cta, primary }) => (
  <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <Icon className="h-8 w-8 text-blue-500" aria-hidden="true" />
        <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="mt-3 text-base text-gray-600 dark:text-gray-300">{description}</p>
    </div>
    {cta && (
      <div className="bg-gray-50 dark:bg-gray-700 px-5 py-3">
        <a
          href="#"
          className={`text-base font-medium text-white ${
            primary
              ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
              : 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500'
          } px-4 py-2 rounded-md transition-colors duration-300`}
        >
          {cta} {primary && <span aria-hidden="true">&rarr;</span>}
        </a>
      </div>
    )}
  </div>
);

const ProcessCard = ({ icon: Icon, title, items }) => (
  <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <Icon className="h-8 w-8 text-blue-500" aria-hidden="true" />
        <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="h-5 w-5 text-blue-500 mr-2">&bull;</span>
            <span className="text-sm text-gray-500 dark:text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AccountDashboard;