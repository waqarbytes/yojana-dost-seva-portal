
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Home, School, Contact } from 'lucide-react';

const services = [
  {
    title: "Healthcare Services",
    icon: <Stethoscope className="h-8 w-8 text-gov-blue" />,
    description: "Access medical benefits, insurance schemes, and healthcare initiatives",
    link: "/services/healthcare"
  },
  {
    title: "Housing Schemes",
    icon: <Home className="h-8 w-8 text-gov-blue" />,
    description: "Explore housing assistance and property-related services",
    link: "/services/housing"
  },
  {
    title: "Education",
    icon: <School className="h-8 w-8 text-gov-blue" />,
    description: "Discover scholarships, grants, and educational programs",
    link: "/services/education"
  },
  {
    title: "Citizen Services",
    icon: <Contact className="h-8 w-8 text-gov-blue" />,
    description: "Access essential citizen services and documentation",
    link: "/services/citizen"
  }
];

const Services = () => {
  return (
    <main className="min-h-screen bg-gov-light">
      <section className="gov-container py-12">
        <h1 className="text-4xl font-bold text-gov-blue mb-8">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={service.link} 
                  className="text-gov-blue hover:text-gov-orange transition-colors inline-flex items-center"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
