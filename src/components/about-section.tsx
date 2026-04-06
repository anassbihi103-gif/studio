import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="max-w-md lg:col-span-1">
            <h2 className="text-3xl lg:text-4xl font-serif mb-6">
              About Me
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-muted-foreground text-xl mb-8 leading-relaxed">
              I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems. Highly accomplished 3D Visualization Specialist with a proven ability to bridge advanced technical modeling (CAD) and high-fidelity artistic production.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-base font-bold text-primary hover:text-primary/80">
              <a href="#contact">
                Let's Build Something Meaningful Together <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
