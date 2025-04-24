
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Home, 
  Health, 
  Contact,
  Education
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const categories: Category[] = [
  {
    id: 'travel',
    name: 'Travel',
    description: 'Passport, visa, and international travel services',
    icon: <Home className="h-10 w-10" />,
    url: '/categories/travel',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 'health',
    name: 'Health & Wellness',
    description: 'Healthcare schemes, insurance, and medical services',
    icon: <Health className="h-10 w-10" />,
    url: '/categories/health',
    color: 'bg-green-50 text-green-600'
  },
  {
    id: 'police',
    name: 'Police & Legal',
    description: 'Police verification, legal aid, and judicial services',
    icon: <Contact className="h-10 w-10" />,
    url: '/categories/police',
    color: 'bg-red-50 text-red-600'
  },
  {
    id: 'ration',
    name: 'Mera Ration',
    description: 'Ration card, food security, and PDS services',
    icon: <div className="text-3xl">🌾</div>,
    url: '/categories/ration',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    id: 'transport',
    name: 'Transport',
    description: 'Vehicle registration, licenses, and transport services',
    icon: <div className="text-3xl">🚗</div>,
    url: '/categories/transport',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    id: 'education',
    name: 'Education & Employment',
    description: 'Scholarships, skill development, and job opportunities',
    icon: <Education className="h-10 w-10" />,
    url: '/categories/education',
    color: 'bg-orange-50 text-orange-600'
  }
];

const CategoriesSection = () => {
  return (
    <section className="section-padding bg-gov-light">
      <div className="gov-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gov-blue">Browse by Categories</h2>
          <p className="mt-2 text-gray-600">Find services based on your needs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={category.url}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 flex-grow">{category.description}</p>
                  <div className="mt-4 inline-flex items-center text-gov-teal hover:text-gov-blue">
                    <span>Explore services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
