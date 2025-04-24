
import React from 'react';
import { Button } from '@/components/ui/button';
import { Book, Image } from 'lucide-react';

const AppPromotion = () => {
  return (
    <section className="py-16 bg-gov-blue text-white">
      <div className="gov-container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Yojana Dost Mobile App</h2>
          <p className="text-lg mb-6 text-white/80">
            Access all government schemes and services on the go. Download our mobile app now available on Android and iOS devices.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-black text-white hover:bg-gray-900 flex items-center px-6 py-6"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image className="mr-2 h-6 w-6" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on the</span>
                  <span className="text-lg font-medium">App Store</span>
                </div>
              </a>
            </Button>
            <Button 
              className="bg-black text-white hover:bg-gray-900 flex items-center px-6 py-6"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Book className="mr-2 h-6 w-6" />
                <div className="flex flex-col items-start">
                  <span className="text-xs">Get it on</span>
                  <span className="text-lg font-medium">Google Play</span>
                </div>
              </a>
            </Button>
          </div>
          <div className="mt-6 text-white/60 text-sm">
            <p>* Scan QR code to download the app</p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-full relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Yojana Dost App Screenshot" 
              className="rounded-3xl shadow-2xl transform rotate-3 z-10 relative border-4 border-white/20"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1487058449943-2429e8be8625"
              alt="Yojana Dost App Screenshot" 
              className="absolute top-10 -left-10 rounded-3xl shadow-2xl transform -rotate-6 border-4 border-white/20"
              style={{ maxHeight: '450px', objectFit: 'cover', width: '250px' }}
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-300 flex items-center justify-center mb-2 rounded-md">
                [QR Code]
              </div>
              <span className="text-gov-blue text-xs font-medium">Scan to download</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
