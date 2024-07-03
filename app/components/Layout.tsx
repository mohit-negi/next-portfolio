// components/Layout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Social, SanityImage } from '@/utils/types';
import { urlFor } from "@/sanity/lib/client";

interface LayoutProps {
  children: React.ReactNode;
  socials: Social[];
  heroImage: SanityImage;
}

const Layout: React.FC<LayoutProps> = ({ children, socials, heroImage }) => {
  const heroImageUrl = urlFor(heroImage).url();

  return (
    <div className="min-h-screen flex flex-col">
      <Header socials={socials} />
      {children}
      <Footer heroImageUrl={heroImageUrl} />
    </div>
  );
};

export default Layout;