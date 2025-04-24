
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { School, Home, Stethoscope } from 'lucide-react';

const schemes = [
  {
    title: "PM Kisan Samman Nidhi",
    category: "Agriculture",
    description: "Financial benefit of Rs. 6000 per year for farmer families",
    icon: <Home className="h-8 w-8" />,
    status: "Active"
  },
  {
    title: "Ayushman Bharat",
    category: "Healthcare",
    description: "Health insurance coverage of Rs. 5 lakh per family per year",
    icon: <Stethoscope className="h-8 w-8" />,
    status: "Active"
  },
  {
    title: "PM Vidya",
    category: "Education",
    description: "Educational scholarship for meritorious students",
    icon: <School className="h-8 w-8" />,
    status: "Active"
  }
];

const Schemes = () => {
  return (
    <main className="min-h-screen bg-gov-light">
      <section className="gov-container py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gov-blue">Government Schemes</h1>
          <div className="w-1/3">
            <Input type="search" placeholder="Search schemes..." className="w-full" />
          </div>
        </div>

        <div className="grid gap-6">
          {schemes.map((scheme, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gov-light rounded-full">
                    {scheme.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{scheme.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">Category: {scheme.category}</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {scheme.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{scheme.description}</p>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="text-gov-blue hover:text-gov-orange transition-colors"
                      >
                        Check Eligibility
                      </a>
                      <a 
                        href="#" 
                        className="text-gov-blue hover:text-gov-orange transition-colors"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Schemes;
