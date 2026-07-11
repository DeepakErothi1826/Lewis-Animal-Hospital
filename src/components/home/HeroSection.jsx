import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Clock, Heart } from 'lucide-react';
import { siteData } from '../../data/siteData';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text-element',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
      gsap.fromTo('.hero-image-element',
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 0.2, ease: 'power2.out' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-12 pb-24 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold hero-text-element">
            <Heart size={16} fill="currentColor" /> Trusted Pet Care
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-heading font-extrabold text-text-heading hero-text-element">
            Because Your Pet Deserves the <span className="text-accent relative inline-block">Best<svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none"/></svg></span> Care
          </h1>
          
          <p className="text-lg md:text-xl text-text-body max-w-lg hero-text-element">
            Compassionate care, expert vets, and complete wellness for your furry family members.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 hero-text-element">
            <Link to="/contact">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Book Appointment
              </button>
            </Link>
            <Link to="/services">
              <button className="bg-white hover:bg-gray-50 text-text-heading border border-gray-200 px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm hover:shadow">
                Our Services
              </button>
            </Link>
          </div>
          
          <div className="pt-8 flex items-center gap-8 md:gap-12 border-t border-gray-200/60 hero-text-element">
            {siteData.trustMetrics.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  {idx === 0 ? <ShieldCheck size={20} /> : idx === 1 ? <Clock size={20} /> : <Heart size={20} />}
                </div>
                <div>
                  <div className="font-heading font-bold text-lg text-text-heading">{metric.value}</div>
                  <div className="text-xs text-text-body font-medium uppercase tracking-wider">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 hero-image-element">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gradient-to-br from-primary/10 to-transparent">
            {/* Using a placeholder layout resembling the reference dog & cat image */}
            <img 
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop" 
              alt="Happy Dog" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-12 -left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
          >
            <div className="bg-accent/10 p-2 rounded-xl text-accent">
              <Heart size={24} fill="currentColor" />
            </div>
            <div>
              <div className="text-sm font-bold text-text-heading">Top Rated</div>
              <div className="text-xs text-text-body">Veterinary Clinic</div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
