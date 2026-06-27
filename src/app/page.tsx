'use client';

import Hero from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Benefits from '@/components/sections/Benefits';
import ReviewsSection from '@/components/sections/ReviewsSection';
import Newsletter from '@/components/sections/Newsletter';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedProducts />
      <WhyChooseUs />
      <Benefits />
      <ReviewsSection />
      <CTA />
      <Newsletter />
    </>
  );
}
