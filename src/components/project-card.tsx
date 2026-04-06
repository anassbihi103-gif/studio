import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Project } from '@/lib/projects';

const ProjectCard = ({ project }: { project: Project }) => {
  const image = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-secondary aspect-video mb-4">
        {image && (
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        )}
      </div>
      <div>
         <h3 className="text-2xl font-serif mb-1">{project.title}</h3>
         <p className="text-sm text-muted-foreground">{project.category}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
