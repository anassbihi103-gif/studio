import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ProjectCard from './project-card';

const projects = [
  {
    id: 1,
    title: "Easy tear all in one",
    category: "Environment Design",
    imageId: "project-1",
    description: "A high-poly futuristic urban environment created in Unreal Engine 5."
  },
  {
    id: 2,
    title: "Fanuc Robots",
    category: "Character Art",
    imageId: "project-2",
    description: "Organic-robotic fusion sculpt focusing on sub-surface scattering materials."
  },
  {
    id: 3,
    title: "Metalfer Products",
    category: "Product Render",
    imageId: "project-3",
    description: "Photorealistic rendering of a concept electric vehicle using Octane."
  },
  {
    id: 4,
    title: "Smart Kitchen",
    category: "Motion Graphics",
    imageId: "project-4",
    description: "Procedural geometry animation loop for a tech branding project."
  },
  {
    id: 5,
    title: "Stand for Cappa Pullita",
    category: "Game Assets",
    imageId: "project-5",
    description: "Optimized low-poly modular kit for real-time mobile environments."
  },
  {
    id: 6,
    title: "Tennis X Gruppo Activa",
    category: "Interior Design",
    imageId: "project-6",
    description: "Complex interior lighting setup utilizing global illumination and Ray Tracing."
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black mb-4 font-headline">SELECTED WORKS</h2>
            <div className="h-1.5 w-20 bg-primary"></div>
          </div>
          <p className="text-slate-400 max-w-md">
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
