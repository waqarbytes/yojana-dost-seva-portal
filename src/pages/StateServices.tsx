
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mic, Languages, FileCheck, FileText, MessageCircle, Bell } from 'lucide-react';

const StateServices = () => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('english');
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();

  const services = [
    {
      title: "Property Registration",
      description: "Register property and land documents",
      state: "All States",
      requirements: ["Aadhaar Card", "PAN Card", "Property Documents", "Passport Size Photos", "Address Proof"],
      steps: [
        "Create an account on the state portal",
        "Fill the property registration form",
        "Upload required documents",
        "Pay the registration fee",
        "Schedule appointment for verification",
        "Visit office with original documents",
        "Collect registration certificate"
      ],
      portal: "https://stateportal.gov.in/property"
    },
    {
      title: "Vehicle Registration",
      description: "Register new vehicles and transfer ownership",
      state: "All States",
      requirements: ["Aadhaar Card", "PAN Card", "Vehicle Invoice", "Insurance Documents", "Address Proof", "Form 20 & 21"],
      steps: [
        "Create an account on the transport portal",
        "Fill the vehicle details form",
        "Upload required documents",
        "Pay the registration fee",
        "Schedule inspection appointment",
        "Attend inspection with vehicle",
        "Collect RC book"
      ],
      portal: "https://vahan.parivahan.gov.in"
    },
    {
      title: "Birth Certificate",
      description: "Apply for birth certificate and get verified copies",
      state: "All States",
      requirements: ["Hospital Discharge Summary", "Aadhaar Card of Parents", "Address Proof", "Birth Report Form"],
      steps: [
        "Register birth within 21 days",
        "Fill the birth registration form",
        "Submit proof of birth (hospital certificate)",
        "Provide parents' identity documents",
        "Pay the certificate fee",
        "Collect the certificate"
      ],
      portal: "https://stateportal.gov.in/birth"
    },
    {
      title: "Marriage Registration",
      description: "Register marriages and get certificates",
      state: "All States",
      requirements: ["Aadhaar Cards", "Passport Size Photos", "Age Proof", "Address Proof", "Witness Documents"],
      steps: [
        "Fill the marriage registration form",
        "Upload required documents of both parties",
        "Pay the registration fee",
        "Schedule appointment for verification",
        "Appear in person with witnesses",
        "Sign declaration in presence of registrar",
        "Collect marriage certificate"
      ],
      portal: "https://stateportal.gov.in/marriage"
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
          description: "Here are the steps for property registration: Create an account, upload documents, pay fees, and visit office.",
        });
      }, 5000);
    } else {
      toast({
        title: "Voice Assistant Deactivated",
        description: "Voice assistant has been turned off.",
      });
    }
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    toast({
      title: "Language Changed",
      description: `Language has been changed to ${value.charAt(0).toUpperCase() + value.slice(1)}.`,
    });
  };

  const handleWhatsAppBot = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter your WhatsApp number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // This is a placeholder for actual WhatsApp bot logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "WhatsApp Bot Activated",
        description: "You will receive a message on WhatsApp with instructions.",
      });
    } catch (error) {
      console.error("Error activating WhatsApp bot:", error);
      toast({
        title: "Error",
        description: "Failed to activate the WhatsApp bot. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Notifications Enabled",
      description: "You will receive updates about new schemes and deadlines.",
    });
  };

  return (
    <main className="min-h-screen bg-gov-light">
      <section className="gov-container py-12">
        <h1 className="text-4xl font-bold text-gov-blue mb-8">State Government Services</h1>
        
        <Tabs defaultValue="services" className="w-full mb-8">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="guide">Application Guide</TabsTrigger>
            <TabsTrigger value="chatbot">WhatsApp Assistance</TabsTrigger>
            <TabsTrigger value="support">Language & Support</TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gov-blue mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="inline-block bg-gov-blue/10 text-gov-blue px-3 py-1 rounded-full text-sm mb-4">
                      {service.state}
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

          <TabsContent value="chatbot">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-8 w-8 text-gov-blue mr-3" />
                  <h2 className="text-2xl font-bold text-gov-blue">WhatsApp Chatbot Assistance</h2>
                </div>

                <p className="mb-6">
                  For users without smartphones or limited internet access, our WhatsApp chatbot can:
                </p>

                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>Send scheme details in your preferred language</li>
                  <li>Accept document photos via WhatsApp</li>
                  <li>Guide you through application process step by step</li>
                  <li>Check application status and send updates</li>
                  <li>Answer frequently asked questions</li>
                </ul>

                <form onSubmit={handleWhatsAppBot} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                      Enter your WhatsApp number to get started
                    </label>
                    <Input 
                      id="whatsapp" 
                      placeholder="+91 98765 43210" 
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Connecting..." : "Connect on WhatsApp"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Languages className="h-8 w-8 text-gov-blue mr-3" />
                    <h2 className="text-2xl font-bold text-gov-blue">Multilingual Support</h2>
                  </div>

                  <p className="mb-6">
                    Access all services in your preferred language for better understanding.
                  </p>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Select your preferred language:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        type="button" 
                        variant={language === 'english' ? 'default' : 'outline'} 
                        onClick={() => handleLanguageChange('english')}
                        className={language === 'english' ? 'bg-gov-blue' : ''}
                      >
                        English
                      </Button>
                      <Button 
                        type="button" 
                        variant={language === 'hindi' ? 'default' : 'outline'}
                        onClick={() => handleLanguageChange('hindi')}
                        className={language === 'hindi' ? 'bg-gov-blue' : ''}
                      >
                        हिंदी (Hindi)
                      </Button>
                      <Button 
                        type="button" 
                        variant={language === 'tamil' ? 'default' : 'outline'}
                        onClick={() => handleLanguageChange('tamil')}
                        className={language === 'tamil' ? 'bg-gov-blue' : ''}
                      >
                        தமிழ் (Tamil)
                      </Button>
                      <Button 
                        type="button" 
                        variant={language === 'telugu' ? 'default' : 'outline'}
                        onClick={() => handleLanguageChange('telugu')}
                        className={language === 'telugu' ? 'bg-gov-blue' : ''}
                      >
                        తెలుగు (Telugu)
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center mb-4">
                      <Mic className="h-6 w-6 text-gov-blue mr-2" />
                      <h3 className="text-lg font-semibold text-gov-blue">Voice Support</h3>
                    </div>
                    <p className="mb-4 text-gray-700">
                      Get voice-based assistance for navigation and application help.
                    </p>
                    <Button 
                      onClick={handleVoiceAssistant} 
                      variant="outline"
                      className={`flex items-center ${isListening ? 'bg-red-100 text-red-700 border-red-300' : ''}`}
                    >
                      <Mic className={`mr-2 h-4 w-4 ${isListening ? 'text-red-600' : ''}`} />
                      {isListening ? 'Stop Voice Assistant' : 'Start Voice Assistant'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Bell className="h-8 w-8 text-gov-blue mr-3" />
                    <h2 className="text-2xl font-bold text-gov-blue">Notifications & Updates</h2>
                  </div>

                  <p className="mb-6">
                    Subscribe to receive alerts for:
                  </p>

                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>New scheme announcements</li>
                    <li>Application deadlines</li>
                    <li>Status updates on your applications</li>
                    <li>Document verification reminders</li>
                    <li>Important government announcements</li>
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
                    
                    <div className="space-y-2">
                      <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                        Any specific schemes you're interested in? (optional)
                      </label>
                      <Textarea
                        id="feedback"
                        placeholder="E.g., Housing schemes, Education scholarships, etc."
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
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default StateServices;
