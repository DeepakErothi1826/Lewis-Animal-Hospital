import React, { useRef, useEffect } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { gsap } from 'gsap';
import { siteData } from '../data/siteData';
import { Heart, ClipboardList, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const processSteps = [
  {
    step: 1,
    title: 'Schedule a Visit',
    desc: 'Book online or call us. We\'ll find a time that works for you and your pet.'
  },
  {
    step: 2,
    title: 'Comprehensive Exam',
    desc: 'Our team performs a thorough check-up using state-of-the-art diagnostic tools.'
  },
  {
    step: 3,
    title: 'Personalized Care Plan',
    desc: 'We create a tailored treatment and wellness plan to keep your pet thriving.'
  }
];

const whyUsFeatures = [
  { icon: Heart, title: 'Compassionate Care', desc: 'Every pet is treated with love and respect, making them feel safe and comfortable.' },
  { icon: ClipboardList, title: 'Certified Experts', desc: 'Our team holds advanced certifications in veterinary medicine and surgery.' },
  { icon: Shield, title: 'Cutting-Edge Tech', desc: 'Digital X-rays, in-house lab, and laser therapy for accurate diagnoses and treatment.' }
];

export function Services() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const processRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo('.service-card-expanded',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.process-step',
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: processRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.feature-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: featuresRef.current, start: 'top 80%' }
        }
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
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            Veterinary Services
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-text-heading mb-6">
            Advanced Diagnostics & Heart-Led Care
          </h1>
          <p className="text-lg md:text-xl text-text-body">
            We proudly provide advanced medical services for pets, ensuring a longer, healthier life through proactive and compassionate care.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {siteData.services.map((service) => (
            <div
              key={service.id}
              className="service-card-expanded bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col h-full cursor-pointer"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${
                  service.color === 'text-primary' ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white'
                }`}>
                  <service.icon size={32} />
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>

              <h3 className="text-2xl font-heading font-bold text-text-heading mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-text-body leading-relaxed flex-grow">
                {service.description} Our specialized team ensures the highest safety protocols and monitoring from routine procedures to complex interventions.
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div ref={processRef} className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-4">
              Simple & Stress-Free Process
            </h2>
            <p className="text-lg text-text-body">
              From booking to follow-up, we make pet care easy for you and your furry friend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="process-step relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center text-2xl font-heading font-bold mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-text-heading mb-3">{step.title}</h3>
                <p className="text-text-body">{step.desc}</p>
                {step.step < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 text-gray-300">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div ref={featuresRef} className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-4">
              Care You Can Trust
            </h2>
            <p className="text-lg text-text-body">
              We go above and beyond to provide the best possible care for your pets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsFeatures.map((feature) => (
              <div key={feature.title} className="feature-card bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-heading mb-3">{feature.title}</h3>
                <p className="text-text-body">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div ref={ctaRef} className="bg-primary rounded-[3rem] p-12 md:p-16 text-center text-white shadow-xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-lg md:text-xl text-primary-light/90 max-w-2xl mx-auto mb-10">
            Schedule an appointment today and let our expert team take care of your furry family member.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-accent hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all">
                Call Us: (513) 821-1101
              </button>
            </Link>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}
