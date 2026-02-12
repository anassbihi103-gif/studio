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
    <section id="companies" className="bg-secondary/50 border-b border-border py-16 group">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">Companies</h3>
        </div>
        <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-marquee group-hover:pause">
                {[...companies, ...companies].map((company, index) => {
                  const isSmaller = ['Easytear', 'Double S', 'cappa pulita'].includes(company.name);
                  const isGlowy = company.name === 'ottica passuello';
                  return (
                    <div 
                        key={index} 
                        className={`flex-shrink-0 w-64 h-20 flex justify-center items-center transition-all duration-300 ${isGlowy ? 'drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]' : 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100'}`} 
                        title={company.name}
                    >
                        <Image 
                            src={company.logo} 
                            alt={`${company.name} logo`}
                            width={isSmaller ? 80 : 140}
                            height={isSmaller ? 15 : 50}
                            className="object-contain"
                        />
                    </div>
                  );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
