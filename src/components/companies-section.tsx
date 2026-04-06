import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Antemotion', logo: '/antemotion.png' },
  { name: 'Metalfer', logo: '/metalfer.png' },
  { name: 'Double S', logo: '/doubles.png' },
  { name: 'gruppo activa', logo: '/gruppo activa.png' },
  { name: 'Easytear', logo: '/Easytear.png' },
  { name: 'ottica passuello', logo: '/ottica passuello.png' },
  { name: 'cappa pulita', logo: '/cappa pulita.png' },
];

const CompaniesSection = () => {
  return (
    <section id="companies" className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-sm font-semibold tracking-widest text-muted-foreground mb-12 uppercase">
          Trusted by Brands I’ve Helped Shape
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {companies.map((company, index) => {
            return (
              <div 
                  key={index} 
                  className="transition-all duration-300 brightness-0 invert opacity-50 hover:opacity-100" 
                  title={company.name}
              >
                  <Image 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      width={120}
                      height={40}
                      className="object-contain h-8"
                  />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
