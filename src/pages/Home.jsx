import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { HeroSection } from '../components/home/HeroSection';
import { CareGrid } from '../components/home/CareGrid';
import { EmergencyBanner } from '../components/home/EmergencyBanner';
import { Veterinarians } from '../components/home/Veterinarians';
import { BookingSection } from '../components/home/BookingSection';
import { WellnessPlans } from '../components/home/WellnessPlans';
import { Testimonials } from '../components/home/Testimonials';
import { BlogPreview } from '../components/home/BlogPreview';

export function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <CareGrid />
      <EmergencyBanner />
      <Veterinarians />
      <BookingSection />
      <WellnessPlans />
      <Testimonials />
      <BlogPreview />
    </PageWrapper>
  );
}
