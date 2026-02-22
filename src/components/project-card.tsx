import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Project } from '@/lib/projects';

const ProjectCard = ({ project }: { project: Project }) => {
  const image = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block h-full">
      <div className="relative overflow-hidden rounded-2xl bg-secondary border border-border transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col">
        <div className="aspect-[4/3] overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={project.title}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
            {project.category}
          </div>
          <h3 className="text-xl font-bold mb-3 font-headline">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
            {project.description}
          </p>
          <div className="mt-6 flex items-center text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
            View Project <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all pointer-events-none"></div>
      </div>
    </Link>
  );
};

export default ProjectCard;
