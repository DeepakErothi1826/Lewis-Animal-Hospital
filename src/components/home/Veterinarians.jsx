import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteData } from '../../data/siteData';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export function Veterinarians() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.vet-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
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
    <section ref={sectionRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background-paper mt-12 rounded-[3rem]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <div className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">Our Experts</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading">
            Meet Our Veterinarians
          </h2>
        </div>
        <Link to="/about">
          <button className="border-2 border-gray-200 text-text-heading hover:border-primary hover:text-primary px-6 py-2.5 rounded-full font-semibold transition-all">
            View All Doctors
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteData.veterinarians.map((vet) => (
          <div key={vet.id} className="vet-card group cursor-pointer">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-6 bg-gray-100">
              <img 
                src={vet.image} 
                alt={vet.name} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 -mt-16 relative z-10 mx-4 group-hover:shadow-md transition-shadow">
              <h3 className="text-xl font-heading font-bold text-text-heading mb-1">{vet.name}</h3>
              <p className="text-sm text-text-body font-medium mb-3">{vet.title}</p>
              
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < vet.rating ? 'fill-accent text-accent' : 'fill-gray-200 text-gray-200'} 
                  />
                ))}
              </div>
              <p className="text-xs text-text-body/70 font-semibold uppercase tracking-wide">{vet.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
