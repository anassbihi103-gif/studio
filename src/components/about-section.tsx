import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects';
import ProjectCard from './project-card';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-md">
            <p className="text-primary font-bold mb-4">Behind the Designs</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-headline tracking-tighter">
              Shaping Experiences That Make Life Simpler
            </h2>
          </div>
          <div className='self-end'>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems. Highly accomplished 3D Visualization Specialist with a proven ability to bridge advanced technical modeling (CAD) and high-fidelity artistic production.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-base font-bold text-primary hover:text-primary/80">
              <a href="#contact">
                Let's Build Something Meaningful Together <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
        
        <div id="portfolio" className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
