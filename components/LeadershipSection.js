'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, BarChart } from 'lucide-react';

const steps = [
  { icon: Target, title: "Prise de fonction", description: "Sécurisez les premiers semaines de votre prise de fonction." },
  { icon: Users, title: "Gestion du changement", description: "Améliorez la productivité en encourageant les changements d'état d'esprit." },
  { icon: TrendingUp, title: "Prise de parole", description: "Acquérez des techniques pour vous améliorer et réaliser votre potentiel." },
  { icon: BarChart, title: "Négociation", description: "Apprenez les règles pour mener à bien vos négociations." }
];

export default function LeadershipSection() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800"
        >
          FAMALINK™ met l&apos;accent sur vos spécificités
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <svg viewBox="0 0 200 200" className="w-64 h-64 text-orange-500">
              <path fill="currentColor" d="M100 15c-47.1 0-85 37.9-85 85s37.9 85 85 85 85-37.9 85-85-37.9-85-85-85zm0 150c-35.8 0-65-29.2-65-65s29.2-65 65-65 65 29.2 65 65-29.2 65-65 65z"/>
              <path fill="currentColor" d="M100 55c-24.8 0-45 20.2-45 45s20.2 45 45 45 45-20.2 45-45-20.2-45-45-45zm0 70c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z"/>
              <path fill="currentColor" d="M100 85c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"/>
            </svg>
          </motion.div>
          <div>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start mb-6"
              >
                <div className="flex-shrink-0 mr-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-500">
                    <step.icon size={20} />
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}