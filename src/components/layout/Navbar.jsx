import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Veterinarians', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
];

export function Navbar() {
  const location = useLocation();
  const activePaths = useMemo(() => {
    const paths = {};
    navLinks.forEach(link => {
      paths[link.path] = location.pathname.endsWith(link.path) ||
        (link.path === '/' ? location.pathname === '/' : false);
    });
    return paths;
  }, [location.pathname]);

  return (
    <nav className="fixed w-full z-50 bg-background-cream/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-accent group-hover:rotate-12 transition-transform duration-300">
              <PawPrint size={32} strokeWidth={2.5} />
            </div>
            <span className="font-heading font-bold text-2xl text-text-heading">Lewis Animal Hospital</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activePaths[link.path];
              return (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  isActive ? "text-primary" : "text-gray-800"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
