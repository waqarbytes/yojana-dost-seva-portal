
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  TextToSpeech,
  IncreaseTextSize, 
  LineHeight,
  HighlightLinks,
  InvertColors,
  Facebook,
  Youtube,
  Instagram,
  Twitter
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Footer = () => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    textSize: 'normal', // normal, large, xl
    lineHeight: 'normal', // normal, large, xl
    highlightLinks: false,
    dyslexiaFriendly: false,
    invertColors: false,
    hideImages: false
  });

  const handleTextSize = (size: 'normal' | 'large' | 'xl') => {
    setAccessibilitySettings({...accessibilitySettings, textSize: size});
    document.body.classList.remove('text-size-normal', 'text-size-large', 'text-size-xl');
    document.body.classList.add(`text-size-${size}`);
  };

  const handleLineHeight = (height: 'normal' | 'large' | 'xl') => {
    setAccessibilitySettings({...accessibilitySettings, lineHeight: height});
    document.body.classList.remove('line-height-normal', 'line-height-large', 'line-height-xl');
    document.body.classList.add(`line-height-${height}`);
  };

  const toggleHighlightLinks = () => {
    const newValue = !accessibilitySettings.highlightLinks;
    setAccessibilitySettings({...accessibilitySettings, highlightLinks: newValue});
    if (newValue) {
      document.body.classList.add('highlight-links');
    } else {
      document.body.classList.remove('highlight-links');
    }
  };

  const toggleDyslexiaFriendly = () => {
    const newValue = !accessibilitySettings.dyslexiaFriendly;
    setAccessibilitySettings({...accessibilitySettings, dyslexiaFriendly: newValue});
    if (newValue) {
      document.body.classList.add('dyslexia-friendly');
    } else {
      document.body.classList.remove('dyslexia-friendly');
    }
  };

  const toggleInvertColors = () => {
    const newValue = !accessibilitySettings.invertColors;
    setAccessibilitySettings({...accessibilitySettings, invertColors: newValue});
    if (newValue) {
      document.body.classList.add('invert-colors');
    } else {
      document.body.classList.remove('invert-colors');
    }
  };

  const toggleHideImages = () => {
    const newValue = !accessibilitySettings.hideImages;
    setAccessibilitySettings({...accessibilitySettings, hideImages: newValue});
    if (newValue) {
      document.querySelectorAll('img').forEach(img => {
        img.style.display = 'none';
      });
    } else {
      document.querySelectorAll('img').forEach(img => {
        img.style.display = '';
      });
    }
  };

  const textToSpeech = () => {
    const selectedText = window.getSelection()?.toString();
    if (selectedText && 'speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(selectedText);
      window.speechSynthesis.speak(speech);
    } else {
      alert('Please select text to use text-to-speech or your browser does not support this feature.');
    }
  };

  return (
    <footer className="bg-gov-blue text-white pt-16 pb-8">
      <div className="gov-container">
        {/* Accessibility Tools */}
        <div className="mb-12 bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Accessibility Options</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Button 
              variant="ghost" 
              className="flex flex-col items-center justify-center h-auto py-3 text-white hover:bg-white/20"
              onClick={textToSpeech}
            >
              <TextToSpeech className="mb-2" size={24} />
              <span className="text-xs">Text to Speech</span>
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex flex-col items-center justify-center h-auto py-3 text-white hover:bg-white/20"
                >
                  <IncreaseTextSize className="mb-2" size={24} />
                  <span className="text-xs">Text Size</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2">
                <div className="flex flex-col space-y-2">
                  <Button 
                    variant={accessibilitySettings.textSize === 'normal' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => handleTextSize('normal')}
                  >
                    Normal
                  </Button>
                  <Button 
                    variant={accessibilitySettings.textSize === 'large' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => handleTextSize('large')}
                  >
                    Large
                  </Button>
                  <Button 
                    variant={accessibilitySettings.textSize === 'xl' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => handleTextSize('xl')}
                  >
                    Extra Large
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex flex-col items-center justify-center h-auto py-3 text-white hover:bg-white/20"
                >
                  <LineHeight className="mb-2" size={24} />
                  <span className="text-xs">Line Height</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2">
                <div className="flex flex-col space-y-2">
                  <Button 
                    variant={accessibilitySettings.lineHeight === 'normal' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => handleLineHeight('normal')}
                  >
                    Normal
                  </Button>
                  <Button 
                    variant={accessibilitySettings.lineHeight === 'large' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => handleLineHeight('large')}
                  >
                    Large
                  </Button>
                  <Button 
                    variant={accessibilitySettings.lineHeight === 'xl' ? 'default' : 'outline'} 
                    size="sm" 
                    onClick={() => handleLineHeight('xl')}
                  >
                    Extra Large
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            <Button 
              variant={accessibilitySettings.highlightLinks ? "default" : "ghost"} 
              className={`flex flex-col items-center justify-center h-auto py-3 ${accessibilitySettings.highlightLinks ? 'bg-gov-teal text-white' : 'text-white hover:bg-white/20'}`}
              onClick={toggleHighlightLinks}
            >
              <HighlightLinks className="mb-2" size={24} />
              <span className="text-xs">Highlight Links</span>
            </Button>

            <Button 
              variant={accessibilitySettings.dyslexiaFriendly ? "default" : "ghost"} 
              className={`flex flex-col items-center justify-center h-auto py-3 ${accessibilitySettings.dyslexiaFriendly ? 'bg-gov-teal text-white' : 'text-white hover:bg-white/20'}`}
              onClick={toggleDyslexiaFriendly}
            >
              <span className="mb-2 text-xl font-bold">Aa</span>
              <span className="text-xs">Dyslexia Friendly</span>
            </Button>

            <Button 
              variant={accessibilitySettings.invertColors ? "default" : "ghost"} 
              className={`flex flex-col items-center justify-center h-auto py-3 ${accessibilitySettings.invertColors ? 'bg-gov-teal text-white' : 'text-white hover:bg-white/20'}`}
              onClick={toggleInvertColors}
            >
              <InvertColors className="mb-2" size={24} />
              <span className="text-xs">Invert Colors</span>
            </Button>

            <Button 
              variant={accessibilitySettings.hideImages ? "default" : "ghost"} 
              className={`flex flex-col items-center justify-center h-auto py-3 ${accessibilitySettings.hideImages ? 'bg-gov-teal text-white' : 'text-white hover:bg-white/20'}`}
              onClick={toggleHideImages}
            >
              <span className="mb-2 text-xl font-bold">🖼️</span>
              <span className="text-xs">Hide Images</span>
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">About Yojana Dost</h4>
            <p className="mb-4 text-sm text-white/80">
              Yojana Dost is a comprehensive platform that helps citizens find and apply for government schemes they are eligible for.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="/schemes" className="hover:text-white transition-colors">Schemes</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Legal</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/grievance-redressal" className="hover:text-white transition-colors">Grievance Redressal</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Contact Us</h4>
            <address className="not-italic text-white/80 space-y-2">
              <p>Ministry of Electronics & IT</p>
              <p>Electronics Niketan, 6 CGO Complex</p>
              <p>Lodhi Road, New Delhi - 110003</p>
              <p>Email: support@yojanadost.gov.in</p>
              <p>Phone: 1800-111-222</p>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Yojana Dost. This is a Digital India Project. 
              <br />Developed and maintained by the Yojana Dost Team under Open Governance.
            </p>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="Government of India Emblem" 
              className="h-16" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
