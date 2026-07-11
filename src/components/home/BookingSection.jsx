import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { CheckCircle2 } from 'lucide-react';

export function BookingSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.booking-anim',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="booking-anim space-y-8">
          <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0">
            <img 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop" 
              alt="Happy dog looking up" 
              loading="lazy"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-cream via-transparent to-transparent"></div>
          </div>
          
          <div className="pt-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-6">
              Book an <br/> Appointment Online
            </h2>
            <p className="text-lg text-text-body mb-8 max-w-md">
              Schedule a visit for your pet quickly and easily with our online booking system.
            </p>
            
            <ul className="space-y-4">
              {['Easy Online Booking', 'Flexible Scheduling', 'SMS Reminders'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-heading font-medium">
                  <CheckCircle2 size={20} className="text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Form */}
        <div className="booking-anim bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-gray-100">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-heading">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-heading">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter phone number" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-heading">Pet Name</label>
                <input 
                  type="text" 
                  placeholder="Enter pet name" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-heading">Service</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 appearance-none text-text-body">
                  <option>Select service</option>
                  <option>Wellness Exam</option>
                  <option>Vaccination</option>
                  <option>Surgery Consult</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-heading">Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 text-text-body"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-heading">Time</label>
                <input 
                  type="time" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 text-text-body"
                />
              </div>
            </div>

            <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg mt-4">
              Book Appointment
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
