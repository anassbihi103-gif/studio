import React from 'react';
import { Building2, Feather, Globe, Shield, Activity, Award } from 'lucide-react';

const companies = [
  { name: 'Urban Construct', icon: <Building2 className="w-20 h-20" /> },
  { name: 'Lightfeather', icon: <Feather className="w-20 h-20" /> },
  { name: 'GlobalNet', icon: <Globe className="w-20 h-20" /> },
  { name: 'Aegis Security', icon: <Shield className="w-20 h-20" /> },
  { name: 'Momentum', icon: <Activity className="w-20 h-20" /> },
  { name: 'Summit', icon: <Award className="w-20 h-20" /> },
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
                    <div key={index} className="flex-shrink-0 w-64 flex justify-center items-center text-muted-foreground/50 hover:text-foreground transition-all duration-300 hover:drop-shadow-[0_0_5px_hsl(var(--primary)/0.6)]" title={company.name}>
                        {company.icon}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
