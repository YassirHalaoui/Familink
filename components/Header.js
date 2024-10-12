'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

const menuItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Brand Solution', path: '/brand-reputation', subItems: [
    { name: 'Brand E-Reputation', path: '/notre-expertise' },
    { name: 'Personal Branding', path: '/personal-branding' },
    { name: 'Brand 360', path: '/brand-reputation' },
  ]},
  { name: 'Contact', path: '/contact' },
  { name: 'Blog', path: '/blog' },
  { name: 'Mon Compte', path: '/account' },

];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getHeaderStyle = () => {
    return scrolled
      ? 'bg-white dark:bg-gray-900 shadow-lg'
      : 'bg-transparent';
  };

  const getTextColor = () => {
    return scrolled
      ? 'text-gray-800 dark:text-gray-200'
      : 'text-gray-800 dark:text-white';
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(prevState => prevState === index ? null : index);
  };

  const handleLinkClick = (path) => {
    router.push(path);
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const isActive = (path) => pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${getHeaderStyle()}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl font-bold ${scrolled ? 'text-blue-600 dark:text-blue-400' : getTextColor()}`}
          >
            <Link href="/">FamaLink™</Link>
          </motion.h1>
          <nav className="hidden md:flex items-center justify-center flex-grow">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mx-4 relative group"
                ref={item.subItems ? dropdownRef : null}
              >
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className={`text-lg font-medium transition-colors ${getTextColor()} flex items-center hover:text-blue-500 focus:outline-none`}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-xl py-2 z-10"
                        >
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.path}
                              onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(subItem.path);
                              }}
                              className={`block px-4 py-2 text-sm ${
                                isActive(subItem.path)
                                  ? 'text-blue-500 bg-blue-50 dark:bg-blue-900'
                                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                              } transition-colors`}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`text-lg font-medium transition-colors ${getTextColor()} hover:text-blue-500 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${isActive(item.path) ? 'text-blue-500 after:scale-x-100' : ''}`}
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>
          <div className="flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`ml-4 md:hidden ${getTextColor()} focus:outline-none`}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className={`w-full text-left py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex justify-between items-center ${activeDropdown === index ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-gray-50 dark:bg-gray-800"
                        >
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.path}
                              onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(subItem.path);
                              }}
                              className={`block py-2 px-8 text-sm ${
                                isActive(subItem.path)
                                  ? 'text-blue-500 bg-blue-50 dark:bg-blue-900'
                                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                              } transition-colors`}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`block py-3 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${isActive(item.path) ? 'text-blue-500 bg-gray-100 dark:bg-gray-800' : ''}`}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 