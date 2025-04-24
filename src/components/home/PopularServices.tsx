
import React from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Health, 
  Education, 
  Travel, 
  Dashboard,
  Schemes 
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  url: string;
  type: 'popular' | 'trending';
}

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Ayushman Bharat',
    icon: <Health className="h-10 w-10 text-gov-teal" />,
    url: '/services/ayushman-bharat',
    type: 'popular'
  },
  {
    id: '2',
    title: 'PM Kisan',
    icon: <Schemes className="h-10 w-10 text-gov-teal" />,
    url: '/services/pm-kisan',
    type: 'popular'
  },
  {
    id: '3',
    title: 'National Scholarship Portal',
    icon: <Education className="h-10 w-10 text-gov-teal" />,
    url: '/services/scholarship',
    type: 'popular'
  },
  {
    id: '4',
    title: 'Driving License',
    icon: <Travel className="h-10 w-10 text-gov-teal" />,
    url: '/services/driving-license',
    type: 'popular'
  },
  {
    id: '5',
    title: 'PM Awas Yojana',
    icon: <Dashboard className="h-10 w-10 text-gov-teal" />,
    url: '/services/pm-awas-yojana',
    type: 'popular'
  },
  {
    id: '6',
    title: 'Birth Certificate',
    icon: <Dashboard className="h-10 w-10 text-gov-teal" />,
    url: '/services/birth-certificate',
    type: 'popular'
  },
  {
    id: '7',
    title: 'Income Certificate',
    icon: <Dashboard className="h-10 w-10 text-gov-teal" />,
    url: '/services/income-certificate',
    type: 'trending'
  },
  {
    id: '8',
    title: 'Pension Services',
    icon: <Dashboard className="h-10 w-10 text-gov-teal" />,
    url: '/services/pension',
    type: 'trending'
  },
  {
    id: '9',
    title: 'COVID Certificate',
    icon: <Health className="h-10 w-10 text-gov-teal" />,
    url: '/services/covid',
    type: 'trending'
  },
  {
    id: '10',
    title: 'E-Shram Card',
    icon: <Dashboard className="h-10 w-10 text-gov-teal" />,
    url: '/services/e-shram',
    type: 'trending'
  },
  {
    id: '11',
    title: 'Skill Development',
    icon: <Education className="h-10 w-10 text-gov-teal" />,
    url: '/services/skill',
    type: 'trending'
  },
  {
    id: '12',
    title: 'National Pension Scheme',
    icon: <Dashboard className="h-10 w-10 text-gov-teal" />,
    url: '/services/nps',
    type: 'trending'
  }
];

const PopularServices = () => {
  const popularServices = services.filter(service => service.type === 'popular');
  const trendingServices = services.filter(service => service.type === 'trending');

  return (
    <section className="section-padding bg-white">
      <div className="gov-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gov-blue">Services</h2>
          <p className="mt-2 text-gray-600">Frequently used government services and schemes</p>
        </div>

        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="popular">Popular Services</TabsTrigger>
            <TabsTrigger value="trending">Trending Services</TabsTrigger>
          </TabsList>
          
          <TabsContent value="popular">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {popularServices.map((service) => (
                <Link key={service.id} to={service.url}>
                  <Card className="service-card">
                    <div className="icon-container bg-gov-light">
                      {service.icon}
                    </div>
                    <h3 className="text-sm font-medium text-center">{service.title}</h3>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="trending">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {trendingServices.map((service) => (
                <Link key={service.id} to={service.url}>
                  <Card className="service-card">
                    <div className="icon-container bg-gov-light">
                      {service.icon}
                    </div>
                    <h3 className="text-sm font-medium text-center">{service.title}</h3>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PopularServices;
