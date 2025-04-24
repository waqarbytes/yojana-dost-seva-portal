
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const StateServices = () => {
  const services = [
    {
      title: "Property Registration",
      description: "Register property and land documents",
      state: "All States"
    },
    {
      title: "Vehicle Registration",
      description: "Register new vehicles and transfer ownership",
      state: "All States"
    },
    {
      title: "Birth Certificate",
      description: "Apply for birth certificate and get verified copies",
      state: "All States"
    },
    {
      title: "Marriage Registration",
      description: "Register marriages and get certificates",
      state: "All States"
    }
  ];

  return (
    <main className="min-h-screen bg-gov-light">
      <section className="gov-container py-12">
        <h1 className="text-4xl font-bold text-gov-blue mb-8">State Government Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gov-blue mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-block bg-gov-blue/10 text-gov-blue px-3 py-1 rounded-full text-sm">
                  {service.state}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default StateServices;
