"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navItems = ['Portfolio', 'About', 'Skills', 'Contact'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="Volt3D Logo" 
            width={40} 
            height={40} 
            className="rounded-lg shadow-lg shadow-primary/20" 
          />
          <span className="text-xl font-bold tracking-tighter font-headline">VOLT3D</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm uppercase tracking-widest font-medium text-slate-300 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button asChild className="font-bold transition-all transform hover:scale-105 active:scale-95 rounded-full px-5 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact">Hire Me</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 shadow-2xl animate-in fade-in-20 slide-in-from-top-4">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-slate-100 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
