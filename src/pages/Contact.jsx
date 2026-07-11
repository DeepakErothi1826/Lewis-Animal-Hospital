import React, { useRef, useEffect, useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { gsap } from 'gsap';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, Facebook, Instagram, Twitter } from 'lucide-react';
import { BookingSection } from '../components/home/BookingSection';

const faqs = [
  {
    q: 'What are your hours of operation?',
    a: 'We are open Monday through Friday from 8 AM to 8 PM, and Saturday through Sunday from 9 AM to 5 PM. Emergency services are available 24/7.'
  },
  {
    q: 'Do I need an appointment?',
    a: 'We recommend scheduling an appointment to ensure minimal wait times. However, we do accept walk-ins based on availability. For emergencies, please call ahead.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, all major credit cards, and CareCredit. We also accept most pet insurance plans. Please contact us for specific coverage questions.'
  },
  {
    q: 'Do you offer emergency services?',
    a: 'Yes, we provide 24/7 emergency care for urgent situations. Please call (513) 821-1101 immediately if your pet needs emergency attention.'
  },
  {
    q: 'Can I get a tour of the facility?',
    a: 'Absolutely! We love showing pet parents around our clinic. Simply call or stop by, and we\'ll be happy to give you a full tour of our facilities.'
  }
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' }
];

export function Contact() {
  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(infoRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
      );

      gsap.fromTo('.form-anim',
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.faq-item',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: faqRef.current, start: 'top 80%' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageWrapper>
      <div className="pt-12 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-text-heading mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-text-body">
            Have questions or need to schedule an appointment? We're here to help your pet live their best life.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div ref={infoRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2 text-text-heading">Location</h3>
            <p className="text-text-body">8601 Ridge Ave<br/>Cincinnati, OH 45236</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
              <Phone size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2 text-text-heading">Phone</h3>
            <p className="text-text-body">+1 (513) 821-1101<br/>Available 24/7 for Emergencies</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Mail size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2 text-text-heading">Email</h3>
            <p className="text-text-body">info@lewispetcare.com<br/>support@lewispetcare.com</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
              <Clock size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2 text-text-heading">Hours</h3>
            <p className="text-text-body">Mon - Fri: 8am - 8pm<br/>Sat - Sun: 9am - 5pm</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="form-anim">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Send Us a Message
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-4">
              We'd Love to Hear From You
            </h2>
            <p className="text-lg text-text-body mb-8">
              Whether you have a question about our services, pricing, or just want to say hello — fill out the form and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-heading font-bold text-text-heading">Call Us Directly</p>
                  <p className="text-text-body">+1 (513) 821-1101</p>
                  <p className="text-sm text-text-body/70">Available 24/7 for emergencies</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-heading font-bold text-text-heading">Email Us</p>
                  <p className="text-text-body">info@lewispetcare.com</p>
                  <p className="text-sm text-text-body/70">We reply within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="font-heading font-bold text-text-heading mb-4">Follow Us</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-text-body hover:text-primary hover:border-primary hover:shadow-md transition-all"
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="form-anim bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-heading">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-text-heading">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-heading">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(513) 821-1101"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-heading">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 appearance-none text-text-body">
                  <option>General Inquiry</option>
                  <option>Appointment Request</option>
                  <option>Emergency</option>
                  <option>Billing Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-text-heading">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 resize-none"
                />
              </div>

              <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div ref={faqRef} className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-text-body">
              Everything you need to know about Lewis Animal Hospital.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
              <div key={faq.q} className="faq-item bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="font-heading font-bold text-text-heading text-lg pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-text-body flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-6 text-text-body leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Booking Section embedded */}
      <div className="-mt-12 bg-background-paper rounded-t-[3rem] pb-12">
        <BookingSection />

        {/* Mock Map Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="w-full h-[400px] bg-gray-200 rounded-[2rem] overflow-hidden relative shadow-inner">
             <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="Map location"
                loading="lazy"
                className="w-full h-full object-cover opacity-80 mix-blend-multiply"
             />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary animate-bounce">
                  <MapPin size={32} className="text-accent" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
