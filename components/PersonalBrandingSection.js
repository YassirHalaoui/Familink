import { motion } from 'framer-motion';
import { Compass, Target, Feather, Eye, Megaphone, Network } from 'lucide-react';

const strategies = [
  { 
    title: "Méthode",
    icon: Compass,
    description: "Une démarche professionnelle et personnelle pour définir votre communication adaptée et donner de la consistance à votre marque."
  },
  {
    title: "Marque",
    icon: Target,
    description: "Partant d'une approche révolutionnaire, le Personal Branding met l'accent sur votre personne en tant que marque unique."
  },
  {
    title: "Authenticité",
    icon: Feather,
    description: "Dans une ère numérique, il est primordial de rester authentique et d'exprimer vos spécificités intrinsèques."
  },
  {
    title: "Visibilité",
    icon: Eye,
    description: "Définir une stratégie de visibilité pour vous démarquer de la concurrence et rayonner sur le marché."
  }
];
const steps = [
    {
      title: "Découvrir",
      subtitle: "Clarifier votre raison d'être",
      description: "D'abord, nous formalisons ce à quoi vous aspirez, tant sur le plan professionnel que sur le plan personnel.",
      icon: Compass
    },
    {
      title: "Communiquer",
      subtitle: "Définir une stratégie de visibilité",
      description: "Ensuite, nous identifions les particularités qui vous démarquent de la concurrence.",
      icon: Megaphone
    },
    {
      title: "Rayonner",
      subtitle: "Créer de nouvelles connexions",
      description: "Nous définissons des stratégies ciblées pour présenter au mieux vos particularités et rendre votre profil attractif.",
      icon: Network
    }
  ];

export default function PersonalBrandingSection() {
  return (
    <div className=" mt-20 bg-gradient-to-b from-gray-100 via-blue-100 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 min-h-screen">
      <header className="py-20 text-center bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 w-full text-gray-800 dark:text-white relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Le Personal Branding, en bref...
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Démarquez-vous, surtout par conviction
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg italic max-w-4xl mx-auto"
          >
            &quot;Nous sommes tous différents et uniques, porteurs d&apos;une spécificité qui cherche à s&apos;exprimer, à être visible, à se raconter. L&apos;enjeu est donc de trouver cette singularité qui réclame notre attention et a besoin d&apos;espace pour exister pleinement. C&apos;est l&apos;expression d&apos;une quête sincère d&apos;authenticité, de cohérence, d&apos;alignement.&quot;
          </motion.blockquote>
        </div>
      </header>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800 dark:text-white">Notre approche stratégique</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow-md"
              >
                <strategy.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{strategy.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
          >
            Personal Branding Strategist
          </motion.h2>
          <div className="max-w-5xl mx-auto">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12"
            >
              L&apos;accompagnement en Personal Branding vise un double objectif : vous aider à développer votre connaissance approfondie et transformer vos particularités en atouts indiscriminables sur le marché.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="p-6">
                    <step.icon className="w-16 h-16 text-blue-600 dark:text-blue-400 mb-4 mx-auto" />
                    <h3 className="text-2xl font-semibold mb-2 text-center text-gray-800 dark:text-white">{step.title}</h3>
                    <h4 className="text-lg font-medium mb-4 text-center text-blue-600 dark:text-blue-400">{step.subtitle}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center mb-12 text-gray-800 dark:text-white"
          >
            Notre Méthodologie
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              FAMALINK™ s&apos;appuie sur la REACH PERSONAL BRANDING, référence mondiale pour la gestion efficace et durable d&apos;une marque forte et personnelle en trois étapes : Découvrir, Communiquer, et Rayonner.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              La méthode Reach Inc. est reconnue mondialement pour son approche innovante du Personal Branding, offrant des stratégies concrètes pour développer et maintenir une présence professionnelle impactante.
            </p>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}