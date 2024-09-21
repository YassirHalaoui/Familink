'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const menuItems = [
  { name: 'Services', path: '/#services' },
  { name: 'Expertise', path: '/#expertise' },
  { name: 'Contact', path: '/#contact' },
  { name: 'Produits', path: '/products-services' },
  { name: 'Personal Branding', path: '/personal-branding' },
  { name: 'Pricing', path: '/combined-pricing-section' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl font-bold ${scrolled ? 'text-blue-600 dark:text-blue-400' : 'text-white'}`}
          >
            <Link href="/">FamaLink™</Link>
          </motion.h1>
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className={`text-lg font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </nav>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`ml-4 ${scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'}`}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}