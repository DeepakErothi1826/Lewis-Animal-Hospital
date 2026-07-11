import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { siteData } from '../../data/siteData';
import { Star, Quote } from 'lucide-react';

export const Testimonials = React.memo(function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonial-content',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
      gsap.fromTo('.testimonial-image',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
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

  const review = siteData.reviews[0];

  return (
    <section ref={sectionRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="testimonial-content">
          <div className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">Happy Pet Parents</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-10">
            What Pet Parents Say About Us
          </h2>
          
          <div className="relative">
            <Quote className="absolute -top-6 -left-6 text-primary/10" size={60} fill="currentColor" />
            <p className="text-2xl font-heading text-text-heading leading-relaxed mb-8 relative z-10 italic">
              "{review.text}"
            </p>
            
            <div className="flex items-center gap-4">
              <img src={review.image} alt={review.name} loading="lazy" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <h4 className="font-heading font-bold text-text-heading">{review.name}</h4>
                <p className="text-sm text-text-body">{review.type}</p>
              </div>
              <div className="ml-auto flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 mt-8">
            <div className="w-8 h-2 bg-primary rounded-full"></div>
            <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Right Image */}
        <div className="testimonial-image relative flex justify-end">
          <div className="w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800&auto=format&fit=crop" 
              alt="Woman hugging dog" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/2 left-1/4 w-full aspect-square rounded-full bg-accent/5 -translate-y-1/2 z-0"></div>
        </div>

      </div>
    </section>
  );
});
