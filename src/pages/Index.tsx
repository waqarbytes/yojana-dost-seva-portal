
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import LiveStats from '@/components/home/LiveStats';
import WhatsNewSection from '@/components/home/WhatsNewSection';
import PopularServices from '@/components/home/PopularServices';
import StateServices from '@/components/home/StateServices';
import BenefitsSection from '@/components/home/BenefitsSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import AppPromotion from '@/components/home/AppPromotion';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <LiveStats />
      <WhatsNewSection />
      <PopularServices />
      <StateServices />
      <BenefitsSection />
      <CategoriesSection />
      <AppPromotion />
    </main>
  );
};

export default Index;
