import React from 'react';
import { Building2, Feather, Globe, Shield, Activity, Award } from 'lucide-react';

const companies = [
  { name: 'Urban Construct', icon: <Building2 className="w-16 h-16" /> },
  { name: 'Lightfeather', icon: <Feather className="w-16 h-16" /> },
  { name: 'GlobalNet', icon: <Globe className="w-16 h-16" /> },
  { name: 'Aegis Security', icon: <Shield className="w-16 h-16" /> },
  { name: 'Momentum', icon: <Activity className="w-16 h-16" /> },
  { name: 'Summit', icon: <Award className="w-16 h-16" /> },
];

const CompaniesSection = () => {
  return (
    <section id="companies" className="bg-secondary/50 border-b border-border py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">Companies</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center items-center text-muted-foreground/50 hover:text-foreground transition-all duration-300 hover:drop-shadow-[0_0_5px_hsl(var(--primary)/0.6)]" title={company.name}>
              {company.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
