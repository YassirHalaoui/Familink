'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserPlus, Target, Award, BarChart, Book, Users, Briefcase, ArrowRight, Mail, Linkedin, Sparkles } from 'lucide-react';
import PersonalBrandingSection from '@/components/PersonalBrandingSection';
import Link from 'next/link';
import LeadershipCardsSection from '@/components/LeadershipCardsSection';
import VideoSection from '@/components/VideoSection';

export default function PersonalBrandingPage() {  
  const strategies = [
    { icon: UserPlus, title: "Identité unique", description: "Définissez votre signature professionnelle distinctive." },
    { icon: Target, title: "Positionnement ciblé", description: "Identifiez votre niche et votre audience idéale." },
    { icon: Award, title: "Expertise reconnue", description: "Établissez-vous comme un leader d'opinion dans votre domaine." },
    { icon: BarChart, title: "Visibilité amplifiée", description: "Augmentez votre présence en ligne et hors ligne." },
  ];

  const frenchTouchBenefits = [
    { icon: Book, title: "Méthode innovante", description: "Une approche unique qui allie authenticité et efficacité." },
    { icon: Users, title: "Réseau puissant", description: "Accédez à une communauté de professionnels certifiés." },
    { icon: Briefcase, title: "Opportunités accrues", description: "Attirez de meilleures opportunités professionnelles." },
  ];

  const experts = [
    {
      name: "Nathalie Baron",
      role: "Stratégiste en développement professionnel et en Personal Branding",
      description: "Nathalie propose le fruit de plus de 15 ans de pérégrinations, d'expériences et d'interventions dans le monde des entreprises et de la gestion de carrière.",
      image: "/images/Nathalie.jpg"
    },
    {
      name: "Jérôme Panciera",
      role: "Stratégiste et formateur",
      description: "Les périples professionnels de Jérôme sont autant de voyages à travers différentes cultures, que d'expériences humaines et de quêtes spirituelles. Son approche du métier de stratégiste et de formation ? Proposer une révolution consciente.",
      image: "/images/Jerome.jpg"
    },
    {
      name: "Christine Delacroix",
      role: "Accompagnatrice professionnelle",
      description: "Ce qui stimule Christine, c'est d'accompagner des professionnels vers un épanouissement réparateur pour leur donner les moyens de remodeler leurs envies et devenir acteurs de leur projet de vie.",
      image: "/images/Christine.jpg"
    }
  ];
  const cards = [
    {
      title: "Leader",
      subtitle: "Réveillez le leader qui sommeille en vous",
      content: "Il est triste de voir combien de personnes passent à côté de leur destinée, faute de n'être pas parvenues à exprimer leur potentiel. Celles et ceux qui réussissent dans la vie, et que l'on appelle les leaders, se distinguent par une profonde connaissance d'eux-mêmes en tant qu'individus."
    },
    {
      title: "Confiance",
      subtitle: "Avancez avec sérénité",
      content: "« Avant de pouvoir diriger les autres, il faut savoir se diriger soi-même ». C'est bien connu : ce qui fait un bon manager va bien au-delà de ses seules compétences techniques. Il s'agit d'être avant tout un leader inspirant, c'est-à-dire une personne capable de porter ses équipes par des idées fortes et une communication adéquate."
    },
    {
      title: "Équilibre",
      subtitle: "Vie privée et succès professionnel",
      content: "L'épanouissement personnel est une intime combinaison entre une vie privée réussie et une vie professionnelle accomplie. Aussi est-il important d'accorder à chacun de ces deux aspects une attention particulière."
    }
  ];
  
  return (
    <div className="bg-gradient-to-b from-gray-100 via-blue-100 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 min-h-screen">
      <PersonalBrandingSection/>
      <hr/>
      <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 ">
      <Link href="https://williamarruda.com/reach-personal-branding/" target="_blank" rel="noopener noreferrer">
      <motion.div 
        className="bg-gray-900 text-white py-16 cursor-pointer hover:bg-gray-800 transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src="/images/reach.png"
                alt="Reach Inc Logo"
                width={300}
                height={100}
                className="mb-8"
              />
              <h2 className="text-3xl font-bold mb-4">REACH INC - CPBS</h2>
              <p className="text-gray-300 mb-6">
                William Arruda, leader mondial et expert reconnu en Personal Branding, est fondateur de Reach
                Inc. et auteur de la méthode Reach Personal Branding, créée en 2001. Personal Branding France
                est partenaire co-exclusif de Reach Inc. pour l&apos;enseignement de Certificat Personal Branding
                Strategist (CPBS) dans l&apos;ensemble des pays francophones, suite à un contrat signé en 2006 entre
                Béatrice Cuvelier et William Arruda.
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  Where
                </h3>
                <h3 className="text-6xl font-black mb-2 text-white">
                  Branding
                </h3>
                <h3 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
                  Gets Personal
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
      </div>
      
    </div>
    <VideoSection />
    <LeadershipCardsSection/>

      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Prêt à transformer votre image professionnelle ?</h2>
          <motion.a
            href="https://calendly.com/famalink/45min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition-colors duration-300"
          >
            Réserver votre formation
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-4 text-gray-800 dark:text-white">Découvrez-les, rencontrez-les !</h2>
          <h3 className="text-2xl font-semibold text-center mb-12 text-gray-700 dark:text-gray-200">Ils seront ravis de vous en dire plus</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <motion.div 
                key={expert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image 
                    src={expert.image}
                    alt={expert.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{expert.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{expert.role}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{expert.description}</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <Mail size={20} />
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}