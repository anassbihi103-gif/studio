import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Antemotion', logo: '/antemotion.png' },
  { name: 'Metalfer', logo: '/metalfer.png' },
  { name: 'Double S', logo: '/doubles.png' },
  { name: 'TechCorp', logo: '/techcorp.png' },
  { name: 'Innovate Inc', logo: '/innovate.png' },
  { name: 'QuantumLeap', logo: '/quantumleap.png' },
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
                {[...companies, ...companies].map((company, index) => (
                    <div key={index} className="flex-shrink-0 w-64 h-20 flex justify-center items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" title={company.name}>
                        <Image 
                            src={company.logo} 
                            alt={`${company.name} logo`}
                            width={140}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
