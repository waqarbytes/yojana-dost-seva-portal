
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "Find Schemes That Match Your Needs",
    description: "Yojana Dost helps you discover government schemes you're eligible for with our easy eligibility checker.",
    image: "22.webp",
    buttonText: "Check Eligibility",
    buttonLink: "/eligibility"
  },
  {
    id: 2,
    title: "Over 5000+ Government Schemes",
    description: "Access central and state government schemes across different categories all in one place.",
    image: "6537.webp",
    buttonText: "Explore Schemes",
    buttonLink: "/schemes"
  },
  {
    id: 3,
    title: "Digital Services Made Simple",
    description: "Apply online for government services and schemes from the comfort of your home.",
    image: "111.webp",
    buttonText: "Get Started",
    buttonLink: "/services"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-gov-light overflow-hidden">
      <div className="gov-container relative z-10">
        <div className="min-h-[70vh] md:min-h-[80vh] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 md:py-20">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gov-blue animate-fade-in">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 animate-fade-in">
                {slides[currentSlide].description}
              </p>
              <div className="space-x-4 animate-fade-in">
                <Button 
                  className="bg-gov-blue text-white hover:bg-gov-teal py-6"
                  asChild
                >
                  <Link to={slides[currentSlide].buttonLink}>
                    {slides[currentSlide].buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white"
                  asChild
                >
                  <Link to="/services">
                    All Services
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img 
                src={slides[currentSlide].image}
                alt="Government services" 
                className="rounded-lg shadow-lg max-h-[500px] object-cover animate-fade-in"
              />
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-gov-teal w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background Design */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gov-blue opacity-5 rounded-bl-full transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gov-teal opacity-5 rounded-tr-full transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
    </section>
  );
};

export default HeroSection;
