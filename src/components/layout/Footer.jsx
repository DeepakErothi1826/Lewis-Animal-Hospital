import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, MapPin, Phone, Mail } from 'lucide-react';

const currentYear = new Date().getFullYear();

export const Footer = React.memo(function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="text-accent group-hover:rotate-12 transition-transform duration-300">
                <PawPrint size={32} strokeWidth={2.5} />
              </div>
              <span className="font-heading font-bold text-2xl">Lewis Animal Hospital</span>
            </Link>
            <p className="text-primary-light/80 text-sm leading-relaxed max-w-xs">
              We provide compassionate, high-quality care to keep your pets healthy and happy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Veterinarians', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-primary-light/80 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {['Wellness Exams', 'Vaccinations', 'Surgery', 'Emergency Care', 'Laboratory Tests'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-primary-light/80 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                <span className="text-primary-light/80 text-sm">8601 Ridge Ave,<br/>Cincinnati, OH 45236</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent shrink-0" />
                <span className="text-primary-light/80 text-sm">+1 (513) 821-1101</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent shrink-0" />
                <span className="text-primary-light/80 text-sm">info@lewispetcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-light/60 text-sm">
            &copy; {currentYear} Lewis Animal Hospital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-primary-light/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-primary-light/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
});
