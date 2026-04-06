"use client";

import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState<number | string>('...');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 border-t border-border bg-background text-muted-foreground">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center">
          &copy; {year} ANAS SBIHI. All Rights Reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
