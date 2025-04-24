
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { FileCheck, FileText, Bell, Mic } from 'lucide-react';

const CentralServices = () => {
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();

  const services = [
    {
      title: "Passport Services",
      description: "Apply for new passport or renew existing passport",
      category: "External Affairs",
      requirements: ["Aadhaar Card", "PAN Card", "Birth Certificate", "Address Proof", "10th Certificate", "Passport Size Photos"],
      steps: [
        "Register on Passport Seva Portal",
        "Fill the application form online",
        "Pay the passport fee",
        "Book appointment at nearest PSK",
        "Visit PSK with original documents",
        "Complete biometric verification",
        "Receive passport by post"
      ],
      portal: "https://www.passportindia.gov.in"
    },
    {
      title: "PAN Card Services",
      description: "Apply for new PAN card or make corrections",
      category: "Finance",
      requirements: ["Identity Proof", "Address Proof", "Date of Birth Proof", "Photograph", "Signature"],
      steps: [
        "Visit the NSDL portal or Income Tax e-filing portal",
        "Fill the PAN application form",
        "Upload required documents",
        "Pay the application fee",
        "Submit the application",
        "Receive PAN card by post"
      ],
      portal: "https://www.onlineservices.nsdl.com"
    },
    {
      title: "Aadhaar Services",
      description: "Update Aadhaar details or download e-Aadhaar",
      category: "Identity",
      requirements: ["Identity Proof", "Address Proof", "Mobile Number", "Email ID"],
      steps: [
        "Visit nearest Aadhaar Enrollment Center or Aadhaar website",
        "For updates: Fill the update form and provide supporting documents",
        "For e-Aadhaar: Enter Aadhaar number and OTP on registered mobile",
        "Download e-Aadhaar or receive updated Aadhaar"
      ],
      portal: "https://uidai.gov.in"
    },
    {
      title: "Income Tax Filing",
      description: "File income tax returns and view tax status",
      category: "Finance",
      requirements: ["PAN Card", "Form 16", "Bank Statements", "Investment Proofs", "Aadhaar Card"],
      steps: [
        "Login to Income Tax e-filing portal",
        "Select appropriate ITR form",
        "Fill in personal and income details",
        "Upload Form 16 and other documents",
        "Verify ITR using Aadhaar OTP or other methods",
        "Complete e-filing process",
        "Receive acknowledgement"
      ],
      portal: "https://www.incometax.gov.in"
    }
  ];

  const handleVoiceAssistant = () => {
    setIsListening(prev => !prev);
    if (!isListening) {
      toast({
        title: "Voice Assistant Activated",
        description: "Speak clearly into your microphone to ask questions.",
      });
      // This is a placeholder for actual voice recognition logic
      setTimeout(() => {
        setIsListening(false);
        toast({
          title: "Voice Response",
          description: "To apply for a passport, you need to register on the Passport Seva Portal and book an appointment at your nearest PSK.",
        });
      }, 5000);
    } else {
      toast({
        title: "Voice Assistant Deactivated",
        description: "Voice assistant has been turned off.",
      });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Notifications Enabled",
      description: "You will receive updates about central government schemes and deadlines.",
    });
  };

  return (
    <main className="min-h-screen bg-gov-light">
      <section className="gov-container py-12">
        <h1 className="text-4xl font-bold text-gov-blue mb-8">Central Government Services</h1>
        
        <Tabs defaultValue="services" className="w-full mb-8">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="guide">Application Guide</TabsTrigger>
            <TabsTrigger value="updates">Updates & Support</TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gov-blue mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="inline-block bg-gov-blue/10 text-gov-blue px-3 py-1 rounded-full text-sm mb-4">
                      {service.category}
                    </span>
                    <Button className="w-full bg-gov-blue hover:bg-gov-blue/90">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="guide">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-gov-blue mr-3" />
                <h2 className="text-2xl font-bold text-gov-blue">Step-by-Step Application Guide</h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {services.map((service, index) => (
                  <AccordionItem key={index} value={`service-${index}`}>
                    <AccordionTrigger className="text-lg font-medium">
                      {service.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="mb-6">
                        <h3 className="text-md font-semibold flex items-center gap-2 mb-2">
                          <FileCheck className="h-5 w-5 text-gov-teal" />
                          Document Checklist
                        </h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {service.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-gray-700">{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h3 className="text-md font-semibold mb-2">Application Steps</h3>
                        <ol className="list-decimal pl-5 space-y-2">
                          {service.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="text-gray-700">{step}</li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <h3 className="text-md font-semibold mb-2">Official Portal</h3>
                        <a 
                          href={service.portal} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gov-teal hover:text-gov-blue underline"
                        >
                          {service.portal}
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="updates">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Bell className="h-8 w-8 text-gov-blue mr-3" />
                    <h2 className="text-2xl font-bold text-gov-blue">Notifications & Updates</h2>
                  </div>

                  <p className="mb-6">
                    Subscribe to receive alerts for central government services:
                  </p>

                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>New central government schemes</li>
                    <li>Important application deadlines</li>
                    <li>Status updates on your applications</li>
                    <li>Document verification reminders</li>
                    <li>Changes in policies and procedures</li>
                  </ul>

                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email-notifications" className="block text-sm font-medium text-gray-700">
                        Email for notifications
                      </label>
                      <Input 
                        id="email-notifications" 
                        type="email"
                        placeholder="your.email@example.com" 
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gov-blue hover:bg-gov-blue/90"
                    >
                      Subscribe to Updates
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Mic className="h-8 w-8 text-gov-blue mr-3" />
                    <h2 className="text-2xl font-bold text-gov-blue">Voice Assistance</h2>
                  </div>

                  <p className="mb-6">
                    Get voice-based guidance for central government services:
                  </p>

                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Ask questions about any central service</li>
                    <li>Get document requirements explained</li>
                    <li>Receive step-by-step guidance</li>
                    <li>Learn about eligibility criteria</li>
                    <li>Find nearest service centers</li>
                  </ul>

                  <Button 
                    onClick={handleVoiceAssistant} 
                    className={`w-full flex items-center justify-center ${
                      isListening 
                        ? 'bg-red-100 text-red-700 border border-red-300 hover:bg-red-200' 
                        : 'bg-gov-blue text-white hover:bg-gov-blue/90'
                    }`}
                  >
                    <Mic className="mr-2 h-4 w-4" />
                    {isListening ? 'Stop Voice Assistant' : 'Start Voice Assistant'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default CentralServices;
