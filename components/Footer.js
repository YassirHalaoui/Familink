import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const menuItems = [
  { name: 'Expertise', path: '/#expertise' },
  { name: 'Contact', path: '/#contact' },
  { name: 'Produits', path: '/products-services' },
  { name: 'Personal Branding', path: '/personal-branding' },
];

const socialLinks = [
  { Icon: Twitter, href: 'https://twitter.com' },
  { Icon: Linkedin, href: 'https://linkedin.com' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4 inline-block">
                FamaLink™
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Maîtrisez votre E-réputation avec expertise et professionnalisme.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Liens rapides</h4>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.path} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:contact@famalink.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    contact@famalink.com
                  </a>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <Phone size={16} className="mr-2" />
                  <a href="tel:+33659985681" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    +33 6 59 98 56 81
                  </a>
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  <span>123 Rue de la République, 75001 Paris</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} FamaLink™. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}