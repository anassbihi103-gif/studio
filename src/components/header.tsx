"use client";

import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const navItems = ['About', 'Portfolio', 'Contact'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute w-full z-50 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter font-headline">
          ANAS SBIHI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <Button asChild className="hidden md:flex font-bold transition-all group bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 py-2">
          <a href="#contact">
            Get in touch
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background pt-24 p-6 flex flex-col items-center space-y-6 animate-in fade-in-20">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button asChild size="lg" className="font-bold transition-all group bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3 text-lg">
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Get in touch
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
