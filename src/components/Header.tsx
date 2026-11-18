'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import { MessageCircle, Menu, X, Flame } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/spice-guide', label: 'Spice Guide' },
    { href: '/how-to-order', label: 'How to Order' },
    { href: '/contact', label: 'About & Area' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-smokedSoy/95 backdrop-blur-md py-3 shadow-xl border-b border-toastedSesame/20'
          : 'bg-smokedSoy py-4 border-b border-toastedSesame/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="Wok & Toss Chinese Food Home"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-toastedSesame/40 bg-smokedSoy-950 p-0.5 transition-transform duration-300 group-hover:scale-105 shadow-md">
              <Image
                src="/assets/brand/logo.webp"
                alt="Wok & Toss Brand Mark"
                width={44}
                height={44}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ricePaper group-hover:text-toastedSesame transition-colors">
                WOK & TOSS
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-toastedSesame/90 font-medium -mt-1">
                Chinese Food • Rawalpindi & Islamabad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-ricePaper/85 hover:text-warmPorcelain hover:bg-smokedSoy-50/50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center space-x-3">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-roastedChilli hover:bg-roastedChilli-hover text-warmPorcelain text-xs sm:text-sm font-semibold tracking-wide shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:ring-wokCopper"
            >
              <MessageCircle className="w-4 h-4 text-warmPorcelain" />
              <span>Order on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-ricePaper hover:text-warmPorcelain hover:bg-smokedSoy-50 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-toastedSesame/20 pb-4 animate-in fade-in duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-ricePaper hover:text-warmPorcelain hover:bg-smokedSoy-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <div className="flex items-center space-x-2 text-xs text-toastedSesame/80">
                  <Flame className="w-3.5 h-3.5 text-roastedChilli" />
                  <span>Daily 12:30 PM – 11:00 PM • Delivery in Rawalpindi & Islamabad</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
