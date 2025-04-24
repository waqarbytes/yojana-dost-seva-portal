
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Contact as ContactIcon } from 'lucide-react';

const Contact = () => {
  return (
    <main className="min-h-screen bg-gov-light">
      <section className="gov-container py-12">
        <h1 className="text-4xl font-bold text-gov-blue mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gov-blue mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your full name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Type your message here..." 
                    className="min-h-[150px]"
                  />
                </div>

                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <ContactIcon className="h-6 w-6 text-gov-blue" />
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                </div>
                <div className="space-y-4">
                  <p><strong>Address:</strong> Digital India Building, New Delhi - 110003</p>
                  <p><strong>Email:</strong> support@yojanadost.gov.in</p>
                  <p><strong>Phone:</strong> 1800-XXX-XXXX (Toll Free)</p>
                  <p><strong>Hours:</strong> Monday - Saturday: 9:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Grievance Redressal</h3>
                <p className="mb-4">
                  For complaints and grievances, please contact our dedicated grievance cell or submit your complaint through the portal.
                </p>
                <Button variant="outline" className="w-full">
                  Submit Grievance
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
