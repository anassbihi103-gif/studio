import React from 'react';
import { projects } from '@/lib/projects';
import ProjectCard from './project-card';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div>
            <h2 className="text-4xl font-black mb-4 font-headline">SELECTED WORKS</h2>
            <div className="h-1.5 w-20 bg-primary"></div>
          </div>
          <p className="text-muted-foreground max-w-md">
            A collection of digital artifacts ranging from procedural textures to full cinematic environment renders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
