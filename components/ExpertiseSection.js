import React from 'react';
import { PhoneCall, Radio, Monitor, Wifi } from 'lucide-react';

const expertiseAreas = [
  { title: "Conseils d'expert", icon: PhoneCall, description: "Exister dans la vie réelle ne suffit plus. Il faut aussi être présent sur la toile si vous souhaitez vous rendre véritablement visible." },
  { title: "Stratégie éditoriale", icon: Radio, description: "Comprendre que les internautes et les médias en ligne ont une influence réelle sur votre e-réputation, positive autant que négative." },
  { title: "Identité numérique", icon: Monitor, description: "Construire une identité numérique juste, fidèle à vos engagements, vos passions, vos talents et vos valeurs." },
  { title: "Alerte & Surveillance", icon: Wifi, description: "Maîtriser les possibilités que nous offre le digital pour savoir quoi mettre en avant et comment le faire." }
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Notre expertise</h2>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
          FamaLink™ accompagne les dirigeants, les personnalités et les particuliers dans 
          la valorisation de leur identité numérique et la promotion de leurs activités en ligne.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={area.title} className="bg-white/10 p-6 rounded-lg backdrop-filter backdrop-blur-md">
              <area.icon className="w-12 h-12 mb-4 text-blue-300" />
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-sm text-blue-100">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}