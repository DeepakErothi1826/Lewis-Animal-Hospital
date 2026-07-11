import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function PageWrapper({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col w-full bg-background-cream overflow-hidden">
      <Navbar />
      
      <main className="flex-grow pt-20 relative z-10 w-full">
        {children}
      </main>

      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
}