'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONTENT } from '@/lib/constant';

export default function ContactSection() {
  const { contact } = SITE_CONTENT;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8 text-primary-800 dark:text-primary-200"
            >
              {contact.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-12 text-secondary-600 dark:text-secondary-300"
            >
              {contact.subtitle}
            </motion.p>
            <div className="space-y-6">
              {[
                { icon: Mail, text: "contact@famalink.com" },
                { icon: Phone, text: "+33 1 23 45 67 89" },
                { icon: MapPin, text: "123 Rue de la République, 75001 Paris" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center text-secondary-600 dark:text-secondary-300"
                >
                  <item.icon className="w-6 h-6 mr-4 text-primary-600 dark:text-primary-400" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                {contact.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}