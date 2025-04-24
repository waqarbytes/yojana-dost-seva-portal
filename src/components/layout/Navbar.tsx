
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  LogIn,
  UserPlus,
  Mic
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'hindi'>('english');
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'english' ? 'hindi' : 'english');
  };

  const toggleVoiceAssistant = () => {
    setIsVoiceActive(!isVoiceActive);
    
    if (!isVoiceActive) {
      toast({
        title: "Voice Assistant Activated",
        description: "I'm listening. How can I help you today?",
      });
      // This would be where actual voice recognition would be implemented
      setTimeout(() => {
        toast({
          title: "Voice Command Received",
          description: "Navigating to services page as requested.",
        });
        setIsVoiceActive(false);
      }, 5000);
    } else {
      toast({
        title: "Voice Assistant Deactivated",
        description: "Voice assistant is now turned off.",
      });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="gov-container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gov-blue p-2 rounded-md">
            <span className="text-white font-bold">YD</span>
          </div>
          <span className="font-bold text-xl md:text-2xl text-gov-blue">
            Yojana<span className="text-gov-orange">Dost</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-gov-blue hover:text-gov-orange font-medium transition-colors">
            <span className="flex items-center"><Home size={16} className="mr-1" /> Home</span>
          </Link>
          <Link to="/about" className="text-gov-blue hover:text-gov-orange font-medium transition-colors">
            About Us
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-gov-blue hover:text-gov-orange font-medium transition-colors flex items-center">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/services/central" className="w-full">Central Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/services/state" className="w-full">State Services</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/dashboard" className="text-gov-blue hover:text-gov-orange font-medium transition-colors">
            Dashboard
          </Link>
          <Link to="/schemes" className="text-gov-blue hover:text-gov-orange font-medium transition-colors">
            Schemes
          </Link>
          <Link to="/contact" className="text-gov-blue hover:text-gov-orange font-medium transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search schemes..."
              className="py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gov-teal focus:border-transparent w-48 md:w-64"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <Button 
            variant="outline" 
            className="border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white"
            onClick={toggleLanguage}
          >
            {currentLanguage === 'english' ? 'हिंदी' : 'English'}
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            className={`text-gov-blue ${isVoiceActive ? 'bg-red-100 text-red-600' : 'hover:text-gov-orange'}`}
            onClick={toggleVoiceAssistant}
          >
            <Mic className="h-5 w-5" />
          </Button>

          <Button 
            variant="outline"
            className="flex items-center space-x-2 border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white"
            asChild
          >
            <Link to="/login">
              <LogIn className="h-4 w-4 mr-2" />
              <span>Login</span>
            </Link>
          </Button>

          <Button 
            variant="default"
            className="flex items-center space-x-2 bg-gov-blue text-white hover:bg-gov-blue/90"
            asChild
          >
            <Link to="/signup">
              <UserPlus className="h-4 w-4 mr-2" />
              <span>Sign Up</span>
            </Link>
          </Button>
        </div>

        <button 
          className="lg:hidden text-gov-blue p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 absolute w-full z-50">
          <div className="gov-container flex flex-col space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search schemes..."
                className="py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gov-teal focus:border-transparent w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <Link to="/" className="text-gov-blue hover:text-gov-orange font-medium transition-colors py-2 border-b border-gray-100">
              <span className="flex items-center"><Home size={16} className="mr-2" /> Home</span>
            </Link>
            <Link to="/about" className="text-gov-blue hover:text-gov-orange font-medium transition-colors py-2 border-b border-gray-100">
              About Us
            </Link>
            <div className="py-2 border-b border-gray-100">
              <button 
                className="text-gov-blue font-medium w-full text-left flex items-center justify-between"
                onClick={() => {
                  const subMenu = document.getElementById('services-submenu');
                  if (subMenu) {
                    subMenu.classList.toggle('hidden');
                  }
                }}
              >
                Services <ChevronDown size={16} />
              </button>
              <div id="services-submenu" className="hidden pl-4 mt-2 space-y-2">
                <Link to="/services/central" className="block py-1 text-gray-600 hover:text-gov-orange">
                  Central Services
                </Link>
                <Link to="/services/state" className="block py-1 text-gray-600 hover:text-gov-orange">
                  State Services
                </Link>
              </div>
            </div>
            <Link to="/dashboard" className="text-gov-blue hover:text-gov-orange font-medium transition-colors py-2 border-b border-gray-100">
              Dashboard
            </Link>
            <Link to="/schemes" className="text-gov-blue hover:text-gov-orange font-medium transition-colors py-2 border-b border-gray-100">
              Schemes
            </Link>
            <Link to="/contact" className="text-gov-blue hover:text-gov-orange font-medium transition-colors py-2 border-b border-gray-100">
              Contact
            </Link>
            
            <Button 
              variant="outline" 
              className="border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white w-full"
              onClick={toggleLanguage}
            >
              {currentLanguage === 'english' ? 'हिंदी' : 'English'}
            </Button>

            <Button 
              variant="ghost"
              className={`w-full flex items-center justify-center ${isVoiceActive ? 'bg-red-100 text-red-600' : ''}`}
              onClick={toggleVoiceAssistant}
            >
              <Mic className="h-5 w-5 mr-2" />
              {isVoiceActive ? 'Stop Voice Assistant' : 'Start Voice Assistant'}
            </Button>

            <Button 
              variant="outline"
              className="w-full flex items-center justify-center space-x-2 border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white"
              asChild
            >
              <Link to="/login">
                <LogIn className="h-4 w-4 mr-2" />
                <span>Login</span>
              </Link>
            </Button>

            <Button 
              variant="default"
              className="w-full flex items-center justify-center space-x-2 bg-gov-blue text-white hover:bg-gov-blue/90"
              asChild
            >
              <Link to="/signup">
                <UserPlus className="h-4 w-4 mr-2" />
                <span>Sign Up</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
