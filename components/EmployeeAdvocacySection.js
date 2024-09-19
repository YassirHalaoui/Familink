// components/EmployeeAdvocacySection.js
'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { SITE_CONTENT } from '@/lib/constant';

export default function EmployeeAdvocacySection() {
  const { employeeAdvocacy } = SITE_CONTENT;

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-primary-800"
        >
          {employeeAdvocacy.title}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-6 text-secondary-700">{employeeAdvocacy.description}</p>
            <p className="text-xl font-semibold mb-6 text-primary-700">{employeeAdvocacy.subtitle}</p>
            <blockquote className="border-l-4 border-primary-500 pl-4 italic text-secondary-600">
            &quot;{employeeAdvocacy.quote}&quot;
            </blockquote>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <Users className="w-64 h-64 text-primary-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}