import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import { siteData } from '../../data/siteData';

gsap.registerPlugin(ScrollTrigger);

export function WellnessPlans() {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef(null);
  const plans = isYearly ? siteData.wellnessPlans.yearly : siteData.wellnessPlans.monthly;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.plan-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">Affordable Care</div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-10">
          Wellness Plans
        </h2>
        
        {/* Toggle Switch */}
        <div className="inline-flex items-center gap-4 bg-white p-2 rounded-full border border-gray-200 shadow-sm mx-auto relative">
          <button 
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all relative z-10 ${!isYearly ? 'text-white' : 'text-text-body'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all relative z-10 ${isYearly ? 'text-white' : 'text-text-body'}`}
          >
            Yearly <span className="text-accent ml-1 bg-accent/10 px-2 py-0.5 rounded-full text-xs hidden sm:inline-block">Save 20%</span>
          </button>
          
          {/* Active Background Pill */}
          <div 
            className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-accent rounded-full transition-transform duration-300 ease-in-out z-0 ${isYearly ? 'translate-x-full left-4' : 'translate-x-0 left-2'}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`plan-card bg-white rounded-3xl p-8 border ${plan.recommended ? 'border-accent shadow-xl md:-translate-y-4' : 'border-gray-100 shadow-md'} relative flex flex-col h-full`}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                Most Popular
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-xl font-heading font-bold text-text-heading mb-2">{plan.name}</h3>
              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl font-heading font-bold text-text-heading">$</span>
                <span className="text-5xl font-heading font-bold text-text-heading">{plan.price}</span>
                <span className="text-text-body font-medium self-end mb-1">/{isYearly ? 'yr' : 'mo'}</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-primary shrink-0" />
                  <span className="text-text-body font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.recommended ? 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
