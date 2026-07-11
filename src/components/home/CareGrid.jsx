import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { siteData } from '../../data/siteData';

export const CareGrid = React.memo(function CareGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.care-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">What We Offer</div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading">
          Comprehensive Care For Your Pets
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteData.services.map((service) => (
          <div 
            key={service.id} 
            className="care-card bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-opacity-10 transition-colors ${
              service.color === 'text-primary' ? 'bg-primary text-primary group-hover:bg-primary group-hover:text-white' : 'bg-accent text-accent group-hover:bg-accent group-hover:text-white'
            }`}>
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-heading font-bold text-text-heading mb-3 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-text-body leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});
