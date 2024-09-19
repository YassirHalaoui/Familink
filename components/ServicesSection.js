'use client';

import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users } from 'lucide-react';
import { SITE_CONTENT } from '@/lib/constant';

const iconMap = {
  Shield: Shield,
  TrendingUp: TrendingUp,
  Users: Users
};

export default function ServicesSection() {
  const { services } = SITE_CONTENT;

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-primary-800 dark:text-primary-200"
        >
          {services.title}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-primary-100 dark:bg-primary-900 rounded-full p-4 inline-block mb-4">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary-700 dark:text-primary-300">{service.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}