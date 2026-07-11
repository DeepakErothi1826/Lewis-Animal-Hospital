import React, { useRef, useEffect } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Veterinarians } from '../components/home/Veterinarians';
import { Star, Heart, Shield, Users, Award, Target, Eye } from 'lucide-react';
import { siteData } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: '2012', event: 'Lewis Animal Hospital founded with a vision for compassionate care.' },
  { year: '2016', event: 'Expanded facility with advanced diagnostic equipment.' },
  { year: '2020', event: 'Launched 24/7 emergency services for the Ridge community.' },
  { year: '2024', event: 'Recognized as Top Veterinary Practice by Cincinnati Pet Awards.' }
];

const values = [
  { icon: Heart, title: 'Compassion', desc: 'Every pet that walks through our doors is treated like family.' },
  { icon: Shield, title: 'Integrity', desc: 'Transparent communication and honest recommendations.' },
  { icon: Award, title: 'Excellence', desc: 'Continuously advancing our skills and technology.' },
  { icon: Users, title: 'Community', desc: 'Building lasting relationships with pets and their families.' }
];

export function About() {
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(statsRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
      );

      gsap.fromTo('.story-content',
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: storyRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.story-image',
        { x: 40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: storyRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.value-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: valuesRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.timeline-item',
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageWrapper>
      <div className="pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            About Our Clinic
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-text-heading mb-6">
            Innovative Tech Meets Deep Expertise
          </h1>
          <p className="text-lg md:text-xl text-text-body">
            Founded with a passion for animal welfare, Lewis Animal Hospital has been serving the Ridge community for over a decade. We combine cutting-edge diagnostics with heart-led care.
          </p>
        </div>

        {/* Stats Strip */}
        <div ref={statsRef} className="bg-primary text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-around items-center gap-8 mb-20 shadow-xl">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold mb-2">4.8</div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-accent text-accent" />)}
            </div>
            <div className="text-primary-light/80 text-sm uppercase tracking-wider font-semibold">Average Rating</div>
          </div>

          <div className="w-px h-16 bg-primary-light/30 hidden md:block"></div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold mb-2">889+</div>
            <div className="text-primary-light/80 text-sm uppercase tracking-wider font-semibold mt-6">Verified Reviews</div>
          </div>

          <div className="w-px h-16 bg-primary-light/30 hidden md:block"></div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold mb-2">12.5K+</div>
            <div className="text-primary-light/80 text-sm uppercase tracking-wider font-semibold mt-6">Healthy Pets</div>
          </div>
        </div>

        {/* Our Story */}
        <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="story-content">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-6">
              A Legacy of Love & Care
            </h2>
            <p className="text-text-body text-lg leading-relaxed mb-6">
              Lewis Animal Hospital was founded in 2012 by Dr. Emily Carter with a simple mission: provide pets with the same quality of care we expect for our own families. What started as a small neighborhood clinic has grown into a full-service veterinary hospital serving thousands of pets each year.
            </p>
            <p className="text-text-body text-lg leading-relaxed mb-6">
              Over the years, we've invested in state-of-the-art diagnostic equipment, built a team of highly skilled veterinarians and support staff, and developed specialized programs in dentistry, dermatology, surgery, and emergency medicine. But through all our growth, one thing remains unchanged: our commitment to compassionate, personalized care for every patient.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1594824436998-058e2f28f639?q=80&w=200&auto=format&fit=crop" alt="Dr. Emily Carter" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-heading font-bold text-text-heading">Dr. Emily Carter</p>
                <p className="text-sm text-text-body">Founder & Lead Veterinary Surgeon</p>
              </div>
            </div>
          </div>
          <div className="story-image relative">
            <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                alt="Veterinary team at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-white px-8 py-6 rounded-3xl shadow-lg">
              <p className="text-3xl font-heading font-bold">12+</p>
              <p className="text-sm font-medium">Years of Service</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div ref={valuesRef} className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-4">
              What Guides Us Every Day
            </h2>
            <p className="text-lg text-text-body">
              Our core values shape every interaction, every treatment, and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="value-card bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold text-text-heading mb-3">{value.title}</h3>
                <p className="text-text-body">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-4">
              Milestones & Growth
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((m, idx) => (
                <div key={idx} className="timeline-item relative pl-0 md:pl-24">
                  <div className="hidden md:flex absolute left-4 w-9 h-9 bg-primary text-white rounded-full items-center justify-center -translate-x-1/2 font-heading font-bold text-sm">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-3">{m.year}</span>
                    <p className="text-lg text-text-heading font-medium">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <Veterinarians />
    </PageWrapper>
  );
}
