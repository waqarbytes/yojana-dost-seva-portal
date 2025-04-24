
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const benefits: Benefit[] = [
  {
    id: '1',
    title: 'All Services in One Place',
    description: 'Access over 5000+ government services from central and state departments in a single platform.',
    icon: '🔍'
  },
  {
    id: '2',
    title: 'All Documents at One Place',
    description: 'Store and access your important documents digitally with secure DigiLocker integration.',
    icon: '📄'
  },
  {
    id: '3',
    title: 'All Transactions',
    description: 'Track all your applications and transactions with various government departments easily.',
    icon: '🔄'
  },
  {
    id: '4',
    title: 'All Engagements',
    description: 'Stay informed about schemes and updates relevant to you through customized notifications.',
    icon: '🔔'
  }
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="gov-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-title-gradient">Benefits of Yojana Dost</h2>
          <p className="mt-2 text-gray-600">Simplifying your interaction with government services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.id} className="bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gov-blue">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gov-teal opacity-5 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gov-orange opacity-5 rounded-full"></div>
    </section>
  );
};

export default BenefitsSection;
