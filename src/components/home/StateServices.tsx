
import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

interface State {
  id: string;
  name: string;
  services: number;
  image: string;
}

const states: State[] = [
  {
    id: 'delhi',
    name: 'Delhi',
    services: 125,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Lotus_Temple_in_New_Delhi_03-2016.jpg'
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    services: 212,
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Mumbai_03-2016_80_Gateway_of_India.jpg'
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    services: 187,
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Statue_of_Unity_in_2021.jpg'
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    services: 163,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Mysore_Palace_Morning.jpg'
  },
  {
    id: 'tamilnadu',
    name: 'Tamil Nadu',
    services: 178,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Meenakshi_Temple_-_Madurai.jpg'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    services: 142,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Jal_Mahal_Jaipur_India.jpg'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    services: 119,
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Athirappalli_Falls_Kerala.jpg'
  },
  {
    id: 'uttarpradesh',
    name: 'Uttar Pradesh',
    services: 203,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Taj_Mahal_in_March_2004.jpg'
  }
];

const regions: { [key: string]: string[] } = {
  'northern': ['Delhi', 'Uttar Pradesh', 'Rajasthan'],
  'western': ['Maharashtra', 'Gujarat'],
  'southern': ['Karnataka', 'Tamil Nadu', 'Kerala'],
  'all': states.map(state => state.name)
};

const StateServices = () => {
  return (
    <section className="section-padding bg-gov-light">
      <div className="gov-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gov-blue">State-wise Services</h2>
          <p className="mt-2 text-gray-600">Explore services available in your state</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All States</TabsTrigger>
            <TabsTrigger value="northern">Northern</TabsTrigger>
            <TabsTrigger value="western">Western</TabsTrigger>
            <TabsTrigger value="southern">Southern</TabsTrigger>
          </TabsList>
          
          {Object.keys(regions).map((region) => (
            <TabsContent key={region} value={region}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {states
                  .filter(state => regions[region].includes(state.name))
                  .map((state) => (
                    <Link key={state.id} to={`/services/state/${state.id}`}>
                      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div 
                          className="h-40 bg-center bg-cover" 
                          style={{ backgroundImage: `url(${state.image})` }}
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-lg">{state.name}</h3>
                          <p className="text-sm text-gray-600">{state.services} services available</p>
                        </div>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default StateServices;
