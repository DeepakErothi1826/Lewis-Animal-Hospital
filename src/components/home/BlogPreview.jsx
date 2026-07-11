import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteData } from '../../data/siteData';

gsap.registerPlugin(ScrollTrigger);

export function BlogPreview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-card',
        { y: 40, opacity: 0 },
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
    <section ref={sectionRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <div className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">Pet Care Tips</div>
          <h2 className="text-4xl font-heading font-bold text-text-heading">
            From Our Blog
          </h2>
        </div>
        <button className="border-2 border-gray-200 text-text-heading hover:border-primary hover:text-primary px-6 py-2.5 rounded-full font-semibold transition-all">
          View All Articles
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {siteData.blogPosts.map((post) => (
          <div key={post.id} className="blog-card group cursor-pointer">
            <div className="rounded-3xl overflow-hidden aspect-video mb-6 relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            
            <h3 className="text-xl font-heading font-bold text-text-heading mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-text-body text-sm font-medium">
              {post.date} &bull; Health
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
