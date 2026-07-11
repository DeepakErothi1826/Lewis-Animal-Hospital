import React, { useState, useRef, useEffect } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera, Youtube } from 'lucide-react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const galleryImages = [
  { id: 1, category: 'Clinic', url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop', title: 'Reception Area' },
  { id: 2, category: 'Patients', url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop', title: 'Happy Dog' },
  { id: 3, category: 'Surgeries', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop', title: 'Operating Room' },
  { id: 4, category: 'Grooming', url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop', title: 'Dog Grooming' },
  { id: 5, category: 'Patients', url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=600&auto=format&fit=crop', title: 'Curious Cat' },
  { id: 6, category: 'Clinic', url: 'https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?q=80&w=600&auto=format&fit=crop', title: 'Consultation Room' },
  { id: 7, category: 'Patients', url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop', title: 'Puppy Playtime' },
  { id: 8, category: 'Surgeries', url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop', title: 'Surgery Suite' },
  { id: 9, category: 'Grooming', url: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=600&auto=format&fit=crop', title: 'Cat Grooming' },
  { id: 10, category: 'Clinic', url: 'https://images.unsplash.com/photo-1632392035992-82a5e2b0c35f?q=80&w=600&auto=format&fit=crop', title: 'Treatment Area' },
  { id: 11, category: 'Patients', url: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?q=80&w=600&auto=format&fit=crop', title: 'Happy Cat' },
  { id: 12, category: 'Grooming', url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop', title: 'Pet Bath Station' },
];

const categories = ['All', 'Clinic', 'Surgeries', 'Grooming', 'Patients'];

export function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);

  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(ctaRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 85%' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageWrapper>
      <div className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            Our Facility
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-text-heading mb-4">
            Clinic Gallery
          </h1>
          <p className="text-lg text-text-body mb-8">
            Take a visual tour of our clinic, meet our patients, and see the care we provide.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  filter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white border border-gray-200 text-text-body hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredImages.map((img) => (
            <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl bg-gray-100"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <ZoomIn size={32} className="mb-2" />
                  <span className="font-heading font-bold text-lg">{img.title}</span>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Video Tour Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Video Tour
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-4">
              See Our Clinic in Action
            </h2>
            <p className="text-lg text-text-body">
              Get a feel for our welcoming environment and state-of-the-art facilities.
            </p>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden aspect-video max-w-4xl mx-auto shadow-xl bg-gray-100">
            <img
                src="https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?q=80&w=1200&auto=format&fit=crop"
                alt="Clinic video tour"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                <Youtube size={36} className="text-primary ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl">
              <p className="font-heading font-bold text-text-heading">Tour Our Facility</p>
              <p className="text-sm text-text-body">2:34 min</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="bg-accent rounded-[3rem] p-12 md:p-16 text-center text-white shadow-xl">
          <div className="max-w-2xl mx-auto">
            <Camera size={48} className="mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Visit Us in Person
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Nothing beats seeing our clinic firsthand. Schedule a tour or bring your pet in for a visit — we'd love to meet you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-accent hover:bg-primary hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg">
                  Book a Tour
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-8 right-8 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              >
                <X size={32} />
              </button>

              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
                <h3 className="font-heading font-bold text-2xl mb-1">{selectedImage.title}</h3>
                <p className="text-white/70">{selectedImage.category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageWrapper>
  );
}
