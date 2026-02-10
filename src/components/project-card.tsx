import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Project = {
  id: number;
  title: string;
  category: string;
  imageId: string;
  description: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const image = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-secondary border border-border transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
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
      <div className="p-6">
        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
          {project.category}
        </div>
        <h3 className="text-xl font-bold mb-3 font-headline">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        <button className="flex items-center text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
          View Details <ExternalLink className="ml-2 w-4 h-4" />
        </button>
      </div>
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
