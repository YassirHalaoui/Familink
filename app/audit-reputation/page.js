'use client'
import { motion } from 'framer-motion';
import PricingSection from '@/components/PricingSection';

export default function AuditReputationPage() {
  return (
    <div className="pt-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        >
          Auditing Reputation™
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-16 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                Notre offre Audit Reputation™ est idéale pour les particuliers qui veulent pouvoir effectuer différents contrôles et la réalisation de benchmarks de leur identité numérique. Tous les problèmes communs affectant la réputation en ligne sont examinés. C'est une approche développée par Famalink, se focalisant sur les points les plus importants de votre identité numérique.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Audit Reputation™ est un outil au cœur même de votre stratégie digitale pour faire face à la dégradation de votre image de marque.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/auditRepution.jpg"
                alt="Reputation management"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16 bg-blue-100 dark:bg-blue-900 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Analyser votre image de marque personnelle en ligne
          </h2>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Protéger la réputation de votre <strong>marque personnelle en ligne</strong> ; analyser et réagir aux conversations sur votre marque dans la presse, sur les réseaux sociaux, les forums et les plateformes d'avis. Pour répondre au mieux à ces problématiques, nous nous tenons à votre disposition afin d'en savoir plus sur vos besoins spécifiques.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <PricingSection />
        </motion.div>
      </div>
    </div>
  );
}