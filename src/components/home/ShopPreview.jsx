import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { siteData } from '../../data/siteData';
import { ShoppingCart } from 'lucide-react';

export function ShopPreview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.product-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
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
    <section id="shop" ref={sectionRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <div className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">Pet Products</div>
          <h2 className="text-4xl font-heading font-bold text-text-heading">
            Shop Pet Essentials
          </h2>
        </div>
        <button className="border-2 border-gray-200 text-text-heading hover:border-primary hover:text-primary px-6 py-2.5 rounded-full font-semibold transition-all">
          View All Products
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteData.products.map((product) => (
          <div key={product.id} className="product-card group cursor-pointer bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
            <div className="bg-background-cream rounded-2xl p-6 mb-4 flex justify-center items-center aspect-square group-hover:bg-primary/5 transition-colors">
              <img 
                src={product.image} 
                alt={product.name} 
                loading="lazy"
                className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="px-2">
              <h3 className="font-heading font-bold text-text-heading text-lg mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="font-bold text-text-heading">${product.price}</span>
                <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-full transition-colors">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
