import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PhoneCall } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function EmergencyBanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(bannerRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
          }
        }
      );
    }, bannerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        ref={bannerRef}
        className="bg-primary rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
      >
        {/* Left Side Content */}
        <div className="p-10 md:p-16 flex-1 flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white w-fit text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            Available 24/7
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            24/7 Emergency <br className="hidden md:block"/> Pet Care
          </h2>
          
          <p className="text-primary-light/90 text-lg mb-8 max-w-md">
            We are here when you need us most. Advanced care for emergencies, day or night.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-white hover:bg-gray-50 text-primary px-8 py-3.5 rounded-full font-bold transition-all shadow-md">
              Call Emergency
            </button>
            <a href="tel:+15551234567" className="flex items-center gap-2 px-6 py-3.5 rounded-full text-white hover:bg-white/10 transition-colors font-medium">
              <PhoneCall size={20} />
              +1 (555) 123-4567
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-5/12 lg:w-1/2 relative min-h-[300px] md:min-h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10 hidden md:block w-32"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent z-10 md:hidden h-32 bottom-0 top-auto"></div>
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" 
            alt="Veterinarian with dog" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
