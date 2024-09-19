import { Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FamaLink™</h3>
            <p className="text-gray-600 dark:text-gray-400">Maîtrisez votre E-réputation avec expertise et professionnalisme.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {['Services', 'Expertise', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-600 dark:text-gray-400">Email: contact@famalink.com</p>
            <p className="text-gray-600 dark:text-gray-400">Tél: +33 1 23 45 67 89</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: 'https://facebook.com' },
                { Icon: Twitter, href: 'https://twitter.com' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} FamaLink™. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}