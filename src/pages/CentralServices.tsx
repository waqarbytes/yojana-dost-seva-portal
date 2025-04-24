
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const CentralServices = () => {
  const services = [
    {
      title: "Passport Services",
      description: "Apply for new passport or renew existing passport",
      category: "External Affairs"
    },
    {
      title: "PAN Card Services",
      description: "Apply for new PAN card or make corrections",
      category: "Finance"
    },
    {
      title: "Aadhaar Services",
      description: "Update Aadhaar details or download e-Aadhaar",
      category: "Identity"
    },
    {
      title: "Income Tax Filing",
      description: "File income tax returns and view tax status",
      category: "Finance"
    }
  ];

  return (
    <main className="min-h-screen bg-gov-light">
      <section className="gov-container py-12">
        <h1 className="text-4xl font-bold text-gov-blue mb-8">Central Government Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gov-blue mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-block bg-gov-blue/10 text-gov-blue px-3 py-1 rounded-full text-sm">
                  {service.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CentralServices;
