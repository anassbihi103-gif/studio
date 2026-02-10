"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [year, setYear] = useState<number | string>('...');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 border-t border-border bg-background text-muted-foreground">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-2 opacity-50">
          <Image 
            src="/logo.png" 
            alt="Volt3D Logo" 
            width={24} 
            height={24} 
            className="rounded-sm" 
          />
          <span className="text-sm font-bold tracking-tighter uppercase font-headline">VOLT3D Portfolio</span>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-center">
          © {year} Designed & Built for the Next Dimension
        </p>
        <div className="flex space-x-6 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
